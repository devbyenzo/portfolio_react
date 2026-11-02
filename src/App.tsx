import { MotionConfig } from 'framer-motion';
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
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <Stack />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
