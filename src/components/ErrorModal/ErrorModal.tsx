import { useSelector } from 'react-redux';
import { getErrorModalOpen } from 'Project/redux/cards/selectors';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalWrapper } from './ModalWrapper';

export function ErrorModal() {
  const isErrorModalOpen = useSelector(getErrorModalOpen);

  return (
    <Modal
      open={isErrorModalOpen}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <ModalWrapper>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Нет ответа от сервера
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Пожалуйста, проверьте связь с интернетом.
        </Typography>
      </ModalWrapper>
    </Modal>
  );
}
