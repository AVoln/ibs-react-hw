import { styled } from '@mui/system';

export const OrderAddWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    gap: '1.14rem',

    '@media (max-width: 34rem)': {
      width: '100%',
      justifyContent: 'space-between',
    },

    '@media (max-width: 23rem)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});
