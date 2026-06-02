import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss, SiFigma, 
  SiGit, SiXampp, SiThymeleaf, SiMysql,
  SiBootstrap, SiSpringboot, SiPostgresql, SiOpenjdk, SiSqlite
} from 'react-icons/si';

const techStack = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss, label: 'CSS3', color: '#1572B6' },
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiXampp, label: 'XAMPP', color: '#FB9C2E' },
  { icon: SiThymeleaf, label: 'Thymeleaf', color: '#005C00' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#563D7C' },
  { icon: SiSpringboot, label: 'Spring Boot', color: '#6DB33F' },
  { icon: SiOpenjdk, label: 'Java', color: '#5382a1' },
  { icon: SiSqlite, label: 'SQL', color: '#003B57' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: SiMysql, label: 'MySQL', color: '#00758F' }
];


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
    <section id="about" className="py-24 md:py-32" style={{ background: '#111827' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 max-w-xs opacity-20" style={{ background: '#D4AF37' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#D4AF37' }}>
              {t('about.section')}
            </span>
            <div className="h-px w-8 opacity-20" style={{ background: '#D4AF37' }} />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <div className="space-y-8">
            <FadeUp delay={0.1}>
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                className="text-4xl md:text-5xl font-light text-white leading-tight"
              >
                {t('about.heading')}
                <span className="italic font-semibold" style={{ color: '#D4AF37' }}>
                  {t('about.highlight')}
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-gray-400 leading-relaxed text-base">
                {t('about.paragraph1')}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-gray-400 leading-relaxed text-base">
                {t('about.paragraph2')}
              </p>
            </FadeUp>
          </div>

          {/* Right: Tech I Love */}
          <FadeUp delay={0.3}>
            <div>
              <h3
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                className="text-2xl font-light text-white mb-8"
              >
                {t('about.techHeadingStart')}{' '}
                <span className="italic" style={{ color: '#D4AF37' }}>
                  {t('about.techHeadingHighlight')}
                </span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
                    className="flex flex-col items-center gap-3 p-4 rounded border border-gray-700 cursor-default transition-all duration-300"
                    style={{ background: '#1F2937' }}
                  >
                    {Icon ? <Icon size={28} style={{ color }} /> : <div className="text-white text-lg font-medium">{label}</div>}
                    <span className="text-xs text-gray-400 tracking-wide">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
