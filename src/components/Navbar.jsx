import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language?.slice(0, 2) || 'en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <span
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AF37', fontStyle: 'italic' }}
              className="text-4xl font-light leading-none select-none"
            >
              D.
            </span>
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="relative text-sm font-medium tracking-widest uppercase text-gray-700 group transition-colors hover:text-black"
                >
                  {t(`nav.${key}`)}
                  <span
                    className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: '#D4AF37' }}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {['en', 'fr'].map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => handleLanguageChange(lng)}
                className={`px-3 py-2 text-xs uppercase tracking-widest transition-all rounded-sm ${
                  language === lng
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {t(`locale.${lng}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t('nav.contact')}
        >
          <span className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm uppercase tracking-widest text-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            {['en', 'fr'].map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => handleLanguageChange(lng)}
                className={`px-3 py-2 text-xs uppercase tracking-widest transition-all rounded-sm ${
                  language === lng
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {t(`locale.${lng}`)}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
