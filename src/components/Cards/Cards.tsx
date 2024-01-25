import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, getCards } from '../../redux/cards';
import { AppDispatch } from '../../store';

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (!cards?.length) return null;

  return (
    <section className='cards'>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};
