import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { ICard } from '../../globalTypes';
import { getCards } from '../api';

export const Cards = () => {
  const [cards, setCards] = useState<ICard[]>();

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data.content);
    });
  }, []);

  if (!cards?.length) return null;

  return (
    <section className='cards'>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};
