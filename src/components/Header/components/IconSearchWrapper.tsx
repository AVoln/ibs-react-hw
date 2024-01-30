import { styled } from '@mui/material';

export const IconSearchWrapper = styled('div')((_) => {
  return {
    padding: '0.5rem',
    '&:hover .search': {
      color: 'var(--secondPrimaryColor)',
    },
  };
});
