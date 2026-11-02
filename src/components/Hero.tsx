import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
          SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> ENZO
        </p>
        <h1 id="hero-title">
          Transformando ideias em{' '}
          <span className="title-accent">soluções digitais.</span>
        </h1>
        <p className="hero-description">
          Desenvolvedor de software focado na construção de aplicações,
          sistemas e experiências digitais funcionais, modernas e escaláveis.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explorar projetos <ArrowUpRight size={17} aria-hidden="true" />
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
        <div className="hero-monogram" aria-hidden="true">
          <span>e</span>
          <span className="monogram-line" />
          <span>wq_</span>
        </div>
        <div className="hero-aside-bottom">
          <div>
            <p className="aside-label">FOCO</p>
            <p className="aside-value">Full-stack & soluções digitais</p>
          </div>
          <a href="#about" className="round-link" aria-label="Conheça meu trabalho">
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </motion.aside>

      <div className="hero-bottomline" aria-hidden="true">
        <span>PORTFÓLIO 2026</span>
        <span>DESIGN · CÓDIGO · SOLUÇÕES</span>
      </div>
    </section>
  );
}

export default Hero;
