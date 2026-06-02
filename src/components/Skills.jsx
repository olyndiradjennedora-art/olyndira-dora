import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiTypescript, SiGit, SiFigma, SiThymeleaf, SiBootstrap,
  SiNodedotjs, SiVite, SiFramer, SiSpringboot, SiPostgresql
} from 'react-icons/si';

const skills = [
  { icon: SiHtml5,       label: 'HTML5',       color: '#E34F26' },
  { icon: SiCss,        label: 'CSS3',        color: '#1572B6'  },
  { icon: SiJavascript,  label: 'JavaScript',  color: '#F7DF1E' },
  { icon: SiReact,       label: 'React',       color: '#61DAFB' },
  { icon: SiNextdotjs,   label: 'Next.js',     color: '#000000' },
  { icon: SiTailwindcss, label: 'Tailwind',    color: '#06B6D4' },
  { icon: SiTypescript,  label: 'TypeScript',  color: '#3178C6' },
  { icon: SiGit,         label: 'Git',         color: '#F05032' },
  { icon: SiFigma,       label: 'Figma',       color: '#F24E1E' },
  { icon: SiNodedotjs,   label: 'Node.js',     color: '#339933' },
  { icon: SiVite,        label: 'Vite',        color: '#646CFF' },
  { icon: SiFramer,      label: 'Framer Motion', color: '#0055FF' },
  { icon: SiThymeleaf,   label: 'Thymeleaf',   color: '#005C00' },
  { icon: SiBootstrap,   label: 'Bootstrap',   color: '#563D7C' },
  { icon: SiSpringboot,  label: 'Spring Boot', color: '#6DB33F' },
  { icon: SiPostgresql,  label: 'PostgreSQL',  color: '#336791' },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
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
              {t('skills.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#D4AF37' }} />
          </div>
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            className="text-4xl md:text-5xl font-light text-black"
          >
            {t('skills.title')} <span className="italic font-semibold" style={{ color: '#D4AF37' }}>{t('skills.highlight')}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map(({ icon: Icon, label, color, level }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 8px 30px rgba(212,175,55,0.25)',
                borderColor: '#D4AF37',
              }}
              className="group flex flex-col items-center gap-4 p-6 border border-gray-100 bg-white cursor-default transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: `${color}15` }}
              >
                <Icon size={30} style={{ color }} />
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-gray-700 tracking-wide">{label}</span>
                {/* Skill bar */}
                <div className="mt-3 w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #8A6B18)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
