import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.spacing.md};
`;

export const SubRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: ${props => props.theme.spacing.md};
    padding: ${props => props.theme.spacing.sm};
`;
