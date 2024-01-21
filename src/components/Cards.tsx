import { Card } from './Card';
import { dataCards } from './data/dataCards';

export const Cards = () => {
  return (
    <section className='cards'>
      {dataCards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};
