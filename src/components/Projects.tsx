import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import gymManagerImage from '../assets/projects/gymmanager.png';
import danielaImage from '../assets/projects/daniela-feijo-psicologia.png';
import weebsImage from '../assets/projects/weebs-solutions.png';

type Project = {
  title: string;
  kind: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  demo?: string;
  github?: string;
  art?: 'fitness';
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

const projects: Project[] = [
  {
    title: 'GymManager',
    kind: 'Template de produto',
    description:
      'Template para um sistema de gerenciamento de academias, com foco em UI/UX, arquitetura de interfaces e escalabilidade.',
    problem:
      'Reunir a gestão de uma academia em uma interface administrativa clara.',
    solution:
      'Painel administrativo de demonstração, pensado para futuras integrações com backend.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/devbyenzo/GymManager',
    demo: 'https://gymmanager-app.vercel.app/',
    image: gymManagerImage,
    imageAlt: 'Captura de tela da página inicial do GymManager, com painel de gestão e destaque para funcionalidades da plataforma.',
    imageWidth: 1152,
    imageHeight: 768,
  },
  {
    title: 'Daniela Feijó Psicologia',
    kind: 'Site profissional',
    description:
      'Landing page para apresentar a profissional, os atendimentos e os canais de contato em uma experiência responsiva.',
    problem:
      'Apresentar informações profissionais e de atendimento de forma acessível.',
    solution:
      'Página institucional com apresentação, informações sobre atendimento e contato via WhatsApp.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://www.danielafeijopsicologia.com.br/',
    image: danielaImage,
    imageAlt: 'Captura de tela do site Daniela Feijó Psicologia, com apresentação profissional e informações do consultório.',
    imageWidth: 1029,
    imageHeight: 768,
  },
  {
    title: 'Academia Mazze',
    kind: 'Site institucional',
    description:
      'Landing page institucional com modalidades, estrutura, horários e canais de contato.',
    problem:
      'Organizar as informações da academia em um ponto de entrada para novos alunos.',
    solution:
      'Página responsiva que reúne informações sobre a academia e seus canais de contato.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://academiamazze.com.br/',
    art: 'fitness',
  },
  {
    title: "WEEB's Solutions",
    kind: 'Website institucional',
    description:
      'Website para apresentar a empresa, seus serviços, diferenciais e portfólio.',
    problem:
      'Apresentar a empresa e comunicar seus serviços e trabalhos em um só lugar.',
    solution:
      'Experiência institucional responsiva com animações suaves e apresentação do portfólio.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Vercel'],
    github: 'https://github.com/devbyenzo/site-weebs',
    demo: 'https://weebssolutions.com.br/',
    image: weebsImage,
    imageAlt: 'Captura de tela da página inicial da WEEB’s Solutions, com apresentação de serviços de sistemas, sites e automações.',
    imageWidth: 1019,
    imageHeight: 768,
  },
];

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div
      className={`project-art${project.art ? ` project-art--${project.art}` : ''}${project.image ? ' project-art--screenshot' : ''}`}
    >
      {project.image ? (
        <img
          className="project-screenshot"
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="art-browser"
          role="img"
          aria-label={`Conceito visual ilustrativo para ${project.title}; não é uma captura do site`}
        >
          <div className="art-browser-bar">
            <span /><span /><span />
            <span className="art-browser-label">CONCEITO · SEM CAPTURA</span>
          </div>
          {project.art === 'fitness' && (
            <div className="art-fitness">
              <div className="art-fitness-copy">
                <span className="art-kicker">MOVIMENTO É VIDA</span>
                <div className="art-fitness-title">SEU PRÓXIMO<br />PASSO.</div>
                <span className="art-fitness-cta">CONHEÇA A ACADEMIA ↗</span>
              </div>
              <div className="art-fitness-shape"><span>MAZZE</span></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="section-wrap content-section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow"><span>03</span> PROJETOS SELECIONADOS</p>
        <span className="section-rule" aria-hidden="true" />
      </div>

      <div className="projects-heading">
        <h2 className="section-title">
          Soluções pensadas
          <br />
          <span>para sair do papel.</span>
        </h2>
        <p>
          Uma seleção de projetos publicados e conceitos de produto. Cada case
          apresenta seu contexto, abordagem e tecnologias.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card${index === 0 ? ' project-card--featured' : ''}`}
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index === 0 ? 0 : 0.04 }}
          >
            <ProjectArtwork project={project} />
            <div className="project-copy">
              <div className="project-overline">
                <span>{project.kind}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-context">
                <div>
                  <span className="project-context-label">DESAFIO</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="project-context-label">ABORDAGEM</span>
                  <p>{project.solution}</p>
                </div>
              </div>
              <ul className="tech-list" aria-label="Tecnologias utilizadas">
                {project.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Ver projeto <ExternalLink size={15} aria-hidden="true" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Repositório <Github size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
