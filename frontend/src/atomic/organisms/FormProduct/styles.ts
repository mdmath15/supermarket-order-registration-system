import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
`;

export const RowBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    max-height: 30vh;
    overflow-y: auto;
`;
