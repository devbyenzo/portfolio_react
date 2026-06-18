import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Zap, Target, Brain } from 'lucide-react';

const About = () => {
  const [stats, setStats] = useState({
    projects: 20,
    experience: 2,
    skills: 8,
    dedication: 100,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        projects: 20,
        experience: 2,
        skills: 8,
        dedication: 100,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

const skills = [
    { name: 'Python', icon: Code, level: 85 },
    { name: 'FastAPI', icon: Code, level: 80 },
    { name: 'React', icon: Code, level: 70 },
    { name: 'JavaScript', icon: Code, level: 70 },
    { name: 'SQL', icon: Code, level: 65 },
    { name: 'Git & GitHub', icon: Code, level: 65 },
];



  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 mb-4 tracking-widest text-sm font-medium"
          >
            SOBRE MIM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Desenvolvedor apaixonado por{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              tecnologia e design
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 leading-relaxed mb-8 text-lg"
          >
           Atualmente atuo no desenvolvimento de aplicações web, APIs e soluções de automação utilizando Python, FastAPI e React.
          Tenho experiência na criação de sistemas completos, desde o backend até interfaces modernas e responsivas.
          Busco desenvolver soluções eficientes, escaláveis e com uma ótima experiência para o usuário.

          </motion.p>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <skill.icon className="text-purple-400" size={24} />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Target, label: 'Projetos', value: stats.projects, suffix: '+' },
            { icon: Code, label: 'Anos de Exp.', value: stats.experience, suffix: '+' },
            { icon: Zap, label: 'Tecnologias', value: stats.skills, suffix: '+' },
            { icon: Brain, label: 'Dedicação', value: stats.dedication, suffix: '%' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <stat.icon className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <motion.h3
                className="text-3xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
              >
                {stat.value}{stat.suffix}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;