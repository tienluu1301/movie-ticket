import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Container, AppBar, Toolbar } from '@mui/material'
import { NAV_LIST } from '../../../constant/common'
import { Brand, Navigate, Sidebar, AccountMenu } from './components'
import styles from './HeaderStyle.module.scss'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 980,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
    },
})

export const Header = () => {
    return (
        <header className={styles.header}>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav" color="primary">
                        <Container maxWidth="xl">
                            <Toolbar>
                                <Sidebar navList={NAV_LIST} />
                                <Brand />
                                <Navigate navList={NAV_LIST} />
                                <Box sx={{ flexGrow: 1 }} />
                                <AccountMenu />
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </header>
    )
}
