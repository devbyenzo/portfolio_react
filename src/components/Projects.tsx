import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    title: 'GymManager',
    description:
      'Template completo para sistema de gerenciamento de academias, desenvolvido com foco em UI/UX, arquitetura de interfaces e escalabilidade. O projeto simula um painel administrativo moderno para futuras integrações com backend.',
    tech: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Java',
      'Spring Boot',
      'PostgreSQL',
    ],
    status: 'Template',
    github: 'https://github.com/devbyenzo/GymManager',
    demo: 'https://gymmanager-app.vercel.app/',
  },
  {
    title: 'Daniela Feijó Psicologia',
    description:
      'Landing Page desenvolvida para uma psicóloga, com foco em apresentação profissional, informações sobre atendimento, contato via WhatsApp e experiência responsiva para todos os dispositivos.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    status: 'Em produção',
    github: "#",
    demo: 'https://www.danielafeijopsicologia.com.br/',
  },
  {
    title: 'Academia Mazze',
    description:
      'Landing Page institucional criada para uma academia, apresentando modalidades, estrutura, horários e canais de contato através de um layout moderno e otimizado para conversão de novos alunos.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    status: 'Em produção',
    github: "#",
    demo: 'https://academiamazze.com.br/',
  },
  {
    title: "WEEB's Solutions",
    description:
      'Website institucional da WEEB\'s Solutions, desenvolvido para apresentar a empresa, seus serviços, diferenciais e portfólio utilizando uma interface moderna, animações suaves e design responsivo.',
    tech: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'EmailJS',
      'Vercel',
    ],
    status: 'Em produção',
    github: 'https://github.com/devbyenzo/site-weebs',
    demo: 'https://weebssolutions.com.br/',
  },
];

  return (
    <section
      id="projects"
      className="
        scroll-mt-24
        py-16

        sm:py-20

        lg:py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="mb-10"
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]

            text-[#6B6B6B]
          "
        >
          Projetos
        </p>

        <h2
          className="
            mt-3

            text-3xl

            font-semibold

            text-[#212121]

            sm:text-4xl
          "
        >
          Trabalhos que unem{' '}
          <span className="text-[#212121]">funcionalidade e experiência</span>
        </h2>
      </motion.div>

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            className="
              card

              p-6

            "
          >
            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    text-[#6B6B6B]
                  "
                >
                  Projeto {index + 1}
                </p>

                <h3
                  className="
                    mt-2

                    text-xl

                    font-semibold

                    text-[#212121]
                  "
                >
                  {project.title}
                </h3>
              </div>

              <span
                className="
                  rounded-full

                  bg-[#212121]

                  px-3

                  py-1

                  text-xs

                  font-semibold

                  uppercase

                  tracking-[0.25em]

                  text-[#F9F8F0]
                "
              >
                {project.status}
              </span>
            </div>

            <p
              className="
                mt-4

                text-sm

                leading-7

                text-[#6B6B6B]
              "
            >
              {project.description}
            </p>

            <div
              className="
                mt-5

                flex

                flex-wrap

                gap-2
              "
            >
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="
                mt-6

                flex

                flex-wrap

                gap-3
              "
            >
              <motion.a
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex

                  items-center

                  gap-2

                  rounded-full

                  border
                  border-black/10

                  bg-[#FFFFFF]

                  px-4

                  py-2

                  text-sm

                  font-medium

                  text-[#212121]

                  transition

                  hover:bg-[#F9F8F0]
                "
              >
                <Github size={16} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex

                  items-center

                  gap-2

                  rounded-full

                  border
                  border-black/10

                  bg-[#FFFFFF]

                  px-4

                  py-2

                  text-sm

                  font-medium

                  text-[#212121]

                  transition

                  hover:bg-[#F9F8F0]
                "
              >
                <ExternalLink size={16} />
                Preview
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
