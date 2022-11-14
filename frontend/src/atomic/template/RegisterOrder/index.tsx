import { ChangeEvent, FormEvent } from "react";
import { FormProductOrganism } from "../../organisms/FormProduct";
import { NotificationOrganism } from "../../organisms/Notification";
import { OrdersOrganism } from "../../organisms/Orders";
import * as S from "./styles";

interface Cart {
    client_name: string;
    deliver_date: string;
    value: number;
    status: "PENDING" | "COMPLETED";
}

interface RegisterOrder {
    onAdd(): void;
    onRemove(index: number): void;
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onSelect(props: { index: number; value: number }): void;
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

    carts: Cart[];
}

export const RegisterOrderTemplate = ({
    onAdd,
    onRemove,
    onSelect,
    onSubmit,
    options,
    selected,
    rows,
    count,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    buyAction,
    dateValue,
    nameValue,
    onChangeDate,
    onChangeName,
    carts,
}: RegisterOrder) => {
    return (
        <>
            <S.RegisterOrder>
                <FormProductOrganism
                    onAdd={onAdd}
                    onRemove={onRemove}
                    rows={rows}
                    onSelect={onSelect}
                    onSubmit={onSubmit}
                    options={options}
                    selected={selected}
                    count={count}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    totalPrice={totalPrice}
                    buyAction={buyAction}
                    dateValue={dateValue}
                    onChangeDate={onChangeDate}
                    onChangeName={onChangeName}
                    nameValue={nameValue}
                />
                <OrdersOrganism carts={carts}></OrdersOrganism>
            </S.RegisterOrder>
            <NotificationOrganism />
        </>
    );
};
