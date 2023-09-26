import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import styles from './BrandStyle.module.scss'

export const Brand = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block' } }}
            id={styles.navBrand}
        >
            <Link to="/">
                <strong>watch</strong>trailer
            </Link>
        </Typography>
    )
}
