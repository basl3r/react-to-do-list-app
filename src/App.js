import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home.js';
import Favourite from './components/Favourite/Favourite.js';
import About from './components/About/About.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Home />
        <Favourite />
        <About />
      </Container>
    </div>
  );
};

export default App;
