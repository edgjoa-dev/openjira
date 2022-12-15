import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
    return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton
                aria-label="menu"
                size='large'
                edge='start'
            >
                <MenuOutlined />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}> OpenJira </Typography>
            </IconButton>
        </Toolbar>
    </AppBar>
    )
}
