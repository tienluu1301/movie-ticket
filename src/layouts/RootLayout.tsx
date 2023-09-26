import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

export const RootLayout = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
