import { MainCards } from './components/MainCards';
import { Route, Routes } from 'react-router-dom';
import { MainCardInfo } from './components/MainCardInfo/MainCardInfo';
import { Layout } from './components/Layout';
import { Modal } from './components/Modal/Modal';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainCards />} />
          <Route path='/:id' element={<MainCardInfo />} />
        </Route>
      </Routes>
      <Modal />
    </>
  );
}

export default App;
