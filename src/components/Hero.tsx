import { motion } from 'framer-motion';
import { ArrowRight, Code2, Github, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const stack = ['Python', 'React', 'FastAPI', 'PostgreSQL'];

  return (
    <section
      id="hero"
      className="
        scroll-mt-24

        rounded-[32px]

        border
        border-black/5

        bg-[#FFFFFF]

        px-5
        py-8

        sm:px-8
        sm:py-10

        lg:px-10
        lg:py-14
      "
    >
      <div
        className="
        grid
        items-center
        gap-8

        lg:grid-cols-[1.1fr_0.9fr]
      "
      >
        {/* Texto */}
        <motion.div
          initial={{
            opacity: 0,
            x: -24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="
            badge-accent
            inline-flex
            items-center
            gap-2
          "
          ></div>

          <h1
            className="
              mt-6

              text-4xl

              font-semibold

              leading-tight

              text-[#212121]

              sm:text-5xl

              lg:text-6xl
            "
          >
            Eu sou <span className="text-[#212121]">Enzo Pietrantonio</span>
            <br />
            <span
              className="
                text-2xl
                font-medium
                text-[#6B6B6B]

                sm:text-3xl

                lg:text-4xl
              "
            >
              construindo produtos digitais com foco em clareza, experiência e
              desempenho.
            </span>
          </h1>

          <p
            className="
              mt-6

              max-w-2xl

              text-base

              leading-8

              text-[#6B6B6B]

              sm:text-lg
            "
          >
            Desenvolvedor Full-Stack trabalhando com Python, React e FastAPI
            para criar interfaces elegantes e soluções backend robustas.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button
              whileHover={{
                scale: 1.02,
                y: -1,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => scrollToSection('projects')}
              className="
                accent-btn

                inline-flex

                items-center

                gap-2
              "
            >
              <Code2 size={18} />
              Ver projetos
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.02,
                y: -1,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://github.com/devbyenzo"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex

                items-center

                gap-2

                rounded-full

                border
                border-black/10

                bg-[#FFFFFF]

                px-5

                py-3

                text-sm

                font-semibold

                text-[#212121]

                transition

                hover:bg-[#F9F8F0]
              "
            >
              <Github size={18} />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Card Projeto */}
        {/* Card Projeto */}
        <motion.div
          initial={{
            opacity: 0,
            x: 24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
    rounded-[28px]
    border
    border-black/5
    bg-[#FFFFFF]
    p-5
    shadow-xl
  "
        >
          <div
            className="
      flex
      items-center
      justify-between
    "
          >
            <p
              className="
        text-sm
        font-semibold
        text-[#212121]
      "
            >
              Disponibilidade
            </p>

            <span
              className="
        rounded-full
        bg-[#F9F8F0]
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[#212121]
      "
            >
              Aberto a projetos
            </span>
          </div>

          <h2
            className="
      mt-4
      text-2xl
      font-semibold
      text-[#212121]
    "
          >
            Vamos construir algo incrível?
          </h2>

          <p
            className="
      mt-3
      text-sm
      leading-7
      text-[#6B6B6B]
    "
          >
            Atualmente não estou focado em um projeto pessoal específico. Estou
            disponível para desenvolver sites, sistemas e soluções sob medida,
            transformando ideias em produtos modernos e funcionais.
          </p>

          <div
            className="
      mt-5
      space-y-3
      rounded-[24px]
      border
      border-black/5
      bg-[#F9F8F0]
      p-4
    "
          >
            <div
              className="
        flex
        justify-between
        text-sm
        text-[#6B6B6B]
      "
            >
              <span>Especialidade</span>

              <span
                className="
          font-semibold
          text-[#212121]
        "
              >
                Landing Pages & Sistemas
              </span>
            </div>

            <div
              className="
        flex
        justify-between
        text-sm
        text-[#6B6B6B]
      "
            >
              <span>Stack</span>

              <span
                className="
          font-semibold
          text-[#212121]
        "
              >
                React • TypeScript • Python
              </span>
            </div>
          </div>

          <div
            className="
      mt-5
      rounded-[24px]
      bg-[#212121]
      p-4
      text-[#F9F8F0]
    "
          >
            <p
              className="
        text-xs
        uppercase
        tracking-[0.3em]
        opacity-50
      "
            >
              Disponibilidade
            </p>

            <pre
              className="
        mt-3
        overflow-x-auto
        font-mono
        text-sm
        leading-7
      "
            >
              {`const availability = {
  status: "Available",
  focus: "New projects",
  contact: "Let's build together"
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
