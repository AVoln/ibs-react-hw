import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#323232',
    },
    secondary: {
      main: '#959595',
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
});
