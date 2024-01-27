import { useState } from 'react';
// import { BASE_URL, CurrencyMap } from '@/constants';
import { BASE_URL, CurrencyMap } from '../../constants';
import { ICard } from '../../globalTypes';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  card: ICard;
}

export const Card = (props: CardProps) => {
  const { card } = props;
  const { id, name, description, like, picture, price } = card;
  const [toggleClass, setToggleClass] = useState(like);
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setToggleClass((toggleClass) => {
      return !toggleClass;
    });
  };

  const handleCardClick = () => {
    navigate(`/${id}`);
  };

  const handleCardEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      navigate(`/${id}`);
    }
  };

  return (
    <div
      className='card'
      tabIndex={0}
      id={id}
      onClick={handleCardClick}
      onKeyDown={handleCardEnter}
    >
      <button
        type='button'
        className={`card-favorite favorite ${
          toggleClass ? 'favorite-active' : ''
        }`}
        onClick={handleLike}
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#like' />
        </svg>
      </button>
      <div className='img-wrapper'>
        <img
          className='card-img'
          src={`${BASE_URL}/${picture.path}`}
          alt={`${BASE_URL}/${picture.alt}`}
          width='59'
          height='79'
        />
      </div>
      <p className='card-name'>{name}</p>
      <span className='card-description'>{description}</span>
      <span className='card-price'>{`${CurrencyMap[price.currency]}${
        price.value
      }`}</span>
    </div>
  );
};
