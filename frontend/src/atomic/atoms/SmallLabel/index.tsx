import * as S from "./styles";

interface SmallLabel {
    text: string;
}

export const SmallLabelAtom = ({ text }: SmallLabel) => {
    return (
        <small>
            <S.SmallLabel>{text}</S.SmallLabel>
        </small>
    );
};
