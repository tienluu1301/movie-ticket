import { ReactNode } from 'react'
import './GolobalStyles.scss'

interface IGlobalStyles {
    children: ReactNode
}

export const GlobalStyles = ({ children }: IGlobalStyles) => {
    return <>{children}</>
}
