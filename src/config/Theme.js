import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#3871C1';
const secondaryColor = '#FFBA60';
const tertiaryColor = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: primaryColor,
      orange: secondaryColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Montserrat',
      textTransform: 'None',
      fontWeight: 200,
      fontSize: '1.5rem',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: primaryColor,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: primaryColor,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: primaryColor,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWEight: 300,
      color: tertiaryColor,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.25rem',
      color: tertiaryColor,
      fontWeight: 300,
    },
  },
});
