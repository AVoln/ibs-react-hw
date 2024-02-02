import { useCallback, useMemo, useState } from 'react';

import { Button } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { CurrencyMap } from 'Project/constants';
import { IPrice } from 'Project/globalTypes';

import { OrderWrapper } from './component/OrderWrapper';
import { CounterButtonWrapper } from './component/CounterButtonWrapper';
import { OrderFavoriteWrapper } from './component/OrderFavoriteWrapper';

interface IOrderProps {
  like: boolean;
  price: IPrice;
}

export const Order = ({ price }: IOrderProps) => {
  const [count, setCount] = useState(1);
  const [hasLike, setHasLike] = useState<boolean>(false);

  const handlePlusClick = useCallback(() => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  }, []);

  const handleMinusClick = useCallback(() => {
    setCount((prevValue) => {
      const result = prevValue - 1;

      return result || 1;
    });
  }, []);

  const handleLikeClick = useCallback(() => {
    setHasLike((toggleClass) => !toggleClass);
  }, []);

  const totalPrice = useMemo(() => {
    return price.value * count;
  }, [count, price.value]);

  return (
    <OrderWrapper>
      <span className='order-price'>
        {`${CurrencyMap[price.currency]}${totalPrice}`}
      </span>
      <div className='add-wrapper'>
        <div className='counter'>
          <CounterButtonWrapper
            onClick={handleMinusClick}
            disabled={count === 1}
          >
            <RemoveOutlinedIcon />
          </CounterButtonWrapper>
          <div className='count'>{count}</div>
          <CounterButtonWrapper onClick={handlePlusClick}>
            <AddOutlinedIcon />
          </CounterButtonWrapper>
        </div>
        <Button disableElevation>Add to cart</Button>
      </div>
      <OrderFavoriteWrapper onClick={handleLikeClick} hasLike={hasLike}>
        <FavoriteTwoToneIcon />
      </OrderFavoriteWrapper>
    </OrderWrapper>
  );
};
