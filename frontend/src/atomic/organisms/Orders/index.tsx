import { OrderRowMolecule } from "../../molecules/OrderRow";
import * as S from "./styles";

interface Cart {
    client_name: string;
    deliver_date: string;
    value: number;
    status: "PENDING" | "COMPLETED";
}

interface OrderRow {
    carts: Cart[];
}

export const OrdersOrganism = ({ carts }: OrderRow) => {
    return (
        <S.Orders>
            {carts &&
                carts.map(
                    ({ client_name, deliver_date, value, status }, index) => (
                        <OrderRowMolecule
                            key={index}
                            name={client_name}
                            date={deliver_date}
                            status={status}
                            price={value}
                        ></OrderRowMolecule>
                    ),
                )}
        </S.Orders>
    );
};
