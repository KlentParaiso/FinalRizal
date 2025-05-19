import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Credits from './pages/Credits';
import CharacterDetail from './pages/CharacterDetail';
import Play from './pages/Play';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/play" element={<Play />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;