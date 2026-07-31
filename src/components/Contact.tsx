import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Instagram, MessageCircle, Send, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/devbyenzo' },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/enzwq_',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'tel:+5511975292277',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/devbyenzo/',
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B6B6B]">
          Contato
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#212121] sm:text-4xl">
          Vamos criar algo <span>interessante juntos</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-black/5 bg-[#FFFFFF] p-6 shadow-xl sm:p-8"
        >
          <h3 className="text-xl font-semibold text-[#212121]">
            Envie uma mensagem
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#6B6B6B]"
              >
                Nome
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-black/5 bg-[#F9F8F0] px-4 py-3 text-sm text-[#212121] placeholder:text-[#6B6B6B] focus:border-[#212121]/20 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#6B6B6B]"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className="w-full rounded-2xl border border-black/5 bg-[#F9F8F0] px-4 py-3 text-sm text-[#212121] placeholder:text-[#6B6B6B] focus:border-[#212121]/20 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#6B6B6B]"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Conte-me sobre seu projeto..."
                className="w-full resize-none rounded-2xl border border-black/5 bg-[#F9F8F0] px-4 py-3 text-sm text-[#212121] placeholder:text-[#6B6B6B] focus:border-[#212121]/20 focus:outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#212121] px-5 py-3 text-sm font-semibold text-[#F9F8F0] transition hover:bg-[#2D2D2D]"
            >
              <Send size={16} />
              Enviar mensagem
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-black/5 bg-[#FFFFFF] p-6 shadow-xl sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B6B6B]">
            Conecte-se
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#212121]">
            Disponível para projetos, freelas e oportunidades.
          </h3>

          <p className="mt-4 text-base leading-8 text-[#6B6B6B]">
            Se você quer transformar uma ideia em uma experiência digital
            moderna, pode falar comigo.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#F9F8F0] px-4 py-2 text-sm font-medium text-[#212121] transition-colors hover:bg-[#212121] hover:text-[#F9F8F0]"
                >
                  <Icon size={16} />
                  {social.label}
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 space-y-3 rounded-[24px] border border-black/5 bg-[#F9F8F0] p-5">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#212121]" />
              <span className="text-sm text-[#6B6B6B]">
                enzwzz.dev@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-[#212121]" />
              <span className="text-sm text-[#6B6B6B]">
                +55 (11) 97529-2277
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;