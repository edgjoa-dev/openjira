import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
    return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton aria-label="menu">
                <MenuOutlined />
            </IconButton>
        </Toolbar>
    </AppBar>
    )
}
