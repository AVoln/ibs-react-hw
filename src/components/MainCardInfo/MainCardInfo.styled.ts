import { styled } from '@mui/system';

export const CardInfoWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    padding: '0 1.71rem 1.71rem',

    '@media (max-width: 62.14rem)': {
      padding: '0 0 1.71rem',
      flexDirection: 'column',
    },

    '& > div.cardinfo-img-container': {
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
    },

    '& > div > div.cardinfo-specification': {
      paddingLeft: '1.14rem',
      '@media (max-width: 62.14rem)': {
        padding: '0 1.71rem',
      },
    },

    '& .cardinfo-text': {
      '& > h2': {
        paddingBottom: '1.7rem',
        fontSize: '1.71rem',
        '@media (max-width: 62.14rem)': {
          paddingTop: '1.71rem',
        },
      },
      '& > h3': {
        padding: '1.7rem 0',
        fontSize: '1.29rem',
      },
    },
  };
});
