import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import itimScreenshot from '../assets/itim-screenshot.png';
import munasphereScreenshot from '../assets/munasphere-screenshot.png';
import lyndiraScreenshot from '../assets/lyndira-screenshot.png';
import eliaaraScreenshot from '../assets/eliaara-screenshot.png';

function textOnColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#1E293B' : '#ffffff';
}

const screenshots = {
  itim: itimScreenshot,
  munasphere: munasphereScreenshot,
  lyndira: lyndiraScreenshot,
  eliaara: eliaaraScreenshot,
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-b)', transition: 'background 0.3s ease' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('projects.work')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
          </div>
          <h2
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '36px', color: 'var(--text-heading)' }}
          >
            {t('projects.title')}{' '}
            <span style={{ color: '#3B82F6' }}>{t('projects.highlight')}</span>
          </h2>
          <p
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'var(--text-muted)' }}
            className="mt-4 max-w-xl mx-auto leading-relaxed"
          >
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-8">
          {projects.map(({ title, category, description, color, gradient, liveUrl, screenshotKey, client }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group grid md:grid-cols-5 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
              }}
            >
              {/* Screenshot — left */}
              <div
                className={`md:col-span-2 min-h-56 relative overflow-hidden ${
                  !screenshots[screenshotKey]
                    ? `flex flex-col items-center justify-center bg-gradient-to-br ${gradient}`
                    : ''
                }`}
              >
                {screenshots[screenshotKey] ? (
                  <img
                    src={screenshots[screenshotKey]}
                    alt={`${title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: '224px' }}
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                    style={{ background: `${color}20`, border: `1.5px solid ${color}40` }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', color, fontSize: '28px', fontStyle: 'italic' }}>
                      {title[0]}
                    </span>
                  </div>
                )}
                {/* Color top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}50)` }}
                />
              </div>

              {/* Content — right */}
              <div className="md:col-span-3 p-8 flex flex-col justify-between gap-6">

                {/* Top: category + title + description */}
                <div>
                  <span
                    className="inline-block text-xs tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full mb-3"
                    style={{ background: `${color}18`, color }}
                  >
                    {category}
                  </span>
                  <h3
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', color: 'var(--text-heading)', fontSize: '22px', lineHeight: '1.3' }}
                    className="mb-3"
                  >
                    {title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.75' }}>
                    {description}
                  </p>
                </div>

                {/* Bottom: client + Live Demo */}
                <div>
                  <div className="h-px mb-5" style={{ background: 'var(--card-border)' }} />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* Client */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white"
                        style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                      >
                        {client?.initials ?? title[0]}
                      </div>
                      <div className="min-w-0">
                        <p
                          className="font-semibold truncate"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: 'var(--text-heading)' }}
                        >
                          {client?.name ?? title}
                        </p>
                        <p
                          className="truncate mt-0.5"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--text-muted)' }}
                        >
                          {client?.role ?? category}
                        </p>
                      </div>
                    </div>

                    {/* Live Demo — prominent */}
                    <motion.a
                      href={liveUrl || '#'}
                      target={liveUrl ? '_blank' : undefined}
                      rel={liveUrl ? 'noopener noreferrer' : undefined}
                      whileHover={liveUrl ? { scale: 1.04, boxShadow: `0 6px 20px ${color}55` } : {}}
                      whileTap={liveUrl ? { scale: 0.97 } : {}}
                      onClick={!liveUrl ? (e) => e.preventDefault() : undefined}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 rounded-lg font-semibold tracking-wide uppercase"
                      style={{
                        background: liveUrl ? `linear-gradient(135deg, ${color}, ${color}cc)` : 'var(--skill-card-bg)',
                        color: liveUrl ? textOnColor(color) : 'var(--text-muted)',
                        border: liveUrl ? 'none' : '1px solid var(--card-border)',
                        cursor: liveUrl ? 'pointer' : 'default',
                        opacity: liveUrl ? 1 : 0.5,
                        padding: textOnColor(color) === '#ffffff' ? '10px 20px' : '8px 14px',
                        fontSize: textOnColor(color) === '#ffffff' ? '12px' : '11px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <FiArrowUpRight size={15} strokeWidth={2.5} />
                      {t('projects.liveDemo')}
                    </motion.a>

                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
