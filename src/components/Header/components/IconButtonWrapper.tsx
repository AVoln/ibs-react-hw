import { IconButton, styled } from '@mui/material';

export const IconButtonWrapper = styled(IconButton)((_) => {
  return {
    '&:hover': {
      color: 'var(--secondPrimaryColor)',
    },
  };
});
