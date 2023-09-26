import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './NavigateStyle.module.scss'

export interface INavigate {
    navList: string[]
}

export const Navigate = ({ navList }: INavigate) => {
    return (
        <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            className={styles.navList}
        >
            {navList.map((item, index) => (
                <Link to="/" preventScrollReset={true} key={index}>
                    <Button
                        key={item}
                        sx={{ color: '#000', mr: 1 }}
                        className={styles.navLink}
                    >
                        {item}
                    </Button>
                </Link>
            ))}
        </Box>
    )
}
