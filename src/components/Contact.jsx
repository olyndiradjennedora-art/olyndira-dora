import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiPhone } from 'react-icons/fi';

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
    { icon: FiGithub,   label: 'GitHub',  href: 'https://github.com' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FiPhone,    label: 'Phone',    href: 'tel:+23672166776' },
    { icon: FiMail,     label: 'Email',    href: 'mailto:olyndiradjennedora@gmail.com' },
  ];

  const inputStyle = {
    background: 'transparent',
    border: '1px solid var(--input-border)',
    color: 'var(--input-text)',
    outline: 'none',
    padding: '14px 16px',
    fontSize: '14px',
    width: '100%',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-b)', transition: 'background 0.3s ease' }}
    >
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
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('contact.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
          </div>
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              fontSize: '36px',
              color: 'var(--text-heading)',
            }}
          >
            {t('contact.heading')}{' '}
            <span style={{ color: '#3B82F6' }}>{t('contact.highlight')}</span>
          </h2>
          <p
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'var(--text-muted)' }}
            className="mt-4 max-w-xl mx-auto leading-relaxed"
          >
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
            <div className="flex flex-col gap-2">
              <label
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t('contact.placeholderName')}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--input-focus-border)'}
                onBlur={e => e.target.style.borderColor = 'var(--input-border)'}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={t('contact.placeholderEmail')}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--input-focus-border)'}
                onBlur={e => e.target.style.borderColor = 'var(--input-border)'}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {t('contact.message')}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder={t('contact.placeholderMessage')}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => e.target.style.borderColor = 'var(--input-focus-border)'}
              onBlur={e => e.target.style.borderColor = 'var(--input-border)'}
            />
          </div>

          <div className="flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white"
              style={{ background: sent ? '#10B981' : 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
            >
              {sent ? (
                <><span>✓</span> {t('contact.sent')}</>
              ) : (
                <><FiSend size={14} /> {t('contact.sendMessage')}</>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Divider */}
        <div className="my-16 h-px" style={{ background: 'var(--divider)' }} />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            {t('contact.findOnline')}
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="transition-colors duration-200 hover:text-blue-500"
                style={{ color: 'var(--text-muted)' }}
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
