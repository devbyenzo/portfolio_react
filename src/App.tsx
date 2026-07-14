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
import Education from './components/Education';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

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
          className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(244,240,250,0.9)_40%,_rgba(236,245,252,0.95))] text-slate-900"
        >
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute left-[-80px] top-[-40px] h-72 w-72 rounded-full bg-rose-200/70 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-200/70 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Sidebar (fixed on large screens) */}
            <div className="hidden lg:block">
              <Navbar />
            </div>

            {/* Main content, leave space for the fixed sidebar on large screens */}
            <main className="mx-auto max-w-4xl lg:ml-[320px]">
              <div className="card p-4 sm:p-6 lg:p-8">
                <Hero />
                <About />
                <Education />
                <Projects />
                <Stack />
                <Contact />
                <Footer />
              </div>
            </main>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: rgba(15, 23, 42, 0.08);
            }
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #8b7ae8, #7bb8d8);
              border-radius: 999px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #7564d8, #67a9ca);
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;