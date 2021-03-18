import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: purple[600],
        },
        secondary: {
            main: purple[600],
        },
    },
});