import { useSelector } from 'react-redux';
import { getErrorModalOpen } from 'Project/redux/cards/selectors';

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
        <h2 id='modal-modal-title'>Нет ответа от сервера</h2>
        <p id='modal-modal-description'>
          Пожалуйста, проверьте связь с интернетом.
        </p>
      </ModalWrapper>
    </Modal>
  );
}
