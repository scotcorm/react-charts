import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './App.css';
import EntryDetailPage from './pages/EntryDetailPage';

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
        {/* <Route path='details/:entryId' element={<EntryDetailPage />} /> */}
        <Route path='details' element={<EntryDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
