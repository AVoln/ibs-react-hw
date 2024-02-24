import { Outlet } from "react-router-dom";
import { Header } from "Project/components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
