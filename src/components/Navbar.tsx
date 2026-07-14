import { useState } from 'react';
import {
  Menu,
  X,
  Github,
  Instagram,
  Mail,
  Sparkles,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: 'Início', id: 'hero', icon: Menu },
    { name: 'Projetos', id: 'projects', icon: Github },
    { name: 'Experiência', id: 'about', icon: Briefcase },
    { name: 'Educação', id: 'education', icon: GraduationCap },
    { name: 'Atividade', id: 'activity', icon: Sparkles },
    { name: 'Contato', id: 'contact', icon: Mail },
  ];

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/devbyenzo',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/enzwq_',
      label: 'Instagram',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/devbyenzo/',
      label: 'LinkedIn',
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <motion.header
        className="
          lg:hidden
          fixed
          top-4
          left-4
          right-4
          z-50

          rounded-2xl

          bg-[#212121]

          p-3

          shadow-xl
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                h-8
                w-8
                overflow-hidden
                rounded-full
              "
            >
              <img
                src="https://avatars.githubusercontent.com/u/140750940?s=400"
                alt="Enzo"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            <p className="text-sm font-semibold text-[#F9F8F0]">ENZO</p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-lg
              p-2

              text-[#F9F8F0]

              hover:bg-white/10

              transition
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 flex flex-wrap gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="
                  rounded-full

                  border
                  border-white/20

                  px-3
                  py-2

                  text-sm

                  text-[#F9F8F0]

                  hover:bg-white/10

                  transition
                "
              >
                {s.name}
              </button>
            ))}
          </div>
        )}
      </motion.header>

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden
          lg:flex

          fixed

          left-6
          top-6
          bottom-6

          w-64

          flex-col

          rounded-3xl

          bg-[#212121]

          p-6

          text-[#F9F8F0]

          shadow-xl

          z-40
        "
      >
        {/* Perfil */}
        <div className="mb-8 flex items-center gap-3">
          <div
            className="
              h-10
              w-10

              overflow-hidden

              rounded-xl

              border
              border-white/20
            "
          >
            <img
              src="https://avatars.githubusercontent.com/u/140750940?s=400"
              alt="Enzo"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                text-[#F9F8F0]/50
              "
            >
              Informações
            </p>

            <h2
              className="
                text-lg
                font-semibold
                text-[#F9F8F0]
              "
            >
              ENZO
            </h2>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {sections.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    flex

                    w-full

                    items-center

                    gap-3

                    rounded-xl

                    px-3

                    py-2

                    text-sm

                    font-medium

                    text-[#F9F8F0]

                    hover:bg-white/10

                    transition
                  "
                >
                  <item.icon size={16} className="text-[#F9F8F0]/70" />

                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes */}
        <div
          className="
            mt-4

            border-t

            border-white/10

            pt-4
          "
        >
          <p
            className="
              text-xs
              uppercase
              text-[#F9F8F0]/50
            "
          >
            Links
          </p>

          <div className="mt-3 flex flex-col gap-2">
            {socials.map((s) => {
              const Icon = s.icon;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex

                    items-center

                    gap-3

                    rounded-xl

                    px-3

                    py-2

                    text-sm

                    text-[#F9F8F0]

                    hover:bg-white/10

                    transition
                  "
                >
                  <Icon size={16} className="text-[#F9F8F0]/70" />

                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Ações */}
        <div className="mt-6 flex gap-3">
          <button
            className="
              rounded-full

              bg-white/10

              p-2

              hover:bg-white/20

              transition
            "
          >
            ⚙️
          </button>

          <button
            className="
              rounded-full

              bg-white/10

              p-2

              hover:bg-white/20

              transition
            "
          >
            🌐
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
