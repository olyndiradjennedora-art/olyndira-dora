import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-16 md:py-20"
      style={{ background: 'var(--bg-a)', transition: 'background 0.3s ease' }}
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('faq.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
          </div>
          <h2
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '32px', color: 'var(--text-heading)' }}
          >
            {t('faq.title')}{' '}
            <span style={{ color: '#3B82F6' }}>{t('faq.highlight')}</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
        >
          {faqs.map(({ question, answer }, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--card-border)' : 'none' }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:opacity-80"
              >
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    fontSize: '15px',
                    color: 'var(--text-heading)',
                    lineHeight: '1.4',
                    paddingRight: '16px',
                  }}
                >
                  {question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-lg font-light"
                  style={{ background: openIndex === i ? '#3B82F6' : 'var(--skill-card-bg)', color: openIndex === i ? 'white' : 'var(--text-muted)', border: '1px solid var(--card-border)' }}
                >
                  +
                </motion.span>
              </button>

              {/* Answer — animated */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-6 pb-5"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'var(--text-body)',
                        lineHeight: '1.75',
                      }}
                    >
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
