import { IconButton, styled } from '@mui/material';

export const IconButtonWrapper = styled(IconButton)((_) => {
  return {
    color: 'var(--basicDarkColor)',
    '&:hover, &:focus': {
      color: 'var(--secondPrimaryColor)',
    },
  };
});
