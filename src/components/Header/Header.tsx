import { useDispatch, useSelector } from 'react-redux';
import { getInputValue } from 'Project/redux/cards/selectors';
import { AppDispatch } from 'Project/store';
import { setInputValue } from 'Project/redux/cards/reducer';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(getInputValue);
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <header>
      <div className='search'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#search' />
        </svg>
        <input
          type='text'
          id='input'
          placeholder='Search products'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </div>
      <div className='account'>
        <button type='button'>
          <svg
            className='account-icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <use href='#cart' />
          </svg>
        </button>
        <button type='button'>
          <svg
            className='account-icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <use href='#account-icon' />
          </svg>
        </button>
      </div>
    </header>
  );
};
