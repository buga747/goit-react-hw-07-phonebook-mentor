import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Learn } from 'pages/Learn';

function App() {
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
