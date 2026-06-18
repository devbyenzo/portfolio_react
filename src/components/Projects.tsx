import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Luna Bot',
      description: 'Bot desenvolvido em Python com sistema de moderação, economia, níveis, comandos personalizados e painel de gerenciamento integrado. Projetado para automatizar tarefas e melhorar a experiência dos membros em comunidades Discord.',
      tech: ['Python', 'Discord.py', 'SQLite', 'FastAPI', 'React', 'TailwindCSS', 'OAuth2', 'Railway', 'Render', 'Cloudflare'],
      image: 'https://i.imgur.com/K7FXG4n.jpeg',
      github: 'https://github.com/devbyenzo/lunabot-showcase',
      demo: 'https://lunabot-617.pages.dev/',
      featured: true,
    },
    {
      title: 'API sistema avaliação',
      description: 'API REST desenvolvida com FastAPI para gerenciamento e processamento de avaliações. Possui endpoints organizados, integração com banco de dados e arquitetura focada em desempenho, escalabilidade e facilidade de integração com aplicações web.',
      tech: ['Python', 'FastAPI', 'SQLite', 'Uvicorn', 'Render'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?utm_source=chatgpt.com',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Pokedex Interativa ',
      description: 'Aplicação web desenvolvida para consulta e exploração de Pokémon em tempo real utilizando dados da PokéAPI. Possui busca dinâmica, exibição detalhada de informações e interface responsiva para diferentes dispositivos.',
      tech: ['Python', 'Requests', 'PokéAPI', 'CustomTkinter'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?utm_source=chatgpt.com',
      github: 'https://github.com/devbyenzo/PyDex',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 mb-4 tracking-widest text-sm font-medium">
          PROJETOS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Alguns dos meus{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            trabalhos recentes
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github size={20} className="text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={20} className="text-white" />
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/devbyenzo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
        >
          <Github size={20} />
          Ver mais no GitHub
          <ExternalLink size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;