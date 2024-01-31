import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

type IconWrapperProps = {
  hasLike: boolean;
};

export const IconFavoriteWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => {
    return prop !== 'hasLike';
  },
})<IconWrapperProps>(({ hasLike }) => {
  return {
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
  };
});
