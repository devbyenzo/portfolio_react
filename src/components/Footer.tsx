import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        mt-6

        rounded-[28px]

        border
        border-black/5

        bg-[#FFFFFF]

        px-5
        py-8

        shadow-sm

        sm:px-8
      "
    >
      <div
        className="
          flex
          flex-col

          gap-8

          md:flex-row

          md:items-center

          md:justify-between
        "
      >
        {/* Perfil */}

        <motion.div
          initial={{
            opacity: 0,
            x: -16,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              h-10
              w-10

              overflow-hidden

              rounded-full

              border
              border-black/10
            "
          >
            <img
              src="https://avatars.githubusercontent.com/u/140750940?s=400"
              className="
                h-full
                w-full
                object-cover
              "
              alt="Enzo"
            />
          </div>

          <span
            className="
              text-lg

              font-semibold

              tracking-[0.2em]

              text-[#212121]
            "
          >
            Enzo Pietrantonio
          </span>
        </motion.div>

        {/* Frase */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center

            text-sm

            text-[#6B6B6B]

            md:text-left
          "
        >
          <p className="italic">“Código é poesia digital”</p>

          <p className="mt-1">
            Construindo o futuro, uma linha de código por vez.
          </p>
        </motion.div>

        {/* Botão topo */}

        <motion.button
          initial={{
            opacity: 0,
            x: 16,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToTop}
          className="
            inline-flex

            items-center

            justify-center

            rounded-full

            border
            border-black/10

            bg-[#FFFFFF]

            p-3

            text-[#212121]

            transition

            hover:bg-[#F9F8F0]
          "
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      {/* Bottom */}

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
        className="
          mt-8

          flex

          flex-col

          gap-3

          border-t

          border-black/5

          pt-6

          text-sm

          text-[#6B6B6B]

          md:flex-row

          md:items-center

          md:justify-between
        "
      >
        <p>© {currentYear} Enzo Pietrantonio. Todos os direitos reservados.</p>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <span>Feito com</span>

          <motion.span
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Heart className="text-[#212121]" size={16} />
          </motion.span>

          <span>e uma boa dose de café ☕</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
