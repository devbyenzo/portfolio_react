import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  const logs = [
    'Inicializando ambiente...',
    'Carregando projetos...',
    'Preparando experiências...',
    'Organizando tecnologias...',
    'Portfólio pronto.',
  ];

  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 700);

          return 100;
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 700);

    return () => clearInterval(logTimer);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-[#F9F8F0]
      "
    >
      <div className="w-[340px]">
        {/* Perfil */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-10
            text-center
          "
        >
          <div
            className="
              mx-auto
              mb-5

              h-20
              w-20

              overflow-hidden

              rounded-full

              border
              border-black/10

              bg-white
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

          <h1
            className="
              text-2xl

              font-bold

              tracking-[0.25em]

              text-[#212121]
            "
          >
            ENZO
          </h1>

          <p
            className="
              mt-2

              text-xs

              tracking-[0.35em]

              text-[#6B6B6B]
            "
          >
            FULL STACK DEVELOPER
          </p>
        </motion.div>

        {/* Terminal */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            rounded-3xl

            border
            border-black/5

            bg-white

            p-5

            shadow-sm
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              mb-4
            "
          >
            <span
              className="
              h-2
              w-2
              rounded-full
              bg-[#212121]
            "
            />

            <span
              className="
              h-2
              w-2
              rounded-full
              bg-black/20
            "
            />

            <span
              className="
              h-2
              w-2
              rounded-full
              bg-black/10
            "
            />

            <span
              className="
                ml-auto

                text-xs

                text-[#6B6B6B]

                font-mono
              "
            >
              portfolio.exe
            </span>
          </div>

          <div
            className="
              space-y-2

              font-mono

              text-sm
            "
          >
            {logs.slice(0, currentLog + 1).map((log, index) => (
              <motion.p
                key={log}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  text-[#212121]
                "
              >
                <span className="text-[#6B6B6B]">$</span> {log}
                {index === currentLog && (
                  <span className="animate-pulse">_</span>
                )}
              </motion.p>
            ))}
          </div>

          {/* Progress */}

          <div className="mt-6">
            <div
              className="
                flex
                justify-between

                mb-2

                text-xs

                text-[#6B6B6B]
              "
            >
              <span>Loading</span>

              <span>{progress}%</span>
            </div>

            <div
              className="
                h-1.5

                overflow-hidden

                rounded-full

                bg-black/10
              "
            >
              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                className="
                  h-full

                  rounded-full

                  bg-[#212121]
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
