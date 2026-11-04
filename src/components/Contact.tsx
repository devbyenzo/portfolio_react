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
        <div className="contact-copy">
          <p className="contact-kicker">TEM UM PROJETO EM MENTE?</p>
          <h2>
            Vamos <span>conversar?</span>
          </h2>
          <p>
            Aberto a oportunidades, projetos e boas conversas sobre tecnologia.
          </p>
        </div>

        <nav className="contact-links" aria-label="Canais de contato">
          <a className="contact-cta" href="mailto:enzwzz.dev@gmail.com">
            <Mail size={16} aria-hidden="true" />
            E-mail
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          {contactLinks.filter((link) => link.label === 'LinkedIn').map((link) => {
            const Icon = link.icon;
            return (
              <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                <Icon size={16} aria-hidden="true" />
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
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
