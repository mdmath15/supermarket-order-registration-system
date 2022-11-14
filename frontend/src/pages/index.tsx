import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { RegisterOrderTemplate } from "../atomic/template/RegisterOrder/index";
import { axiosClient } from "../config/axios";
import { useCart } from "../hooks/useCart";
import { useNotification } from "../hooks/useNotification";
import { convertDate } from "../utils/convert-date-to-timestamp.utils";

interface Products {
    products: { id: number; name: string; price: number; qty_stock: number }[];
}

interface Carts {
    carts: {
        client_name: string;
        deliver_date: string;
        value: number;
        status: "PENDING" | "COMPLETED";
    }[];
}

type Page = Products & Carts;

export default ({ products, carts }: Page) => {
    const [selected, setSelected] = useState<number[]>([products[0].id]);
    const [rows, setRows] = useState(1);
    const [quantity, setQuantity] = useState<number[]>([1]);
    const [totalPrice, setTotalPrice] = useState<string>("0,00");
    const [dateValue, setDateValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const { handleCart } = useCart();
    const { handleNotification } = useNotification();

    const handleSelected = useCallback(
        ({ index, value }: { index: number; value: number }) => {
            setSelected(oldSelected => {
                const copySelected = [...oldSelected];
                copySelected[index] = value;
                return copySelected;
            });
        },
        [setSelected, rows],
    );

    const handleAddRow = useCallback(() => {
        const filterOptions = products.filter(
            ({ id }) => !selected.includes(id),
        );
        setSelected(oldSelected => [...oldSelected, filterOptions[0].id]);
        setRows(oldValue => oldValue + 1);
        setQuantity(oldQuantity => [...oldQuantity, 1]);
    }, [products, selected, setRows, setSelected]);

    const handleRemoveRow = useCallback(
        (index: number) => {
            if (rows == 1) {
                return;
            }
            setSelected(oldSelected =>
                oldSelected.filter((value, i) => i !== index),
            );
            setRows(oldValue => oldValue > 0 && oldValue - 1);
            setQuantity(oldQuantity =>
                oldQuantity.filter((value, i) => i === index),
            );
        },
        [products, selected, setRows, setSelected],
    );

    const increaseQuantity = useCallback(
        (index: number) => {
            const productQuantity = products.find(
                ({ id }) => id === selected[index],
            ).qty_stock;

            if (quantity[index] < productQuantity) {
                return setQuantity(oldQuantity => {
                    const copyQuantity = [...oldQuantity];
                    copyQuantity[index] += 1;
                    return copyQuantity;
                });
            }

            return handleNotification({
                title: "Erro",
                message: "Não é pedir mais produtos",
                type: "alert",
            });
        },
        [setQuantity, quantity],
    );

    const decreaseQuantity = useCallback(
        (index: number) => {
            if (quantity[index] > 1) {
                return setQuantity(oldQuantity => {
                    const copyQuantity = [...oldQuantity];
                    copyQuantity[index] -= 1;
                    return copyQuantity;
                });
            }

            return handleNotification({
                title: "Erro",
                message: "Não é possivel pedir menos que 1 item",
                type: "alert",
            });
        },
        [setQuantity, quantity],
    );

    const handlePrice = useCallback(() => {
        const selectedProducts = products.filter(product =>
            selected.includes(product.id),
        );
        const quantityProducts = selected.map((id, index) => ({
            id,
            ammount: quantity[index],
        }));

        const prices = quantityProducts.map(({ id, ammount }) => {
            const { price } = selectedProducts.find(
                product => product.id === id,
            );
            return price * ammount;
        });

        const totalPrice = prices.reduce((a, b) => a + b);
        setTotalPrice(totalPrice.toFixed(2).replace(".", ","));
    }, [products, selected, quantity]);

    const handleName = (newName: string) => {
        setNameValue(newName);
    };

    const handleDate = (newDate: string) => {
        setDateValue(newDate);
    };

    const buyAction = () => {
        const deliver_date = convertDate(dateValue);

        if (deliver_date < Date.now()) {
            return handleNotification({
                title: "Erro",
                message: "Data inválida",
                type: "alert",
            });
        }

        if (!nameValue || !deliver_date) {
            return handleNotification({
                title: "Erro",
                message: "Por favor, preencha os campos",
                type: "alert",
            });
        }

        handleCart({
            client_name: nameValue,
            deliver_date,
            products: selected.map((id, index) => ({
                id,
                quantity: quantity[index],
            })),
        });
    };

    useEffect(() => {
        handlePrice();
    }, [handlePrice, products, selected, quantity]);

    return (
        <RegisterOrderTemplate
            onAdd={handleAddRow}
            onRemove={handleRemoveRow}
            rows={rows}
            onSelect={handleSelected}
            onSubmit={event => {
                event.preventDefault();
            }}
            options={products}
            selected={selected}
            count={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            totalPrice={totalPrice}
            buyAction={buyAction}
            dateValue={dateValue}
            onChangeDate={handleDate}
            nameValue={nameValue}
            onChangeName={handleName}
            carts={carts}
        />
    );
};

export async function getServerSideProps() {
    const { data: dataProducts } = await axiosClient.get<Products>("/products");
    const { data: cartProducts } = await axiosClient.get<Carts>("/carts");
    return {
        props: {
            products: dataProducts.products,
            carts: cartProducts.carts,
        },
    };
}
