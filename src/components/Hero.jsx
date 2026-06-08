import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ background: 'var(--bg-a)', transition: 'background 0.3s ease' }}
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center mb-8"
          >
            <div className="h-px w-10" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('hero.eyebrow')}
            </span>
            <div className="h-px w-10" style={{ background: '#3B82F6' }} />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '400',
              lineHeight: '1.05',
              color: 'var(--text-heading)',
            }}
            className="text-5xl md:text-7xl mb-4"
          >
            {t('hero.greeting')}
            <br />
            <span style={{ color: '#3B82F6', fontSize: '0.95em' }}>
              Olyndira Djenne D.
            </span>
          </motion.h1>

          {/* Title */}
          

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              color: 'var(--text-body)',
            }}
            className="leading-relaxed max-w-xl mx-auto mb-10"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
            >
              {t('hero.viewWork')}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase border transition-colors"
              style={{ borderColor: '#3B82F6', color: 'var(--text-heading)' }}
            >
              {t('hero.getInTouch')}
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
              {t('hero.scroll')}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-px h-8"
              style={{ background: 'linear-gradient(to bottom, #3B82F6, transparent)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
