import { InputAtom } from "../../atoms/Input";
import { LabelAtom } from "../../atoms/Label";
import * as S from "./styles";

interface InputBox {
    text: string;
    placeholder: string;
    value: string;
    onChange(newValue: string): void;
}

export const InputBoxMolecule = ({
    placeholder,
    text,
    value,
    onChange,
}: InputBox) => {
    return (
        <S.InputBox>
            <LabelAtom text={text} />
            <InputAtom
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </S.InputBox>
    );
};
