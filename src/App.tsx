import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loading key="loading" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black text-white overflow-x-hidden"
        >
          {/* Background Elements */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent blur-3xl" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Stack />
            <Contact />
            <Footer />
          </div>

          {/* Custom Scrollbar */}
          <style dangerouslySetInnerHTML={{
            __html: `
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.1);
            }
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #8b5cf6, #06b6d4);
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #7c3aed, #0891b2);
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;