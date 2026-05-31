import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true });

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 opacity-30" style={{ background: '#D4AF37' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#D4AF37' }}>
              {t('faq.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#D4AF37' }} />
          </div>
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            className="text-4xl md:text-5xl font-light text-black"
          >
            {t('faq.title')} <span className="italic font-semibold" style={{ color: '#D4AF37' }}>{t('faq.highlight')}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            {t('faq.description')}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map(({ question, answer }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="p-6 border border-gray-200 rounded-3xl bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
