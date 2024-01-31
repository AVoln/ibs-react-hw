import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCards } from 'Project/redux/cards';
import { Card } from 'Project/components/Card/Card';
import { AppDispatch } from 'Project/store';
import { getCardsByInputValue } from 'Project/redux/cards/selectors';

import { CardsWrapper } from './CardsWrapper';

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getCardsByInputValue);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (!cards.length) return null;

  return (
    <CardsWrapper>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </CardsWrapper>
  );
};
