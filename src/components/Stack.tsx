import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Zap,
} from 'lucide-react';

const Stack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Globe,
      items: [
        { name: 'React', level: 'Intermediário' },
        { name: 'Tailwind CSS', level: 'Intermediário' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'Responsive Design', level: 'Intermediário' },
      ],
    },

    {
      category: 'Backend',
      icon: Server,
      items: [
        { name: 'Python', level: 'Avançado' },
        { name: 'FastAPI', level: 'Intermediário' },
        { name: 'REST APIs', level: 'Intermediário' },
        { name: 'SQL', level: 'Intermediário' },
      ],
    },

    {
      category: 'Desktop',
      icon: Smartphone,
      items: [
        { name: 'Tkinter', level: 'Intermediário' },
        { name: 'CustomTkinter', level: 'Intermediário' },
        { name: 'PyQt', level: 'Básico' },
      ],
    },

    {
      category: 'Ferramentas',
      icon: GitBranch,
      items: [
        { name: 'Git & GitHub', level: 'Intermediário' },
        { name: 'VS Code', level: 'Avançado' },
        { name: 'Figma', level: 'Básico' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avançado':
        return 'bg-[#212121] text-[#F9F8F0]';

      case 'Intermediário':
        return 'bg-[#F9F8F0] text-[#212121] border border-black/10';

      case 'Básico':
        return 'bg-white text-[#6B6B6B] border border-black/10';

      default:
        return 'bg-white text-[#212121]';
    }
  };

  return (
    <section
      id="stack"
      className="
        scroll-mt-24
        py-16

        sm:py-20

        lg:py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="mb-10"
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#6B6B6B]
          "
        >
          Tecnologias
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-semibold
            text-[#212121]

            sm:text-4xl
          "
        >
          Minha stack, organizada para <span>criar com mais liberdade</span>
        </h2>
      </motion.div>

      <div
        className="
          grid
          gap-6

          md:grid-cols-2

          lg:grid-cols-4
        "
      >
        {technologies.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              rounded-[24px]

              border
              border-black/5

              bg-[#FFFFFF]

              p-6

              shadow-sm
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-[#F9F8F0]

                  p-2

                  text-[#212121]
                "
              >
                <category.icon size={20} />
              </div>

              <h3
                className="
                  text-lg
                  font-semibold
                  text-[#212121]
                "
              >
                {category.category}
              </h3>
            </div>

            <div
              className="
                mt-5

                space-y-3
              "
            >
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    bg-[#F9F8F0]

                    px-3
                    py-2
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#212121]
                    "
                  >
                    {item.name}
                  </span>

                  <span
                    className={`
                      rounded-full
                      px-2.5
                      py-1

                      text-[11px]

                      font-semibold

                      uppercase

                      tracking-[0.2em]

                      ${getLevelColor(item.level)}
                    `}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className="
          mt-10

          grid

          gap-4

          md:grid-cols-2

          lg:grid-cols-4
        "
      >
        {[
          {
            icon: Code2,
            label: 'Clean Code',
            desc: 'Estrutura clara e organizada',
          },

          {
            icon: Palette,
            label: 'UI/UX Design',
            desc: 'Interfaces pensadas para o usuário',
          },

          {
            icon: Database,
            label: 'Databases',
            desc: 'Modelagem e integração de dados',
          },

          {
            icon: Zap,
            label: 'Performance',
            desc: 'Fluxos rápidos e eficientes',
          },
        ].map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.label}
              className="
                rounded-[24px]

                border
                border-black/5

                bg-[#FFFFFF]

                p-5

                text-center

                shadow-sm
              "
            >
              <div
                className="
                  mx-auto

                  flex

                  h-11

                  w-11

                  items-center

                  justify-center

                  rounded-2xl

                  bg-[#F9F8F0]

                  text-[#212121]
                "
              >
                <Icon size={20} />
              </div>

              <h4
                className="
                  mt-4
                  font-semibold
                  text-[#212121]
                "
              >
                {skill.label}
              </h4>

              <p
                className="
                  mt-2

                  text-sm

                  leading-7

                  text-[#6B6B6B]
                "
              >
                {skill.desc}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Stack;
