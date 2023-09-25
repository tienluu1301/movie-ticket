import { Outlet } from 'react-router-dom'
import { Footer } from './components'

export const RootLayout = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>
    )
}
