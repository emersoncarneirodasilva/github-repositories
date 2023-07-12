import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-size: 14px;
    background-color: #0d2636;
    -webkit-font-smoothing: antialiased !important; 
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
  }

  button {
    cursor: pointer;
  }
`;
