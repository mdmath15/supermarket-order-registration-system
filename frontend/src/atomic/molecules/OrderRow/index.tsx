import { LabelAtom } from "../../atoms/Label";
import * as S from "./styles";

enum Status {
    PENDING = "PENDENTE",
    COMPLETED = "CONCLUÍDO",
}

interface OrderRow {
    name: string;
    price: number;
    date: string;
    status: string;
}

export const OrderRowMolecule = ({ name, price, date, status }: OrderRow) => {
    const dateString = new Date(Date.parse(date));
    return (
        <S.OrderRow>
            <div>
                <LabelAtom text={`Nome: ${name}`}></LabelAtom>
                <LabelAtom
                    text={`Valor total: ${dateString.getDate()}/${dateString.getMonth()}/${dateString.getFullYear()}`}
                ></LabelAtom>
            </div>
            <div>
                <LabelAtom
                    text={`R$${(price / 100).toFixed(2).replace(".", ",")}`}
                ></LabelAtom>
                <LabelAtom text={`Status: ${Status[status]}`}></LabelAtom>
            </div>
        </S.OrderRow>
    );
};
