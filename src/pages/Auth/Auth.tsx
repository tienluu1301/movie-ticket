import { Outlet } from 'react-router-dom'
import styles from './AuthStyle.module.scss'

export const Auth = () => {
    return (
        <section className={styles.authentication}>
            <div className={styles.container}>
                <Outlet />
            </div>
        </section>
    )
}
