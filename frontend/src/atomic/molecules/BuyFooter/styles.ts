import styled from "styled-components";

export const FormFooter = styled.div`
    padding: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.md};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;
