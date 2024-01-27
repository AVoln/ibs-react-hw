import { Route, Routes } from 'react-router-dom';
import { MainCards } from 'Project/components/MainCards';
import { MainCardInfo } from 'Project/components/MainCardInfo/MainCardInfo';
import { Layout } from 'Project/components/Layout';
import { ErrorModal } from 'Project/components/ErrorModal/ErrorModal';

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
