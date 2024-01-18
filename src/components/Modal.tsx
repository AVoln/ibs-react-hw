export const Modal = () => {
  return (
    <div className='modal-error' id='myModal' aria-hidden='true'>
      <div className='modal-wrapper'>
        <div className='modal-window' role='dialog' aria-modal='true'>
          <button data-hystclose className='modal-close'>
            Закрыть
          </button>
          <p className='modal-text'></p>
        </div>
      </div>
    </div>
  );
};
