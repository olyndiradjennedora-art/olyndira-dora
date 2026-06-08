import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiFigma, SiVite, SiFramer,
  SiNodedotjs, SiSpringboot, SiSpringsecurity, SiThymeleaf, SiOpenjdk,
  SiGit, SiIntellijidea, SiAndroidstudio, SiFlutter,
  SiPostgresql, SiMysql, SiSqlite,
} from 'react-icons/si';

const categories = [
  {
    label: 'Frontend',
    color: '#3B82F6',
    skills: [
      { icon: SiHtml5,       label: 'HTML5',         color: '#E34F26' },
      { icon: SiCss,         label: 'CSS3',          color: '#1572B6' },
      { icon: SiJavascript,  label: 'JavaScript',    color: '#D4A800' },
      { icon: SiTypescript,  label: 'TypeScript',    color: '#3178C6' },
      { icon: SiReact,       label: 'React',         color: '#00B0CC' },
      { icon: SiNextdotjs,   label: 'Next.js',       color: '#666666' },
      { icon: SiTailwindcss, label: 'Tailwind CSS',  color: '#06B6D4' },
      { icon: SiBootstrap,   label: 'Bootstrap',     color: '#7952B3' },
      { icon: SiFigma,       label: 'Figma',         color: '#F24E1E' },
      { icon: SiVite,        label: 'Vite',          color: '#646CFF' },
      { icon: SiFramer,      label: 'Framer Motion', color: '#0055FF' },
    ],
  },
  {
    label: 'Backend',
    color: '#10B981',
    skills: [
      { icon: SiOpenjdk,        label: 'Java',            color: '#5382a1' },
      { icon: SiSpringboot,     label: 'Spring Boot',     color: '#6DB33F' },
      { icon: SiSpringsecurity, label: 'Spring Security', color: '#6DB33F' },
      { icon: SiThymeleaf,      label: 'Thymeleaf',       color: '#005C00' },
      { icon: SiNodedotjs,      label: 'Node.js',         color: '#339933' },
    ],
  },
  {
    label: 'DevOps',
    color: '#F59E0B',
    skills: [
      { icon: SiGit,           label: 'Git',            color: '#F05032' },
      { icon: SiIntellijidea,  label: 'IntelliJ IDEA',  color: '#FE315D' },
      { icon: SiAndroidstudio, label: 'Android Studio', color: '#3DDC84' },
      { icon: SiFlutter,       label: 'Flutter',        color: '#0085BA' },
    ],
  },
  {
    label: 'BDD',
    color: '#8B5CF6',
    skills: [
      { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
      { icon: SiMysql,      label: 'MySQL',      color: '#00758F' },
      { icon: SiSqlite,     label: 'SQLite',     color: '#003B57' },
    ],
  },
];

function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full" style={{ background: category.color }} />
        <span
          className="text-sm font-bold tracking-[0.2em] uppercase"
          style={{ color: category.color }}
        >
          {category.label}
        </span>
        <div className="flex-1 h-px opacity-25" style={{ background: category.color }} />
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 gap-3">
        {category.skills.map(({ icon: Icon, label, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.06, borderColor: category.color }}
            className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default transition-all duration-300"
            style={{
              background: 'var(--skill-card-bg)',
              border: '1px solid var(--skill-card-border)',
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: `${color}18` }}
            >
              <Icon size={22} style={{ color }} />
            </div>
            <span
              className="text-xs text-center leading-tight"
              style={{ color: 'var(--skill-label)' }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-a)', transition: 'background 0.3s ease' }}
    >
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
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#3B82F6' }}>
              {t('skills.eyebrow')}
            </span>
            <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
          </div>
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              fontSize: '36px',
              color: 'var(--text-heading)',
            }}
          >
            {t('skills.title')}{' '}
            <span style={{ color: '#3B82F6' }}>{t('skills.highlight')}</span>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              color: 'var(--text-muted)',
            }}
            className="mt-4 max-w-xl mx-auto leading-relaxed"
          >
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Categories 2×2 */}
        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} category={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
