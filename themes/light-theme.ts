import { grey, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#7743DB'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#7743DB'
                }
            },
        }
    }
})


