import { useEffect } from "react";
import * as S from "./styles";

interface Select {
    index: number;
    onSelect(props: { index: number; value: number }): void;
    options: { id: number; name: string }[];
    selected: number;
}

export const SelectAtom = ({ onSelect, options, selected, index }: Select) => {
    return (
        <S.Select
            value={selected}
            defaultValue={selected}
            onChange={({ target }) =>
                onSelect({ index, value: parseInt(target.value) })
            }
        >
            {options.map(({ id, name }, index) => (
                <option value={id} key={id}>
                    {name}
                </option>
            ))}
        </S.Select>
    );
};
