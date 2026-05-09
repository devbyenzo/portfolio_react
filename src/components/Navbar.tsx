import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/50 border-b border-white/10 z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-5">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-widest text-purple-400 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          ENZWZZ
        </motion.h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          {[
            { name: 'Sobre', id: 'about' },
            { name: 'Projetos', id: 'projects' },
            { name: 'Stack', id: 'stack' },
            { name: 'Contato', id: 'contact' },
          ].map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.1, color: '#a855f7' }}
              className="hover:text-white transition cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="flex flex-col items-center py-5 gap-4">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Stack', id: 'stack' },
              { name: 'Contato', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                className="text-gray-300 hover:text-white transition cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;