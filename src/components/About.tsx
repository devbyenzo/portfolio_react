import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Entender antes de construir',
    detail: 'Começo pelo problema, pelo contexto e por quem vai usar a solução.',
  },
  {
    number: '02',
    title: 'Pensar de ponta a ponta',
    detail: 'Conecto interface, lógica e dados para criar experiências completas.',
  },
  {
    number: '03',
    title: 'Valorizar o que é essencial',
    detail: 'Busco clareza, boa execução e espaço para evoluir com consistência.',
  },
];

function About() {
  return (
    <section className="section-wrap content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow"><span>02</span> SOBRE MIM</p>
        <span className="section-rule" aria-hidden="true" />
      </div>

      <div className="about-grid">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Curiosidade técnica.
            <br />
            <span>Visão de produto.</span>
          </h2>
          <p>
            Sou Enzo, desenvolvedor de software interessado em desenvolvimento
            full-stack, automação de processos, aplicações web e soluções
            tecnológicas. Gosto de entender como as partes se conectam — da
            primeira interação à lógica que faz tudo funcionar.
          </p>
          <p>
            Meu objetivo é transformar necessidades em software útil: interfaces
            claras, sistemas bem estruturados e decisões técnicas que façam
            sentido para o projeto.
          </p>
          <a className="text-link" href="#expertise">
            Conheça minha stack <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="principles-list" aria-label="Minha abordagem">
          {principles.map((principle, index) => (
            <motion.article
              className="principle"
              key={principle.number}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="principle-number">{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>
              <span className="principle-mark" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
