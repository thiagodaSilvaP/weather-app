import {ThemeProvider} from 'styled-components';

const theme = {
    colors: {
        bg_default: "#101014",
        bg_dark_light: "#1F1F21"
    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}