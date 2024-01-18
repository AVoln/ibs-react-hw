export const Header = () => {
  return (
    <header>
      <div className='search'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <use href='#search' />
        </svg>
        <input type='text' id='input' placeholder='Search products' />
      </div>
      <div className='account'>
        <button type='button'>
          <svg
            className='account-icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <use href='#cart' />
          </svg>
        </button>
        <button type='button'>
          <svg
            className='account-icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <use href='#account-icon' />
          </svg>
        </button>
      </div>
    </header>
  );
};
