import { styled } from '@mui/system';

export const CounterValueWrapper = styled('div')((_) => {
  return {
    minWidth: '7.14rem',
    borderTop: '0.1rem solid var(--basicDarkColor)',
    borderBottom: '0.1rem solid var(--basicDarkColor)',
    textAlign: 'center',
    fontSize: '1.7rem',
    lineHeight: '3.14rem',
  };
});
