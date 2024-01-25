import { useLocation } from 'react-router-dom';
import { ICardInfo } from '../../globalTypes';
import { useEffect, useMemo, useState } from 'react';
import { getCard } from '../api';
import { BASE_URL } from '../../constants';
import { Order } from '../Order/Order';

export const MainCardInfo = () => {
  const location = useLocation();
  const [card, setCard] = useState<ICardInfo>();

  const cardId = useMemo(() => {
    const [_, id] = location.pathname.split('/');

    return id;
  }, [location.pathname]);

  useEffect(() => {
    getCard(cardId).then((res) => {
      setCard(res.data.content);
    });
  }, [cardId]);

  if (!card) return null;
  const { id, picture, description, details, info, name } = card;

  return (
    <div className='product-container' id={id} key={id}>
      <div className='img-container'>
        <img
          className='product-img'
          src={`${BASE_URL}/${picture.path}`}
          alt={`${BASE_URL}/${picture.alt}`}
          width='150'
          height='200'
        />
      </div>
      <div className='product-specification'>
        <div className='product-text'>
          <h2 className='product-title'>{name}</h2>
          <span className='product-info'>{info}</span>
          <h3 className='product-description'>{description}</h3>
          <span className='product-details'>{details}</span>
        </div>
      </div>
      <Order price={card.price} like={card.like} />
    </div>
  );
};
