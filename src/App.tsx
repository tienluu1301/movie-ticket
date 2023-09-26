import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './layouts/components'
import { Routes } from './routers'
import { ThemeProvider } from './context'
import { GlobalStyles } from './styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles>
                <Suspense fallback={<Loading />}>
                    <QueryClientProvider client={queryClient}>
                        <BrowserRouter>
                            <Routes />
                        </BrowserRouter>
                    </QueryClientProvider>
                </Suspense>
            </GlobalStyles>
        </ThemeProvider>
    )
}

export default App
