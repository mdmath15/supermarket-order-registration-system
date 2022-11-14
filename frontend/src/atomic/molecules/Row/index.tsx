import { LabelAtom } from "../../atoms/Label";
import { SelectAtom } from "../../atoms/Select";
import { ButtonMolecule } from "../Button";
import { CountBoxMolecule } from "../CountBox";
import * as S from "./styles";

interface Row {
    index: number;
    onRemove(): void;
    onSelect(value?: unknown): void;
    options: { id: number; name: string }[];
    selected: number;
    price: number;
    quantity: number;
    count: number;
    increaseCount(): void;
    decreaseCount(): void;
}

export const RowMolecule = ({
    index,
    onSelect,
    options,
    selected,
    onRemove,
    price,
    quantity,
    count,
    increaseCount,
    decreaseCount,
}: Row) => {
    return (
        <S.Row>
            <S.SubRow>
                <SelectAtom
                    index={index}
                    onSelect={onSelect}
                    options={options}
                    selected={selected}
                />
                <LabelAtom
                    text={`Preço: R$${price?.toString().replace(".", ",")}`}
                />
                <LabelAtom text={`Estoque: ${quantity}`} />
                <ButtonMolecule text="X" onClick={onRemove} />
            </S.SubRow>
            <S.SubRow>
                <LabelAtom text={`Quantidade: `} />
                <CountBoxMolecule
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
                    count={count || 0}
                />
            </S.SubRow>
        </S.Row>
    );
};
