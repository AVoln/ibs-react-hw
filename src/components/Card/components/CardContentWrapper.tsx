import { styled } from '@mui/material';

export const CardContentWrapper = styled('div')((_) => {
  return {
    display: 'flex',
    maxWidth: '15.71rem',
    gap: '1rem',
    padding: '1rem 1rem 1.5rem',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  };
});
