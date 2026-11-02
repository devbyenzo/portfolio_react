import { motion } from 'framer-motion';
import { Boxes, Braces, Database, Server } from 'lucide-react';

const groups = [
  {
    name: 'Backend',
    detail: 'Lógica, serviços e integração.',
    icon: Server,
    items: ['Python', 'FastAPI', 'APIs REST'],
  },
  {
    name: 'Frontend',
    detail: 'Interfaces e experiências web.',
    icon: Braces,
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Database',
    detail: 'Persistência e organização de dados.',
    icon: Database,
    items: ['PostgreSQL', 'SQLite'],
  },
  {
    name: 'Tools & Infrastructure',
    detail: 'Ambientes, versionamento e entrega.',
    icon: Boxes,
    items: ['Docker', 'Linux', 'Git'],
  },
];

function Stack() {
  return (
    <section className="section-wrap content-section expertise-section" id="expertise">
      <div className="section-heading">
        <p className="eyebrow"><span>04</span> EXPERTISE</p>
        <span className="section-rule" aria-hidden="true" />
      </div>

      <div className="expertise-heading">
        <h2 className="section-title">
          Ferramentas para
          <br />
          <span>construir de ponta a ponta.</span>
        </h2>
        <p>
          Tecnologias que fazem parte do meu repertório para desenvolver
          aplicações web e soluções completas.
        </p>
      </div>

      <div className="expertise-list">
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="expertise-row"
              key={group.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="expertise-category">
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{group.name}</h3>
                  <p>{group.detail}</p>
                </div>
              </div>
              <ul className="expertise-items">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="expertise-index">0{index + 1}</span>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Stack;
