import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import profilePhoto from '../assets/profile.jpeg';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-b)', transition: 'background 0.3s ease' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="h-px flex-1 max-w-xs opacity-30" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('about.section')}
            </span>
            <div className="h-px w-8 opacity-30" style={{ background: '#3B82F6' }} />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Profile Photo */}
          <FadeUp delay={0.1}>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-xs md:max-w-sm"
              >
                <div
                  className="absolute rounded-2xl"
                  style={{
                    inset: 0,
                    background: 'linear-gradient(135deg, #3B82F6 0%, transparent 60%)',
                    transform: 'translate(10px, 10px)',
                    borderRadius: '16px',
                  }}
                />
                <img
                  src={profilePhoto}
                  alt="Olyndira Dora"
                  className="relative rounded-2xl object-cover object-top w-full"
                  style={{
                    aspectRatio: '3/4',
                    border: '2px solid rgba(59, 130, 246, 0.35)',
                  }}
                />
              </motion.div>
            </div>
          </FadeUp>

          {/* Right: Bio */}
          <div className="space-y-8">
            <FadeUp delay={0.2}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  fontSize: '34px',
                  color: 'var(--text-heading)',
                }}
                className="leading-tight"
              >
                {t('about.heading')}
                <span style={{ color: '#3B82F6' }}>{t('about.highlight')}</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '400',
                  fontSize: '17px',
                  color: 'var(--text-body)',
                  lineHeight: '1.75',
                }}
              >
                {t('about.paragraph1')}
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '400',
                  fontSize: '17px',
                  color: 'var(--text-body)',
                  lineHeight: '1.75',
                }}
              >
                {t('about.paragraph2')}
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
