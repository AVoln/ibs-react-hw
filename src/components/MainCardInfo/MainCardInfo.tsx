import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardInfo } from 'Project/redux/cards/selectors';
import { fetchCardInfo } from 'Project/redux/cards/thunks';
import { AppDispatch } from 'Project/store';
import { Order } from 'Project/components/Order/Order';
import { BASE_URL } from 'Project/constants';

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

  const { id, picture, description, name, details, info } = cardInfo;

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
      <Order price={cardInfo.price} like={cardInfo.like} />
    </div>
  );
};
