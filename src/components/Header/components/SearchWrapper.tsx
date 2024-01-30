import { styled } from '@mui/material';

export const SearchWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    alignItems: 'center',
    '&:hover .search-icon': {
      color: 'var(--secondPrimaryColor)',
    },
  };
});
