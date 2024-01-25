import { MainCards } from './components/MainCards';
import { Route, Routes } from 'react-router-dom';
import { MainCardInfo } from './components/MainCardInfo/MainCardInfo';
import { Layout } from './components/Layout';
import { ErrorModal } from './components/ErrorModal/ErrorModal';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainCards />} />
          <Route path='/:id' element={<MainCardInfo />} />
        </Route>
      </Routes>
      <ErrorModal />
    </>
  );
}

export default App;
