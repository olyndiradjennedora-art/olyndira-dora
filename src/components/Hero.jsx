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
              <div className="h-px w-10" style={{ background: '#3B82F6' }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400', fontSize: '60px' }}
                className="text-5xl md:text-5xl lg:text-8xl leading-[0.95] text-black opacity-80"
              >
                {t('hero.greeting')}
                <br />
                <span style={{ fontFamily: 'Playfair Display, serif', color: '#3B82F6' , fontSize: '58px'}}>
                  Olyndira Djenne D.
                </span>
              </h1>
            </div>

            {/* Title */}
            <p 
            style={{fontFamily: 'Playfair Display, serif', fontWeight: '800', fontSize: '25px'}}
            className="text-base md:text-lg tracking-[0.15em] uppercase text-black opacity-80">
              {t('hero.title')}
            </p>

            {/* Tagline */}
            <p 
            style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: 18}}
            className="text-gray-800 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              {t('hero.tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
              >
                {t('hero.viewWork')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-black border transition-all"
                style={{ borderColor: '#3B82F6' }}
              >
                {t('hero.getInTouch')}
              </motion.a>
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
                style={{ border: '1px solid #3B82F6' }}
              />
              <div
                className="absolute inset-0 rounded-full scale-[1.2] opacity-10"
                style={{ border: '1px solid #3B82F6' }}
              />

              {/* Blue corner accents */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12"
                style={{
                  borderTop: '2px solid #3B82F6',
                  borderRight: '2px solid #3B82F6',
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12"
                style={{
                  borderBottom: '2px solid #3B82F6',
                  borderLeft: '2px solid #3B82F6',
                }}
              />

              {/* Profile image with float animation */}
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-100 h-100 md:w-96 md:h-96 lg:w-96 lg:h-96 object-cover object-top rounded-full"
                  style={{
                    boxShadow: '0 25px 60px rgba(59,130,246,0.25), 0 8px 32px rgba(0,0,0,0.15)',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="width:384px;height:384px;border-radius:50%;background:linear-gradient(135deg,#3B82F6,#1D4ED8);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-size:120px;color:white;font-style:italic;box-shadow:0 25px 60px rgba(59,130,246,0.25)">D</div>
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
