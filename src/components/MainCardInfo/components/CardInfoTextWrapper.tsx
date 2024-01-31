import { styled } from '@mui/system';

export const CardInfoTextWrapper = styled('div')((_) => {
  return {
    paddingLeft: '1.14rem',

    '@media (max-width: 62.14rem)': {
      padding: '0 1.71rem',
    },
  };
});
