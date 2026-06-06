import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: '#F9FAFB' }}>
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
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '36px' }}
            className="text-4xl md:text-5xl text-black font-bold"
          >
            {t('projects.title')} <span style={{ color: '#3B82F6' }}>{t('projects.highlight')}</span>
          </h2>
          <p
           style={{fontFamily: 'Inter, sans-serif', fontSize: 18}} 
          className="text-gray-600 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map(({ title, category, description, tags, color, gradient }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group grid md:grid-cols-5 gap-0 bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-transparent"
            >
              {/* Screenshot placeholder */}
              <div
                className={`md:col-span-2 min-h-52 flex flex-col items-center justify-center bg-gradient-to-br ${gradient} relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${color} 0px, ${color} 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative z-10"
                  style={{ background: `${color}20`, border: `1.5px solid ${color}40` }}
                >
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', color, fontSize: '28px', fontStyle: 'italic' }}>
                    {title[0]}
                  </span>
                </div>
                <span className="text-xs tracking-widest uppercase relative z-10" style={{ color: `${color}80` }}>
                  {t('projects.projectScreenshot')}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs tracking-widest uppercase text-gray-400">{category}</span>
                      <h3
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}
                        className="text-2xl font-bold text-black mt-1"
                      >
                        {title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border text-gray-500"
                        style={{ borderColor: '#E5E7EB' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 shrink-0">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-white transition-all"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <FiExternalLink size={12} />
                      {t('projects.liveDemo')}
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all"
                      style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <FiGithub size={12} />
                      {t('projects.github')}
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
