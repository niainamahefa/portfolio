import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d1117',
    },
    secondary: {
      main: '#07d88b',
    },
    dark: {
      main: '#152133',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff',
    },
    background: {
      default: '#0d1117',
    },
  },
});

export default theme;
