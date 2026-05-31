import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: FiMail, label: 'Email', href: 'mailto:hello@example.com' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: '#111827' }}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 opacity-20" style={{ background: '#D4AF37' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#D4AF37' }}>
              {t('contact.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-20" style={{ background: '#D4AF37' }} />
          </div>
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            className="text-4xl md:text-5xl font-light text-white"
          >
            {t('contact.heading')} <span className="italic font-semibold" style={{ color: '#D4AF37' }}>{t('contact.highlight')}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            {t('contact.paragraph')}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-gray-500">{t('contact.name')}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t('contact.placeholderName')}
                className="bg-transparent border border-gray-700 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-all focus:border-yellow-500 focus:ring-0"
                style={{ '--tw-ring-shadow': 'none' }}
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-gray-500">{t('contact.email')}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={t('contact.placeholderEmail')}
                className="bg-transparent border border-gray-700 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-all focus:border-yellow-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-gray-500">{t('contact.message')}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder={t('contact.placeholderMessage')}
              className="bg-transparent border border-gray-700 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-all focus:border-yellow-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white transition-all"
              style={{ background: sent ? '#10B981' : 'linear-gradient(135deg, #D4AF37, #8A6B18)' }}
            >
              {sent ? (
                <>
                  <span>✓</span> {t('contact.sent')}
                </>
              ) : (
                <>
                  <FiSend size={14} /> {t('contact.sendMessage')}
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Divider */}
        <div className="my-16 h-px opacity-10" style={{ background: '#D4AF37' }} />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-600 text-xs tracking-widest uppercase">{t('contact.findOnline')}</p>
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: '#D4AF37' }}
                className="text-gray-600 transition-colors duration-200 hover:text-yellow-500"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
