import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFF;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Inter', serif;
    font-size: 16px;
  }
`;
