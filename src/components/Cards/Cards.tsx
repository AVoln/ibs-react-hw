import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from 'Project/redux/cards';
import { Card } from 'Project/components/Card/Card';
import { AppDispatch } from 'Project/store';
import { getCardsByInputValue } from 'Project/redux/cards/selectors';

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getCardsByInputValue);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (!cards.length) return null;

  return (
    <section className='cards'>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};
