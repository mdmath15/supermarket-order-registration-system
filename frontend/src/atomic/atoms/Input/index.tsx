import * as S from "./styles";

interface InputAtom {
    placeholder?: string;
    value: string;
    onChange(newValue: string): void;
}

export const InputAtom = ({ placeholder, value, onChange }) => {
    return (
        <S.Input
            placeholder={placeholder}
            value={value}
            onChange={event => onChange(event.target.value)}
        ></S.Input>
    );
};
