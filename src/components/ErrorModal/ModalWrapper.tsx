import { styled } from '@mui/material';

export const ModalWrapper = styled('div')((_) => {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'var(--basicWhiteColor)',
    border: '0.14rem solid var(--basicBlackColor)',
    padding: '3.5rem',
  };
});
