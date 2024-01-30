import { Toolbar, styled } from '@mui/material';

export const HeaderInner = styled(Toolbar)((_) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '1.14rem',
    paddingRight: '1.71rem',
    paddingLeft: '1.71rem',
    paddingBottom: '1.71rem',
  };
});
