import { useNotification } from "../../../hooks/useNotification";
import { LabelAtom } from "../../atoms/Label";
import { ButtonMolecule } from "../Button";
import * as S from "./styles";

interface BuyFooter {
    totalPrice: string;
    buyAction(): void;
}

export const BuyFooterMolecule = ({ totalPrice, buyAction }: BuyFooter) => {
    return (
        <S.FormFooter>
            <LabelAtom text={`Valor Total: R$${totalPrice}`}></LabelAtom>
            <ButtonMolecule text="Pedir" onClick={buyAction}></ButtonMolecule>
        </S.FormFooter>
    );
};
