import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './App.css';
import DataDetailPage from './pages/DataDetailPage';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='details' element={<DataDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
