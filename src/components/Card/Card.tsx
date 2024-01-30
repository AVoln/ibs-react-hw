import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, CurrencyMap } from 'Project/constants';
import { ICard } from 'Project/globalTypes';
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from '@mui/material';
import { ImgWrapper } from './components/ImgWrapper';
import { CardContentWrapper } from './components/CardContentWrapper';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconFavoriteWrapper } from './components/IconFavoriteWrapper';
import { CardWrapper } from './components/CardWrapper';

interface CardProps {
  card: ICard;
}

export const CCard = (props: CardProps) => {
  const { card } = props;
  const { id, name, description, like, picture, price } = card;
  const [currentLike, setCurrentLike] = useState(like);
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentLike((prevCurrentLike) => {
      return !prevCurrentLike;
    });
  };

  const handleCardClick = () => {
    navigate(`/${id}`);
  };

  const handleCardEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Enter') {
      navigate(`/${id}`);
    }
  };

  return (
    // <>
    //   <div
    //     className='card'
    //     tabIndex={0}
    //     id={id}
    //     onClick={handleCardClick}
    //     onKeyDown={handleCardEnter}
    //   >
    //     <button
    //       type='button'
    //       className={`card-favorite favorite ${
    //         toggleClass ? 'favorite-active' : ''
    //       }`}
    //       onClick={handleLike}
    //     >
    //       <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    //         <use href='#like' />
    //       </svg>
    //     </button>
    //     <div className='img-wrapper'>
    //       <img
    //         className='card-img'
    //         src={`${BASE_URL}/${picture.path}`}
    //         alt={`${BASE_URL}/${picture.alt}`}
    //         width='59'
    //         height='79'
    //       />
    //     </div>
    //     <p className='card-name'>{name}</p>
    //     <span className='card-description'>{description}</span>
    //     <span className='card-price'>{`${CurrencyMap[price.currency]}${
    //       price.value
    //     }`}</span>
    //   </div>
    <CardWrapper>
      <CardActionArea onClick={handleCardClick} onKeyDown={handleCardEnter}>
        <ImgWrapper>
          <img
            src={`${BASE_URL}/${picture.path}`}
            alt={`${BASE_URL}/${picture.alt}`}
            width='59'
            height='79'
          />
        </ImgWrapper>
        <CardContentWrapper>
          <Typography align='center' variant='h6' component='p'>
            {name}
          </Typography>
          <Typography align='center' component='span'>
            {description}
          </Typography>
          <Typography align='center' component='span'>
            {`${CurrencyMap[price.currency]}${price.value}`}
          </Typography>
        </CardContentWrapper>
      </CardActionArea>
      <IconFavoriteWrapper
        color='secondary'
        onClick={handleLike}
        hasLike={currentLike}
      >
        <FavoriteBorderOutlinedIcon />
      </IconFavoriteWrapper>
    </CardWrapper>
    // </>
  );
};
