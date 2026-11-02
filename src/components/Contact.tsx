import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/devbyenzo',
    href: 'https://github.com/devbyenzo',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/devbyenzo',
    href: 'https://www.linkedin.com/in/devbyenzo/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    value: '@enzwq_',
    href: 'https://instagram.com/enzwq_',
    icon: Instagram,
  },
];

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-topline">
        <p className="eyebrow"><span>06</span> CONTATO</p>
        <span>DISPONÍVEL PARA OPORTUNIDADES</span>
      </div>

      <div className="contact-main">
        <div>
          <h2>
            Vamos construir
            <br />
            algo <span>relevante?</span>
          </h2>
          <p>
            Estou aberto a novas oportunidades, projetos e colaborações. Se
            você tem uma ideia ou procura alguém para desenvolver sua próxima
            solução, vamos conversar.
          </p>
          <a className="button button-primary contact-cta" href="mailto:enzwzz.dev@gmail.com">
            <Mail size={17} aria-hidden="true" />
            enzwzz.dev@gmail.com
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <nav className="contact-links" aria-label="Redes sociais">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon"><Icon size={18} aria-hidden="true" /></span>
                <span>
                  <small>{link.label}</small>
                  <strong>{link.value}</strong>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={17} aria-hidden="true" />
              </a>
            );
          })}
        </nav>
      </div>

      <div className="contact-bottom">
        <span>ENZO <span className="wordmark-period">.</span></span>
        <span>SOFTWARE DEVELOPER · FULL-STACK</span>
        <a href="#hero">VOLTAR AO TOPO ↑</a>
      </div>
    </section>
  );
}

export default Contact;
