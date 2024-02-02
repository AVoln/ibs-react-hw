import { styled } from '@mui/system';

type IconWrapperProps = {
  hasLike: boolean;
};

export const CardWrapper = styled('div', {
  shouldForwardProp: (prop) => {
    return prop !== 'hasLike';
  },
})<IconWrapperProps>(({ hasLike }) => {
  return {
    position: 'relative',

    '& > div.actions': {
      height: '100%',
      boxShadow: 'none',

      '&:hover, &:focus-visible': {
        outline: 'none',
        backgroundColor: 'var(--hoverCardColor)',
        boxShadow: '0.14rem 0.14rem 0.36rem 0 var(--shadowDarkColor)',
      },
    },

    '& > button.favorite': {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
      'svg > path:nth-of-type(1)': {
        opacity: hasLike ? 1 : 0,
      },
      color: hasLike ? 'var(--secondPrimaryColor)' : 'inherrit',

      '&:hover': {
        color: 'var(--secondPrimaryColor)',
        'svg > path:nth-of-type(1)': {
          opacity: 1,
        },
      },
    },
  };
});
