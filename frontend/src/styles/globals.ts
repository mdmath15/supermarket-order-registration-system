import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Inter custom',sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
    transition: color 500ms ease-out;
    :hover {
      color: ${props => props.theme.colors.text};
      opacity:0.8;
    }
  }
`;
