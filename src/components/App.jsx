import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Learn } from 'pages/Learn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Vocabulary } from 'pages/Vocabulary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWords } from 'redux/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="vocabulary" element={<Vocabulary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
