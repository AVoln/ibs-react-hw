import { ICard } from '../models';

interface CardProps {
  card: ICard;
}

export const Card = (props: CardProps) => {
  const { card } = props;
  const { id, name, description, like, picture, price } = card;

  return (
    <div className='card' tabIndex={0} id={id}>
      <button
        className={`card-favorite favorite ${like ? 'favorite-active' : ''}`}
        type='button'
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#like' />
        </svg>
      </button>
      <div className='img-wrapper'>
        <img
          className='card-img'
          src={picture.path}
          alt={picture.alt}
          // width='59'
          // height='79'
        />
      </div>
      <p className='card-name'>{name}</p>
      <span className='card-description'>{description}</span>
      <span className='card-price'>{`${price.currency}${price.value}`}</span>
    </div>
  );
};
