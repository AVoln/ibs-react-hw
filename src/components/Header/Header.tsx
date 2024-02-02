import { useDispatch, useSelector } from 'react-redux';
import { getInputValue } from 'Project/redux/cards/selectors';
import { setInputValue } from 'Project/redux/cards/reducer';

import { AppDispatch } from 'Project/store';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { IconButtonWrapper } from './components/IconButtonWrapper';
import { useCallback } from 'react';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(getInputValue);

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputValue(e.target.value));
    },
    [dispatch]
  );

  return (
    <header className='header'>
      <div className='header-search'>
        <div className='search-icon'>
          <SearchOutlinedIcon />
        </div>
        <input
          type='text'
          placeholder='Search products'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </div>
      <div className='account'>
        <IconButtonWrapper>
          <ShoppingCartOutlinedIcon />
        </IconButtonWrapper>
        <IconButtonWrapper>
          <AccountCircleOutlinedIcon />
        </IconButtonWrapper>
      </div>
    </header>
  );
};
