import * as S from "./styles";

interface InputAtom {
    text: string;
}

export const LabelAtom = ({ text }: InputAtom) => {
    return <S.Label>{text}</S.Label>;
};
