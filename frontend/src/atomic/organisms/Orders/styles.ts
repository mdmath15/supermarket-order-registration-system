import styled from "styled-components";

export const Orders = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
    overflow-y: auto;
`;
