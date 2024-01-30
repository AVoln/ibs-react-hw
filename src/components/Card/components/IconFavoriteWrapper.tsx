import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IconFavoriteWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => {
    return prop === 'hasLike';
  },
})<{ hasLike: boolean }>((params) => {
  console.log(params);

  return {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    '&:hover': {
      color: 'var(--secondPrimaryColor)',
    },
  };
});
