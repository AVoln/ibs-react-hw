import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

type IconWrapperProps = {
  hasLike: boolean;
};

export const OrderFavoriteWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => {
    return prop !== 'hasLike';
  },
})<IconWrapperProps>(({ hasLike }) => {
  return {
    '@media (max-width: 35rem)': {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translateY(70%) translateX(-40%)',
    },
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
