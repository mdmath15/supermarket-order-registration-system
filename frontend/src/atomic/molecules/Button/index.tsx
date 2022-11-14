import * as S from "./styles";

interface ButtonMolecule {
    text?: string;
    onClick(): void;
}

export const ButtonMolecule = ({ text, onClick }: ButtonMolecule) => {
    return <S.Button onClick={onClick}>{text}</S.Button>;
};
