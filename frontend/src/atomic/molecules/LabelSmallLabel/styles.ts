import styled from "styled-components";

type NotificationType = "alert" | "warning" | "success";

interface Notification {
    type: NotificationType;
}

export const Notification = styled.div<Notification>`
    position: absolute;
    top: 0;
    right: 0;
    width: 320px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.notification[props.type]};
    padding: ${props => props.theme.spacing.xlg};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
        rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
    color: ${props => props.theme.colors.button_text};
    gap: ${props => props.theme.spacing.md};
`;
