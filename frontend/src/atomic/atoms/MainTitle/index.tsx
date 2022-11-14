import * as S from "./styles";

interface MainTitle {
    text: string;
}

export const MainTitleAtom = ({ text }: MainTitle) => {
    return <S.MainTitle>{text}</S.MainTitle>;
};
