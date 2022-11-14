import styled from "styled-components";

export const RegisterOrder = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.background_item};
    padding: ${props => props.theme.spacing.xlg};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
        rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;

    @media only screen and (min-width: 480px) {
        width: 480px;
        height: auto;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
`;
