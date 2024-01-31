import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getCardInfo } from 'Project/redux/cards/selectors';
import { fetchCardInfo } from 'Project/redux/cards/thunks';
import { AppDispatch } from 'Project/store';
import { Order } from 'Project/components/Order/Order';
import { BASE_URL } from 'Project/constants';

import { Typography } from '@mui/material';

import { CardInfoImgWrapper } from './components/CardInfoImgWrapper';
import { CardInfoWrapper } from './components/CardInfoWrapper';
import { CardInfoTextWrapper } from './components/CardInfoTextWrapper';
import { CardInfoTextInner } from './components/CardInfoTextInner';
import { CardInfoTitleWrapper } from './components/CardInfoTitleInner';

export const MainCardInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams<{ id: string }>();
  const cardInfo = useSelector(getCardInfo);

  useEffect(() => {
    if (!params.id) {
      return;
    }

    dispatch(fetchCardInfo(params.id));
  }, [dispatch, params.id]);

  if (!cardInfo) {
    return null;
  }

  const { picture, description, name, details, info } = cardInfo;

  return (
    <CardInfoWrapper>
      <CardInfoImgWrapper>
        <img
          src={`${BASE_URL}/${picture.path}`}
          alt={`${BASE_URL}/${picture.alt}`}
          width='150'
          height='200'
        />
      </CardInfoImgWrapper>
      <div>
        <CardInfoTextWrapper>
          <CardInfoTextInner>
            <CardInfoTitleWrapper>
              <Typography variant='h4' fontWeight={500}>
                {name}
              </Typography>
            </CardInfoTitleWrapper>
            <Typography component='span'>{info}</Typography>
            <CardInfoTitleWrapper>
              <Typography variant='h5' fontWeight={500}>
                {description}
              </Typography>
            </CardInfoTitleWrapper>
            <Typography component='span'>{details}</Typography>
          </CardInfoTextInner>
        </CardInfoTextWrapper>
        <Order price={cardInfo.price} like={cardInfo.like} />
      </div>
    </CardInfoWrapper>
  );
};
