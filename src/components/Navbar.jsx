import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { key: 'about',    href: '#about' },
  { key: 'skills',   href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact',  href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, toggle } = useTheme();
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--navbar-scrolled-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--navbar-border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-heading)', fontStyle: 'italic', fontWeight: '600', fontSize: '22px' }}
            className="leading-none select-none"
          >
            Olyndira{' '}
            <span style={{ color: '#3B82F6' }}>D.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="relative text-sm font-medium tracking-widest uppercase transition-colors group"
                  style={{ color: 'var(--nav-text)' }}
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

          {/* Controls: lang + theme */}
          <div className="flex items-center gap-2">
            {['en', 'fr'].map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => handleLanguageChange(lng)}
                className="px-3 py-2 text-xs uppercase tracking-widest transition-all rounded-sm"
                style={
                  language === lng
                    ? { background: 'var(--lang-active-bg)', color: 'var(--lang-active-text)' }
                    : { background: 'var(--lang-inactive-bg)', color: 'var(--lang-inactive-text)', border: '1px solid var(--lang-inactive-border)' }
                }
              >
                {t(`locale.${lng}`)}
              </button>
            ))}

            {/* Dark / Light toggle */}
            <motion.button
              type="button"
              onClick={toggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              className="p-2 rounded-full transition-colors"
              style={{ color: 'var(--nav-text)' }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            style={{ color: 'var(--hamburger-color)' }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>

          <button
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: 'var(--hamburger-color)',
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: 'var(--hamburger-color)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: 'var(--hamburger-color)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: 'var(--mobile-menu-bg)',
            borderTop: '1px solid var(--mobile-menu-border)',
          }}
        >
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm uppercase tracking-widest"
              style={{ color: 'var(--mobile-link-text)' }}
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
                className="px-3 py-2 text-xs uppercase tracking-widest transition-all rounded-sm"
                style={
                  language === lng
                    ? { background: 'var(--lang-active-bg)', color: 'var(--lang-active-text)' }
                    : { background: 'var(--lang-inactive-bg)', color: 'var(--lang-inactive-text)', border: '1px solid var(--lang-inactive-border)' }
                }
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
