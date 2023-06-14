import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Header from "../partials/Header"

const theme = createTheme ({
    palette: {
        background: {
            primary: '#009688'
        }
    }
})

const Default = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <Container sx={{
                    padding: '15px 0',
                    }}>
                {children}
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Default