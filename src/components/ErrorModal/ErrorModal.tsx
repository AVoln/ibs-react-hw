import { useSelector } from 'react-redux';
import { getErrorModalOpen } from 'Project/redux/cards/selectors';

import { ModalWrapper } from './ErrorModal.styled';

export function ErrorModal() {
  const isErrorModalOpen = useSelector(getErrorModalOpen);

  return (
    <ModalWrapper
      open={isErrorModalOpen}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='modal-text'>
        <h2 id='modal-modal-title'>Нет ответа от сервера</h2>
        <p id='modal-modal-description'>
          Пожалуйста, проверьте связь с интернетом.
        </p>
      </div>
    </ModalWrapper>
  );
}
