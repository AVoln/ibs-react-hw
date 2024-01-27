import { useMemo, useState } from 'react';
import { CurrencyMap } from '../../constants';
import { IPrice } from '../../globalTypes';

interface OrderProps {
  like: boolean;
  price: IPrice;
}

const Order = (props: OrderProps) => {
  const { price } = props;
  const [count, setCount] = useState(1);
  const [toggleClass, setToggleClass] = useState(false);

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
    setToggleClass((toggleClass) => !toggleClass);
  };

  const totalPrice = useMemo(() => {
    return price.value * count;
  }, [count, price.value]);

  return (
    <div className='order'>
      <div className='order-price'>{`${
        CurrencyMap[price.currency]
      }${totalPrice}`}</div>
      <div className='add-wrapper'>
        <div className='counter'>
          <button
            className='counter-button counter-button--minus'
            type='button'
            onClick={handleMinus}
            disabled={count === 1}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <use href='#minus' />
            </svg>
          </button>
          <div className='count'>{count}</div>
          <button
            className='counter-button counter-button--plus'
            type='button'
            onClick={handlePlus}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <use href='#plus' />
            </svg>
          </button>
        </div>
        <div className='order-button'>
          <button type='button'>Add to cart</button>
        </div>
      </div>
      <button
        type='button'
        className={`order-favorite favorite ${
          toggleClass ? 'favorite-active' : ''
        }`}
        onClick={handleLike}
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#like' />
        </svg>
      </button>
    </div>
  );
};

export { Order };
