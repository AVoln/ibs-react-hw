import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getCardInfo } from 'Project/redux/cards/selectors';
import { fetchCardInfo } from 'Project/redux/cards/thunks';
import { AppDispatch } from 'Project/store';
import { Order } from 'Project/components/Order/Order';
import { BASE_URL } from 'Project/constants';

import { CardInfoWrapper } from './MainCardInfo.styled';

export const MainCardInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams<{ id: string }>();
  const cardInfo = useSelector(getCardInfo);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCardInfo(params.id));
    }
  }, [dispatch, params.id]);

  if (!cardInfo) {
    return null;
  }

  const { picture, description, name, details, info, like, price } = cardInfo;

  return (
    <CardInfoWrapper>
      <div className='cardinfo-img-container'>
        <img
          src={`${BASE_URL}/${picture.path}`}
          alt={picture.alt}
          width='150'
          height='200'
        />
      </div>
      <div>
        <div className='cardinfo-specification'>
          <div className='cardinfo-text'>
            <h2>{name}</h2>
            <span>{info}</span>
            <h3>{description}</h3>
            <span>{details}</span>
          </div>
        </div>
        <Order price={price} like={like} />
      </div>
    </CardInfoWrapper>
  );
};
