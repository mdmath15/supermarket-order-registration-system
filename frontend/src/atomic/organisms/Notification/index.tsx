import { useNotification } from "../../../hooks/useNotification";
import { LabelSmallLableMolecule } from "../../molecules/LabelSmallLabel";
import * as S from "./styles";

export const NotificationOrganism = () => {
    const { message, title, type, showNotification } = useNotification();
    return (
        <S.Notification type={type} showNotification={showNotification}>
            <LabelSmallLableMolecule title={title} subtitle={message} />
        </S.Notification>
    );
};
