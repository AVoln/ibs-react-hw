import { styled } from '@mui/system';

export const CardWrapper = styled('div')((_) => {
  return {
    position: 'relative',

    '& > div.actions': {
      height: '100%',
      boxShadow: 'none',

      '&:hover, &:focus-visible': {
        outline: 'none',
        backgroundColor: 'var(--hoverCardColor)',
        boxShadow: '0.14rem 0.14rem 0.36rem 0 var(--shadowDarkColor)',
        transition:
          'background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
      },
    },

    '& > div > div.card-image': {
      maxWidth: '6.36rem',
      margin: '0 auto',
      paddingTop: '2rem',
      textAlign: 'center',
    },

    '& > div > div.card-content': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '15.71rem',
      height: '100%',
      gap: '1rem',
      padding: '1rem 1rem 1.5rem',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',

      '& > p': {
        fontSize: '1.29rem',
      },

      '& > span': {
        color: 'var(--basicDarkGreyColor)',
      },
    },

    '& > button.favorite': {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
      'svg > path:nth-of-type(1)': {
        // opacity: hasLike ? 1 : 0,
        opacity: 0,
      },
      // color: hasLike ? 'var(--secondPrimaryColor)' : 'inherrit',
      color: 'inherrit',

      '&:hover': {
        color: 'var(--hoverColor)',
        'svg > path:nth-of-type(1)': {
          opacity: 1,
        },
      },
    },

    '&.has-like > button.favorite': {
      color: 'var(--secondPrimaryColor)',
      transition: 'color 0.1s ease-in-out',

      '& > svg > path:nth-of-type(1)': {
        opacity: 1,
        transition: 'opacity 0.1s ease-in-out',
      },
    },
  };
});
