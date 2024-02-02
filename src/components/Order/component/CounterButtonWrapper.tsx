import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const CounterButtonWrapper = styled(IconButton)((_) => {
  return {
    borderRadius: 0,
    border: '0.1rem solid var(--basicDarkColor)',
    color: 'var(--secondPrimaryColor)',
  };
});
