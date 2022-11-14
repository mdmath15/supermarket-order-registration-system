import { MainTitleAtom } from "../../atoms/MainTitle";
import * as S from "./styles";

export const BuyHeaderMolecule = () => {
    return (
        <S.FormHeader>
            <MainTitleAtom text="Carrinho"></MainTitleAtom>
        </S.FormHeader>
    );
};
