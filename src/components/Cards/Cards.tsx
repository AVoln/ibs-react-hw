import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from 'Project/redux/cards';
import { CCard } from 'Project/components/Card/Card';
import { AppDispatch } from 'Project/store';
import { getCardsByInputValue } from 'Project/redux/cards/selectors';
import { useEffect } from 'react';
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
        <CCard card={card} key={card.id} />
      ))}
    </CardsWrapper>
  );
};
