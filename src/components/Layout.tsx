import { Outlet } from 'react-router-dom';
import { Header } from 'Project/components/Header/Header';
import { SvgSprite } from 'Project/components/SvgSprite/SvgSprite';

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
