import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home.js';
import Favourite from './components/Favourite/Favourite.js';
import About from './components/About/About.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/list/:listId" element={<List />} />
            <Route path="*"element={<ErrorPage />} />
          </Routes>
      </Container>
    </div>
  );
};

export default App;
