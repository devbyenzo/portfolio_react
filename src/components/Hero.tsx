import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import githubAvatar from '../assets/github-avatar.jpg';

function Hero() {
  return (
    <section className="hero section-wrap" id="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" />
          ENZO PIETRANTONIO <span className="eyebrow-divider">/</span> SOFTWARE DEVELOPER
        </p>
        <h1 id="hero-title">
          Construindo produtos digitais
          <span className="title-accent"> com intenção.</span>
        </h1>
        <p className="hero-description">
          Desenvolvedor de software focado em aplicações web, sistemas e
          experiências digitais funcionais, do front-end à integração com APIs.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Ver projetos <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-quiet" href="#contact">
            Entre em contato
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="hero-aside"
        aria-label="Apresentação profissional"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="hero-aside-top">
          <span className="aside-index">01 / 06</span>
          <span className="aside-status">Disponível para oportunidades</span>
        </div>
        <a
          className="hero-avatar"
          href="https://github.com/devbyenzo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil de Enzo no GitHub"
        >
          <img
            src={githubAvatar}
            alt="Foto de perfil do GitHub de Enzo Pietrantonio"
            width={460}
            height={460}
          />
        </a>
        <div className="hero-aside-bottom">
          <div>
            <p className="aside-label">FORMAÇÃO</p>
            <p className="aside-value">Engenharia de Software — cursando</p>
          </div>
          <a href="#about" className="round-link" aria-label="Conheça meu trabalho">
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </motion.aside>

      <div className="hero-bottomline" aria-hidden="true">
        <span>PORTFÓLIO 2026</span>
        <span>DESENVOLVIMENTO · PRODUTO · WEB</span>
      </div>
    </section>
  );
}

export default Hero;
