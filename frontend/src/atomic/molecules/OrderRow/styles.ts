import styled from "styled-components";

export const OrderRow = styled.button`
    display: flex;
    gap: ${props => props.theme.spacing.xlg};
    padding: ${props => props.theme.spacing.md};
    background-color: ${props => props.theme.colors.background};
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
`;
