import { motion } from 'framer-motion';
import { Github, ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 mb-4 tracking-widest text-sm font-medium"
          >
            PYTHON DEVELOPER & FRONT-END LEARNER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Enzo Pietrantonio
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-semibold text-gray-300">
              Criando experiências digitais incríveis
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            Desenvolvedor apaixonado por Python, interfaces modernas e automações.
            Atualmente explorando o mundo do front-end com React e design systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              <Code size={20} />
              Ver Projetos
              <ArrowRight size={20} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/devbyenzo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Github size={20} />
              GitHub
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-2xl border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              Contato
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <pre className="text-sm text-gray-300 overflow-x-auto relative z-10 font-mono">
{`const developer = {
  name: "Enzo Pietrantonio",
  skills: ["Python", "HTML", "CSS", "React", "JS"]
  passion: "Modern UI/UX",
  learning: "Computer Engineering",
  status: "Building amazing things 🚀"
}`}
            </pre>

            {/* Animated cursor */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-5 bg-purple-400 ml-1 inline-block"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;