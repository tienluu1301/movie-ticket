import styles from './LoadingStyle.module.scss'

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loadingDualRing}>
                <div className={styles.dualRing}>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
