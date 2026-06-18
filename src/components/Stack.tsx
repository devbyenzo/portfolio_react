import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Zap,
} from 'lucide-react';

const Stack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Globe,
      items: [
        { name: 'React', level: 'Intermediário' },
        { name: 'Tailwind CSS', level: 'Intermediário' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'Responsive Design', level: 'Intermediário' },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      items: [
        { name: 'Python', level: 'Avançado' },
        { name: 'FastAPI', level: 'Intermediário' },
        { name: 'REST APIs', level: 'Intermediário' },
        { name: 'SQL', level: 'Intermediário' },
      ],
    },
    {
      category: 'Desktop',
      icon: Smartphone,
      items: [
        { name: 'Electron', level: 'Básico' },
        { name: 'Tkinter', level: 'Intermediário' },
        { name: 'CustomTkinter ', level:  'Intermediário' },
        { name: 'PyQt', level: 'Básico' },
      ],
    },
    {
      category: 'Ferramentas',
      icon: GitBranch,
      items: [
        { name: 'Git & GitHub', level: 'Intermediário' },
        { name: 'VS Code', level: 'Avançado' },
        { name: 'Figma', level: 'Básico' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avançado':
        return 'from-green-500 to-green-600';
      case 'Intermediário':
        return 'from-yellow-500 to-yellow-600';
      case 'Básico':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-purple-400 mb-4 tracking-widest text-sm font-medium">
          TECNOLOGIAS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Minha{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            stack de desenvolvimento
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
                <category.icon className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">{category.category}</h3>
            </div>

            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 + itemIndex * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-300 font-medium">{item.name}</span>
                  <span className={`px-2 py-1 bg-gradient-to-r ${getLevelColor(item.level)} text-white text-xs rounded-full font-medium`}>
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { icon: Code, label: 'Clean Code', desc: 'Código limpo e organizado' },
          { icon: Palette, label: 'UI/UX Design', desc: 'Interfaces intuitivas' },
          { icon: Database, label: 'Databases', desc: 'SQL & NoSQL' },
          { icon: Zap, label: 'Performance', desc: 'Otimização e eficiência' },
        ].map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
          >
            <skill.icon className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold mb-2">{skill.label}</h4>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stack;