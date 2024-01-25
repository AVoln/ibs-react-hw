import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { SvgSprite } from './SvgSprite/SvgSprite';

const Layout = () => {
  return (
    <>
      <SvgSprite />
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
