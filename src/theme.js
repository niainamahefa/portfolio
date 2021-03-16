import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#07111f',
    },
    secondary: {
      main: '#07d88b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#07111f',
    },
  },
});

export default theme;
