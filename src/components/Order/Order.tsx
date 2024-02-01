import { useMemo, useState } from 'react';

import { Button, Typography } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { CurrencyMap } from 'Project/constants';
import { IPrice } from 'Project/globalTypes';

import { OrderWrapper } from './component/OrderWrapper';
import { OrderAddWrapper } from './component/OrderAddWrapper';
import { CounterWrapper } from './component/CounterWrapper';
import { CounterButtonWrapper } from './component/CounterButtonWrapper';
import { CounterValueWrapper } from './component/CounterValueWrapper';
import { OrderFavoriteWrapper } from './component/OrderFavoriteWrapper';

interface OrderProps {
  like: boolean;
  price: IPrice;
}

const Order = (props: OrderProps) => {
  const { price } = props;
  const [count, setCount] = useState(1);
  const [hasLike, setHasLike] = useState<boolean>(false);

  const handlePlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const handleMinus = () => {
    setCount((prevValue) => {
      const result = prevValue - 1;

      return result || 1;
    });
  };

  const handleLike = () => {
    setHasLike((toggleClass) => !toggleClass);
  };

  const totalPrice = useMemo(() => {
    return price.value * count;
  }, [count, price.value]);

  return (
    <OrderWrapper>
      <Typography fontSize={'2.57rem'} color={'secondary'}>
        {`${CurrencyMap[price.currency]}${totalPrice}`}
      </Typography>
      <OrderAddWrapper>
        <CounterWrapper>
          <CounterButtonWrapper
            onClick={handleMinus}
            color='secondary'
            disabled={count === 1}
          >
            <RemoveOutlinedIcon />
          </CounterButtonWrapper>
          <CounterValueWrapper>{count}</CounterValueWrapper>
          <CounterButtonWrapper onClick={handlePlus} color='secondary'>
            <AddOutlinedIcon />
          </CounterButtonWrapper>
        </CounterWrapper>
        <Button variant='contained' color='secondary' disableElevation>
          Add to cart
        </Button>
      </OrderAddWrapper>
      <OrderFavoriteWrapper onClick={handleLike} hasLike={hasLike}>
        <FavoriteTwoToneIcon />
      </OrderFavoriteWrapper>
    </OrderWrapper>
  );
};

export { Order };
