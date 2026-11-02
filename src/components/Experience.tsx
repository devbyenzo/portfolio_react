import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const practicalWork = [
  {
    title: "Website institucional — WEEB's Solutions",
    category: 'Projeto web',
    detail:
      'Desenvolvimento de uma experiência institucional para apresentar a empresa, seus serviços, diferenciais e portfólio.',
    technologies: 'React · TypeScript · Framer Motion',
    link: 'https://weebssolutions.com.br/',
  },
  {
    title: 'Daniela Feijó Psicologia',
    category: 'Site profissional',
    detail:
      'Landing page responsiva para apresentar a profissional, informações sobre atendimento e contato via WhatsApp.',
    technologies: 'HTML · CSS · JavaScript',
    link: 'https://www.danielafeijopsicologia.com.br/',
  },
  {
    title: 'Academia Mazze',
    category: 'Site institucional',
    detail:
      'Página responsiva para apresentar modalidades, estrutura, horários e canais de contato da academia.',
    technologies: 'HTML · CSS · JavaScript',
    link: 'https://academiamazze.com.br/',
  },
  {
    title: 'GymManager',
    category: 'Template de produto',
    detail:
      'Exploração de UI/UX e arquitetura de interface para um painel de gerenciamento de academias, com backend previsto para integrações futuras.',
    technologies: 'React · TypeScript · Tailwind CSS',
    link: 'https://github.com/devbyenzo/GymManager',
  },
];

function Experience() {
  return (
    <section className="section-wrap content-section experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow"><span>05</span> EXPERIÊNCIA</p>
        <span className="section-rule" aria-hidden="true" />
      </div>

      <div className="experience-layout">
        <div className="experience-intro">
          <h2 className="section-title">
            Aprendizado em
            <br />
            <span>projetos reais.</span>
          </h2>
          <p>
            Minha experiência documentada está refletida nos projetos abaixo:
            trabalho com sites institucionais e interfaces de produto, do
            entendimento do conteúdo à implementação responsiva.
          </p>
          <p className="experience-note">
            Períodos, vínculos e cargos não foram informados; por isso, esta
            seção apresenta atividades por projeto, sem atribuir datas ou
            posições.
          </p>
        </div>

        <div className="experience-timeline">
          {practicalWork.map((item, index) => (
            <motion.article
              className="experience-item"
              key={item.title}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="timeline-marker" aria-hidden="true" />
              <div className="experience-item-heading">
                <span className="experience-category">{item.category}</span>
                <span className="experience-number">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="experience-item-footer">
                <span>{item.technologies}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${item.title}`}>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
