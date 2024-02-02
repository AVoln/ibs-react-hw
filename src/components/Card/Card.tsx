import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { BASE_URL, CurrencyMap } from 'Project/constants';
import { ICard } from 'Project/globalTypes';

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import { CardWrapper } from './components/CardWrapper';
import { IconButton } from '@mui/material';

interface ICardProps {
  card: ICard;
}

export const Card = ({ card }: ICardProps) => {
  const { id, name, description, like, picture, price } = card;
  const [hasLike, setHasLike] = useState<boolean>(like);
  const navigate = useNavigate();

  const navigateToCardInfo = useCallback(() => {
    navigate(`/${id}`);
  }, [id, navigate]);

  const handleLike = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setHasLike((prevCurrentLike) => {
      return !prevCurrentLike;
    });
  }, []);

  const handleCardClick = useCallback(() => {
    navigateToCardInfo();
  }, [navigateToCardInfo]);

  const handleCardEnter = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Enter') {
        navigateToCardInfo();
      }
    },
    [navigateToCardInfo]
  );

  return (
    <CardWrapper hasLike={hasLike}>
      <div
        className='actions'
        onClick={handleCardClick}
        onKeyDown={handleCardEnter}
        tabIndex={0}
      >
        <div className='card-image'>
          <img
            src={`${BASE_URL}/${picture.path}`}
            alt={picture.alt}
            width='59'
            height='79'
          />
        </div>
        <div className='card-content'>
          <p>{name}</p>
          <span>{description}</span>
          <span>{`${CurrencyMap[price.currency]}${price.value}`}</span>
        </div>
      </div>
      <IconButton className='favorite' onClick={handleLike}>
        <FavoriteTwoToneIcon />
      </IconButton>
    </CardWrapper>
  );
};
