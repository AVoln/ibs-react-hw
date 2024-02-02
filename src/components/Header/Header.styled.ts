import { styled } from '@mui/system';

export const HeaderContainer = styled('header')((_) => {
  return {
    display: 'flex',
    padding: '1.14rem 1.71rem 1.71rem',
    justifyContent: 'space-between',

    '& > input': { height: '20px' },

    '.header-search': {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '0.14rem solid transparent',
      transition: 'color 0.1s ease-in-out, border-bottom 0.1s ease-in-out',

      '&:hover, &:focus-within': {
        color: 'var(--secondPrimaryColor)',
        borderBottom: '0.14rem solid var(--secondPrimaryColor)',
      },

      '&:hover, &:focus-within > .search-icon': {
        color: 'var(--secondPrimaryColor)',
      },

      '& > input': {
        border: 'none',
        '@media (max-width: 25rem)': { width: '9.1rem' },
      },

      '& > input::placeholder': {
        color: 'var(--basicDarkColor)',
      },

      '& > input:focus': {
        outline: 'none',
      },
      '& > input:focus::placeholder': {
        color: 'transparent',
      },
    },

    '&-search-icon': {
      padding: '0.5rem',
    },

    '& > div.account > button': {
      color: 'var(--basicDarkColor)',
      '&:hover, &:focus': {
        color: 'var(--secondPrimaryColor)',
      },
    },
  };
});
