import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  html, body, #root {
    font-size: 62.5%;
    font-family: 'Lato'
  }
  h1,h2,h3 {
    font-family: sans-serif;
  }
`;
