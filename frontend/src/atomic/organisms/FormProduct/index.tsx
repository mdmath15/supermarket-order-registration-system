import {
    ChangeEvent,
    FormEvent,
    useCallback,
    useEffect,
    useState,
} from "react";
import { ButtonMolecule } from "../../molecules/Button";
import { BuyFooterMolecule } from "../../molecules/BuyFooter";
import { BuyHeaderMolecule } from "../../molecules/BuyHeader";
import { InputBoxMolecule } from "../../molecules/InputBox";
import { RowMolecule } from "../../molecules/Row";
import * as S from "./styles";

interface FormProducts {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onSelect(props: { index: number; value: number }): void;
    onAdd(): void;
    onRemove(index: number): void;
    rows: number;
    selected: number[];
    options: { id: number; name: string; price: number; qty_stock: number }[];
    count: number[];
    increaseQuantity(index: number): void;
    decreaseQuantity(index: number): void;
    totalPrice: string;
    buyAction(): void;
    nameValue: string;
    onChangeName(newName: string): void;
    dateValue: string;
    onChangeDate(newDate: string): void;
}

export const FormProductOrganism = ({
    onSubmit,
    onSelect,
    onRemove,
    selected,
    options,
    onAdd,
    rows,
    count,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    buyAction,
    nameValue,
    onChangeName,
    dateValue,
    onChangeDate,
}: FormProducts) => {
    const [rowsArray, setRowsArray] = useState(new Array(rows).fill(0));

    const Rows = useCallback(
        () =>
            rowsArray.map((value, index) => {
                const product = options.find(
                    ({ id }) => id === selected[index],
                );
                const filterOptions = options.filter(
                    ({ id, qty_stock }) => qty_stock && !selected.includes(id),
                );

                const increaseCount = () => {
                    increaseQuantity(index);
                };

                const decreaseCount = () => {
                    decreaseQuantity(index);
                };

                const onRemoveRow = () => {
                    onRemove(index);
                };

                return (
                    <RowMolecule
                        index={index}
                        key={index}
                        onRemove={onRemoveRow}
                        onSelect={onSelect}
                        selected={selected[index]}
                        options={[product, ...filterOptions]}
                        price={product.price}
                        quantity={product.qty_stock}
                        count={count[index]}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                    />
                );
            }),
        [rowsArray],
    );

    useEffect(() => {
        setRowsArray(oldArray =>
            rowsArray.length < rows ? [...oldArray, 0] : Array(rows).fill(0),
        );
    }, [rows, setRowsArray, count, selected]);

    return (
        <S.Form onSubmit={onSubmit}>
            <BuyHeaderMolecule />
            <InputBoxMolecule
                text="Nome do Cliente*: "
                placeholder="José Maria"
                value={nameValue}
                onChange={onChangeName}
            />
            <InputBoxMolecule
                text="Data da Entrega*: "
                placeholder="dd/mm/aaaa"
                value={dateValue}
                onChange={onChangeDate}
            />
            <S.RowBox>{Rows()}</S.RowBox>
            {rows !== options.length && (
                <ButtonMolecule text="+" onClick={onAdd} />
            )}
            <BuyFooterMolecule buyAction={buyAction} totalPrice={totalPrice} />
        </S.Form>
    );
};
