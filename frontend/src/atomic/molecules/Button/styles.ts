import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: ${props => props.theme.spacing.md};
    padding-left: ${props => props.theme.spacing.md};
    padding-top: ${props => props.theme.spacing.sm};
    padding-bottom: ${props => props.theme.spacing.sm};
    background-color: ${props => props.theme.colors.button_Background};
    color: ${props => props.theme.colors.button_text};
    outline: 0;
    border-radius: ${props => props.theme.borderRadius};
    border-style: none;
`;
