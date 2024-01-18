export const Card = () => {
  return (
    <div className='card' tabIndex={0}>
      <button className='card-favorite favorite' type='button'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#like' />
        </svg>
      </button>
      <div className='img-wrapper'>
        <img
          className='card-img'
          src='http://localhost:3006'
          alt='Фото товара.'
          width='59'
          height='79'
        />
      </div>
      <p className='card-name'>G Home</p>
      <span className='card-description'></span>
      <span className='card-price'>$129</span>
    </div>
  );
};
