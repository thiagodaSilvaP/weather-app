import {ThemeProvider} from 'styled-components';

const theme = {
    colors: {
        bg_default: "#101014",
        bg_dark_light: "#1F1F21",
        bg_grey: "#49494B",
        bg_light: "#fff"
    },
    sizes: {
        small: '1rem',
        medium: '2.5rem',
        large: '4rem'
    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}