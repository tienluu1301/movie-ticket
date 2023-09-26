import { Route, Routes as RouteList } from 'react-router-dom'
import { RootLayout } from '../layouts'
import { Auth, Signin, Signup } from '../pages/Auth'
import { Home } from '../pages/Home'

export const Routes = () => {
    return (
        <RouteList>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>

            <Route path="/" element={<Auth />}>
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </RouteList>
    )
}
