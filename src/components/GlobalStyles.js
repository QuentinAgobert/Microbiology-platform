import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;