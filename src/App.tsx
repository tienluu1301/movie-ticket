import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './layouts/components'
import { Routes } from './routers'
import { ThemeProvider } from './context'
import { GlobalStyles } from './styles'

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles>
                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </Suspense>
            </GlobalStyles>
        </ThemeProvider>
    )
}

export default App
