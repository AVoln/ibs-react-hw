import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#323232',
      light: '#959595',
    },
    secondary: {
      main: '#e97f03',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--secondPrimaryColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--secondPrimaryColor)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          flexShrink: 0,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover, &.Mui-focused': {
            boxShadow: '0.14rem 0.14rem 0.36rem 0rem var(--shadowDarkColor)',
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: '1.4rem',
      fontWeight: '400',
      textTransform: 'none',
    },
  },
});
