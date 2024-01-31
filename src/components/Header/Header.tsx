import { useDispatch, useSelector } from 'react-redux';
import { getInputValue } from 'Project/redux/cards/selectors';
import { setInputValue } from 'Project/redux/cards/reducer';

import { AppDispatch } from 'Project/store';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { HeaderWrapper } from './components/HeaderWrapper';
import { IconButtonWrapper } from './components/IconButtonWrapper';
import { HeaderInner } from './components/HeaderInner';
import { SearchWrapper } from './components/SearchWrapper';
import { IconSearchWrapper } from './components/IconSearchWrapper';
import { TextFieldWrapper } from './components/TextFieldWrapper';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(getInputValue);
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <SearchWrapper>
          <IconSearchWrapper color='primary' className='search-icon'>
            <SearchOutlinedIcon />
          </IconSearchWrapper>
          <TextFieldWrapper
            type='input'
            id='standard-basic'
            label='Search products'
            variant='standard'
            value={inputValue}
            onChange={handleChangeInputValue}
          />
        </SearchWrapper>
        <div>
          <IconButtonWrapper color='primary'>
            <ShoppingCartOutlinedIcon />
          </IconButtonWrapper>
          <IconButtonWrapper color='primary'>
            <AccountCircleOutlinedIcon />
          </IconButtonWrapper>
        </div>
      </HeaderInner>
    </HeaderWrapper>
  );
};
