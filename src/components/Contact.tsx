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
    { icon: MessageCircle, label: 'WhatsApp', href: 'tel:+5511975292277' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devbyenzo/' }
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
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
          Contato
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Vamos criar algo{' '}
          <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
            interessante juntos
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] sm:p-8"
        >
          <h3 className="text-xl font-semibold text-slate-900">
            Envie uma mensagem
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
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
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
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
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-300 focus:outline-none"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
          className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-violet-50 to-sky-50 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Conecte-se
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            Disponível para projetos, freelas e oportunidades.
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
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
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <Icon size={16} />
                  {social.label}
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 space-y-3 rounded-[24px] border border-slate-200/80 bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-violet-700" />
              <span className="text-sm text-slate-700">
                enzwzz.dev@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-sky-700" />
              <span className="text-sm text-slate-700">
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
