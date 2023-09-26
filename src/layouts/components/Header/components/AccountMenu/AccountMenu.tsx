import { MouseEvent, useState } from 'react'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MoreIcon from '@mui/icons-material/MoreVert'
import { IUserInfo } from '../../../../../types/user.interface'
import styles from './AccountMenuStyle.module.scss'

export const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<Element | null>(null)
    const navigate = useNavigate()
    const user: Partial<IUserInfo> = {}
    const hasData = Object.keys(user).length

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    // Handle event click more icon
    const handleMobileMenuOpen = ({ currentTarget }: MouseEvent) => {
        setMobileMoreAnchorEl(currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    //Handle event click user icon
    const handleProfileMenuOpen = ({ currentTarget }: MouseEvent) => {
        setAnchorEl(currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleSignin = () => {
        handleMenuClose()
        return navigate('/user')
    }

    const handleLogout = () => {
        handleMenuClose()
    }

    // User info layout
    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleSignin}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    )

    // Info user
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {hasData ? (
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        className={styles.userIcon}
                    >
                        <AccountCircle />
                        <span>
                            {user.hoTen?.split(' ').slice(-2).join(' ')}
                        </span>
                    </IconButton>
                </MenuItem>
            ) : (
                <Link to="/signin" preventScrollReset={true}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        className={styles.signin}
                    >
                        <span>Sign in</span>
                    </IconButton>
                </Link>
            )}
        </Menu>
    )

    return (
        <>
            {hasData ? (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        className={styles.userIcon}
                    >
                        <AccountCircle />
                        <span>
                            {user.hoTen?.split(' ').slice(-2).join(' ')}
                        </span>
                    </IconButton>
                </Box>
            ) : (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link to="/signin" preventScrollReset={true}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            className={styles.signin}
                        >
                            <span>Sign in</span>
                        </IconButton>
                    </Link>
                </Box>
            )}

            {/* Toggle Info user*/}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>

            {renderMobileMenu}
            {renderMenu}
        </>
    )
}
