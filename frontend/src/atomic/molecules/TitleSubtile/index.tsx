import { useNotification } from "../../../hooks/useNotification";
import { LabelAtom } from "../../atoms/Label";
import { SmallLabelAtom } from "../../atoms/SmallLabel";

interface LabelSmallLable {
    title: string;
    subtitle: string;
}

export const LabelSmallLableMolecule = ({
    title,
    subtitle,
}: LabelSmallLable) => {
    return (
        <>
            <LabelAtom text={title}></LabelAtom>
            <SmallLabelAtom text={subtitle}></SmallLabelAtom>
        </>
    );
};
