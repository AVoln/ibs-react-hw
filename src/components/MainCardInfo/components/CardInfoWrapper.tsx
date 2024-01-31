import { styled } from '@mui/system';

export const CardInfoWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    padding: '0 1.71rem 1.71rem',

    '@media (max-width: 62.14rem)': {
      padding: '0 0 1.71rem',
      flexDirection: 'column',
    },
  };
});
