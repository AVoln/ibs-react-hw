import { styled } from '@mui/system';

export const CardInfoImgWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '21.43rem',
    minWidth: '21.43rem',
    border: '0.1rem solid var(--basicLightGreyColor)',

    '@media (max-width: 62.14rem)': {
      background:
        'linear-gradient(0deg, var(--shadowDarkColor) 0%, var(--basicWhiteColor) 50%)',
    },
  };
});
