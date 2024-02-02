import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { BASE_URL, CurrencyMap } from 'Project/constants';
import { ICard } from 'Project/globalTypes';

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import { IconFavoriteWrapper } from './components/IconFavoriteWrapper';
import { CardWrapper } from './components/CardWrapper';
import { CardActionWrapper } from './components/CardActionWrapper';

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
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.code === 'Enter') {
        navigateToCardInfo();
      }
    },
    [navigateToCardInfo]
  );

  return (
    <CardWrapper>
      <CardActionWrapper onClick={handleCardClick} onKeyDown={handleCardEnter}>
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
      </CardActionWrapper>
      <IconFavoriteWrapper onClick={handleLike} hasLike={hasLike}>
        <FavoriteTwoToneIcon />
      </IconFavoriteWrapper>
    </CardWrapper>
  );
};
