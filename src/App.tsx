import { MotionConfig } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Stack from './components/Stack';
import './App.css';

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className={`site-shell${lightTheme ? ' site-shell--light' : ''}`}>
        <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <button
          className="theme-toggle"
          type="button"
          aria-label={lightTheme ? 'Ativar tema escuro' : 'Ativar tema claro'}
          onClick={() => setLightTheme((current) => !current)}
        >
          {lightTheme
            ? <Moon size={18} aria-hidden="true" />
            : <Sun size={18} aria-hidden="true" />}
        </button>
      </div>
    </MotionConfig>
  );
}

export default App;
