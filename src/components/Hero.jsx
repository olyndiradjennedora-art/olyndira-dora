import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <motion.div
            className="flex-1 flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-px w-10" style={{ background: '#D4AF37' }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#D4AF37' }}>
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-black"
              >
                {t('hero.greeting')}
                <br />
                <span className="font-semibold italic" style={{ color: '#D4AF37' }}>
                  Olyndira D.
                </span>
              </h1>
            </div>

            {/* Title */}
            <p className="text-base md:text-lg font-medium tracking-[0.15em] uppercase text-gray-500">
              {t('hero.title')}
            </p>

            {/* Tagline */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              {t('hero.tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #8A6B18)' }}
              >
                {t('hero.viewWork')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-black border transition-all"
                style={{ borderColor: '#D4AF37' }}
              >
                {t('hero.getInTouch')}
              </motion.a>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex items-center gap-3 mt-6">
                <div className="w-px h-12 bg-gray-300" />
                <div className="w-1.5 h-1.5 rounded-full"/>
              <span className="text-xs tracking-widest uppercase text-gray-400">{t('hero.scroll')}</span>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full scale-110 opacity-20"
                style={{ border: '1px solid #D4AF37' }}
              />
              <div
                className="absolute inset-0 rounded-full scale-[1.2] opacity-10"
                style={{ border: '1px solid #D4AF37' }}
              />

              {/* Gold corner accents */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12"
                style={{
                  borderTop: '2px solid #D4AF37',
                  borderRight: '2px solid #D4AF37',
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12"
                style={{
                  borderBottom: '2px solid #D4AF37',
                  borderLeft: '2px solid #D4AF37',
                }}
              />

              {/* Profile image with float animation */}
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-100 h-100 md:w-96 md:h-96 lg:w-96 lg:h-96 object-cover object-top rounded-full"
                  style={{
                    boxShadow: '0 25px 60px rgba(212,175,55,0.25), 0 8px 32px rgba(0,0,0,0.15)',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="width:384px;height:384px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#8A6B18);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-size:120px;color:white;font-style:italic;box-shadow:0 25px 60px rgba(212,175,55,0.25)">D</div>
                    `;
                  }}
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
