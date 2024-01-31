import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { BASE_URL, CurrencyMap } from 'Project/constants';
import { ICard } from 'Project/globalTypes';

import { Typography } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import { ImgWrapper } from './components/ImgWrapper';
import { CardContentWrapper } from './components/CardContentWrapper';
import { IconFavoriteWrapper } from './components/IconFavoriteWrapper';
import { CardWrapper } from './components/CardWrapper';
import { CardActionWrapper } from './components/CardActionWrapper';

interface CardProps {
  card: ICard;
}

export const Card = (props: CardProps) => {
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
    <CardWrapper>
      <CardActionWrapper onClick={handleCardClick} onKeyDown={handleCardEnter}>
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
      </CardActionWrapper>
      <IconFavoriteWrapper onClick={handleLike} hasLike={currentLike}>
        <FavoriteTwoToneIcon />
      </IconFavoriteWrapper>
    </CardWrapper>
  );
};
