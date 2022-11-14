import { InputAtom } from "../../atoms/Input";
import { LabelAtom } from "../../atoms/Label";
import { ButtonMolecule } from "../Button";
import * as S from "./styles";

interface InputBox {
    count: number;
    increaseCount(): void;
    decreaseCount(): void;
}

export const CountBoxMolecule = ({
    count,
    increaseCount,
    decreaseCount,
}: InputBox) => {
    return (
        <S.CountBox>
            <ButtonMolecule onClick={decreaseCount} text="<" />
            <LabelAtom text={count.toString()} />
            <ButtonMolecule onClick={increaseCount} text=">" />
        </S.CountBox>
    );
};
