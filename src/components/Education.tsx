import { GraduationCap, Award, BookOpen, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    icon: GraduationCap,
    title: 'Engenharia de Software',
    institution: 'UNINTER',
    period: '2026 - Em andamento',
    description:
      'Graduação focada em desenvolvimento de software, arquitetura, engenharia e boas práticas de programação.',
    status: 'Cursando',
  },
  {
    icon: Award,
    title: "CS50's Introduction to Programming with Python",
    institution: 'Harvard University',
    period: 'Concluído',
    description:
      'Curso de fundamentos da programação utilizando Python, lógica, estruturas de dados e resolução de problemas.',
    status: 'Certificado',
  },
  {
    icon: Code2,
    title: 'Formação Python',
    institution: 'SENAI',
    period: 'Concluído',
    description:
      'Cursos de programação Python abordando fundamentos, automações e desenvolvimento de aplicações.',
    status: 'Certificado',
  },
  {
    icon: BookOpen,
    title: 'Full Stack Web Development',
    institution: 'Estudos contínuos',
    period: 'Em andamento',
    description:
      'Desenvolvimento web utilizando React, TypeScript, Python, APIs REST e bancos de dados.',
    status: 'Aprendendo',
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <div className="mb-10">
        <p
          className="
            text-sm
            uppercase
            tracking-wider
            text-[#6B6B6B]
          "
        >
          Formação
        </p>

        <h2
          className="
            text-3xl
            font-bold
            text-[#212121]
          "
        >
          Educação & Certificações
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            text-[#6B6B6B]
          "
        >
          Minha jornada de aprendizado, desde fundamentos da programação até
          desenvolvimento de aplicações completas.
        </p>
      </div>

      <div className="grid gap-5">
        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                flex
                gap-5

                rounded-3xl

                bg-[#FFFFFF]

                border
                border-black/5

                p-6

                shadow-sm

                transition

                hover:shadow-md
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12

                  shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  bg-[#F9F8F0]

                  text-[#212121]
                "
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >
                  <h3
                    className="
                      font-semibold
                      text-[#212121]
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      rounded-full

                      bg-[#212121]

                      px-3
                      py-1

                      text-xs

                      font-medium

                      text-[#F9F8F0]
                    "
                  >
                    {item.status}
                  </span>
                </div>

                <p
                  className="
                    mt-1

                    text-sm

                    text-[#6B6B6B]
                  "
                >
                  {item.institution} • {item.period}
                </p>

                <p
                  className="
                    mt-3

                    text-sm

                    leading-relaxed

                    text-[#6B6B6B]
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
