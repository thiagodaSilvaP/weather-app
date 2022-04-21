import {createGlobalStyle, ThemeProvider} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`

