import { styled } from '@mui/system';

export const OrderWrapper = styled('div')((_) => {
  return {
    position: 'relative',
    display: 'flex',
    padding: '1.71rem 1.71rem 0',
    alignItems: 'center',
    gap: '1.14rem',

    '@media (max-width: 35rem)': {
      flexDirection: 'column',
      alignItems: 'start',
    },

    '@media (max-width: 25rem)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});
