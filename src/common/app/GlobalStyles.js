import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background:white;
    height: 100vh;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
 
  }
`;
export default GlobalStyle;
