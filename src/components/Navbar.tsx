import { AnimatePresence, motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Experiência', id: 'experience' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Contato', id: 'contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devbyenzo/', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/enzwq_', icon: Instagram },
  { label: 'GitHub', href: 'https://github.com/devbyenzo', icon: Github },
  { label: 'E-mail', href: 'mailto:enzwzz.dev@gmail.com', icon: Mail },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    );

    ['hero', ...links.map((link) => link.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${menuOpen ? ' menu-is-open' : ''}`}>
        <div className="nav-inner">
          <a className="wordmark" href="#hero" aria-label="Enzo — início" onClick={closeMenu}>
            ENZO<span className="wordmark-period">.</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => (
              <a
                key={link.id}
                className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Navegação mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {links.map((link, index) => (
                <a
                  key={link.id}
                  className={`mobile-nav-link${activeSection === link.id ? ' is-active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <nav className="social-rail" aria-label="Redes e contato">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
