import { ReactNode, createContext, useState } from 'react'
import styles from './ThemeStyle.module.scss'

interface ITheme {
    children: ReactNode
}

export const ThemeContext = createContext<string[] | null>(null)

export const ThemeProvider = ({ children }: ITheme) => {
    const [theme, setTheme] = useState('light-theme')

    return (
        <ThemeContext.Provider value={[theme]}>
            <div className={styles.theme}>{children}</div>
        </ThemeContext.Provider>
    )
}
