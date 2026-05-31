import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        eyebrow: 'Portfolio',
        greeting: "Hi, I'm",
        title: 'Frontend Web Developer',
        tagline: 'I transform complex logic into elegant, high-performance user interfaces where craft meets code.',
        viewWork: 'View My Work',
        getInTouch: 'Get in Touch',
        scroll: 'Scroll',
      },
      about: {
        section: 'About Me',
        heading: 'Crafting digital ',
        highlight: 'experiences',
        paragraph1: "I'm a passionate Frontend Developer with a deep love for building beautiful, accessible, and performant web applications. My journey started with a curiosity for how beautiful things on the internet came to life and it never stopped.",
        paragraph2: 'I specialize in React and its ecosystem, always staying at the cutting edge of modern web tooling. I believe great frontend work sits at the intersection of engineering precision and design sensibility every pixel, every interaction, every millisecond matters.',
        techHeadingStart: 'Tech I',
        techHeadingHighlight: 'Love',
      },
      skills: {
        eyebrow: 'Expertise',
        title: 'Technical',
        highlight: 'Skills',
        description: 'A curated set of tools and technologies I use to bring ideas to life — refined through real-world projects.',
      },
      projects: {
        work: 'Work',
        title: 'Selected',
        highlight: 'Projects',
        description: 'A selection of work that reflects my commitment to quality, performance, and craftsmanship.',
        projectScreenshot: 'Project Screenshot',
        liveDemo: 'Live Demo',
        github: 'GitHub',
        items: [
          {
            title: 'FinTrack Dashboard',
            category: 'Web Application',
            description:
              'A real-time personal finance dashboard built with React and TypeScript. Features live chart updates, budget tracking, and custom data visualizations using D3.js. Prioritized accessibility with full keyboard navigation and ARIA labels.',
            tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
            color: '#D4AF37',
            gradient: 'from-amber-50 to-yellow-50',
          },
          {
            title: 'Luminary UI Kit',
            category: 'Component Library',
            description:
              'An open-source React component library with 40+ fully accessible components. Built with Radix UI primitives, styled with Tailwind, and documented with Storybook. Supports dark mode and custom theming out of the box.',
            tags: ['React', 'Radix UI', 'Storybook', 'NPM'],
            color: '#6366F1',
            gradient: 'from-indigo-50 to-purple-50',
          },
          {
            title: 'Archi Studio',
            category: 'Marketing Website',
            description:
              'A high-performance marketing site for an architecture firm built with Next.js 14 and App Router. Achieved 98/100 Lighthouse score, sub-1s LCP, and fluid scroll-driven animations throughout.',
            tags: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
            color: '#10B981',
            gradient: 'from-emerald-50 to-teal-50',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Frequently Asked',
        highlight: 'Questions',
        description: 'Answers to the most common questions about my process, tools, and delivery.',
        items: [
          {
            question: 'What services do you offer?',
            answer: 'I create custom frontend experiences with React, Tailwind CSS, Framer Motion, and responsive design for web projects, landing pages, and interfaces.',
          },
          {
            question: 'What technologies do you use for frontend projects?',
            answer: 'I mainly use React, Tailwind CSS, Framer Motion, and modern JavaScript, with a strong focus on performance and accessibility.',
          },
          {
            question: 'How do you ensure accessibility in your work?',
            answer: 'I use semantic HTML, keyboard-friendly controls, ARIA labels, and high color contrast as part of every project.',
          },
          {
            question: 'Can I request a custom design or branding?',
            answer: 'Yes, I can adapt to an existing brand system or create a fresh visual identity that fits your goals.',
          },
          {
            question: 'What is your typical delivery process?',
            answer: 'I start with discovery, then design and development iterations, followed by testing and launch-ready polish.',
          },
        ],
      },
      contact: {
        eyebrow: 'Contact',
        heading: "Let's",
        highlight: 'work together.',
        paragraph: 'Have a project in mind? I’d love to hear about it. Send me a message and I’ll get back to you within 24 hours.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        placeholderName: 'Your full name',
        placeholderEmail: 'your@email.com',
        placeholderMessage: 'Tell me about your project...',
        sendMessage: 'Send Message',
        sent: 'Message Sent!',
        findOnline: 'Find me online',
      },
      footer: {
        role: 'Frontend Developer',
        copyright: 'Designed & Built with {{name}}',
      },
      locale: {
        en: 'EN',
        fr: 'FR',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact',
      },
      hero: {
        eyebrow: 'Portfolio',
        greeting: 'Bonjour, je suis',
        title: 'Développeuse Frontend',
        tagline: 'Je transforme la logique complexe en interfaces élégantes et performantes, là où l’esthétique rencontre le code.',
        viewWork: 'Voir mes projets',
        getInTouch: 'Contactez-moi',
        scroll: 'Défiler',
      },
      about: {
        section: 'À propos',
        heading: 'Conception d’',
        highlight: 'expériences',
        paragraph1: 'Je suis une développeuse frontend passionnée, avec un amour profond pour la création d’applications web belles, accessibles et performantes. Mon parcours a commencé avec la curiosité de comprendre comment les belles choses sur internet prenaient vie, et cette curiosité ne s’est jamais éteinte.',
        paragraph2: 'Je me spécialise dans React et son écosystème, en restant constamment à la pointe des outils web modernes. Je crois que le bon travail frontend se situe à l’intersection de la précision technique et de la sensibilité du design, chaque pixel, chaque interaction, chaque milliseconde compte.',
        techHeadingStart: 'Tech que',
        techHeadingHighlight: 'j’adore',
      },
      skills: {
        eyebrow: 'Expertise',
        title: 'Compétences',
        highlight: '',
        description: 'Une sélection d’outils et de technologies que j’utilise pour donner vie aux idées — affinée par des projets concrets.',
      },
      projects: {
        work: 'Travail',
        title: 'Projets',
        highlight: 'Sélectionnés',
        description: 'Une sélection de projets qui reflète mon engagement envers la qualité, la performance et le savoir-faire.',
        projectScreenshot: 'Capture du projet',
        liveDemo: 'Voir en ligne',
        github: 'GitHub',
        items: [
          {
            title: 'FinTrack Dashboard',
            category: 'Application Web',
            description:
              'Un tableau de bord financier en temps réel construit avec React et TypeScript. Il propose des graphiques live, le suivi du budget et des visualisations de données personnalisées avec D3.js. L’accessibilité est priorisée avec une navigation clavier complète et des labels ARIA.',
            tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
            color: '#D4AF37',
            gradient: 'from-amber-50 to-yellow-50',
          },
          {
            title: 'Luminary UI Kit',
            category: 'Bibliothèque de composants',
            description:
              'Une bibliothèque de composants React open-source avec plus de 40 composants entièrement accessibles. Construite avec Radix UI, stylée avec Tailwind, et documentée avec Storybook. Prend en charge le mode sombre et le theming personnalisé dès la sortie de boîte.',
            tags: ['React', 'Radix UI', 'Storybook', 'NPM'],
            color: '#6366F1',
            gradient: 'from-indigo-50 to-purple-50',
          },
          {
            title: 'Archi Studio',
            category: 'Site marketing',
            description:
              'Un site marketing haute performance pour un cabinet d’architecture construit avec Next.js 14 et App Router. Score Lighthouse de 98/100, LCP sous 1s et animations fluides pilotées par le scroll.',
            tags: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
            color: '#10B981',
            gradient: 'from-emerald-50 to-teal-50',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions fréquentes',
        highlight: '',
        description: 'Réponses aux questions les plus courantes sur mon processus, mes outils et ma livraison.',
        items: [
          {
            question: 'Quels services proposez-vous ?',
            answer: 'Je crée des expériences frontend sur mesure avec React, Tailwind CSS, Framer Motion et des designs responsive pour des sites web, des landing pages et des interfaces.',
          },
          {
            question: 'Quelles technologies utilisez-vous pour les projets frontend ?',
            answer: 'J’utilise principalement React, Tailwind CSS, Framer Motion et JavaScript moderne, avec un fort accent sur la performance et l’accessibilité.',
          },
          {
            question: 'Comment garantissez-vous l’accessibilité ?',
            answer: 'J’utilise du HTML sémantique, des contrôles keyboard-friendly, des labels ARIA et un contraste de couleurs élevé dans chaque projet.',
          },
          {
            question: 'Puis-je demander un design ou une identité visuelle personnalisée ?',
            answer: 'Oui, je peux m’adapter à une charte existante ou créer une identité visuelle neuve qui correspond à vos objectifs.',
          },
          {
            question: 'Quel est votre processus de livraison ?',
            answer: 'Je commence par la découverte, puis des itérations de design et de développement, suivies de tests et d’une phase de finition avant la mise en ligne.',
          },
        ],
      },
      contact: {
        eyebrow: 'Contact',
        heading: 'Travaillons',
        highlight: 'ensemble.',
        paragraph: 'Un projet en tête ? J’aimerais en savoir plus. Envoyez-moi un message et je vous recontacterai sous 24 heures.',
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        placeholderName: 'Votre nom complet',
        placeholderEmail: 'votre@email.com',
        placeholderMessage: 'Parlez-moi de votre projet...',
        sendMessage: 'Envoyer le message',
        sent: 'Message envoyé !',
        findOnline: 'Retrouvez-moi en ligne',
      },
      footer: {
        role: 'Développeuse Frontend',
        copyright: 'Conçu & réalisé par {{name}}',
      },
      locale: {
        en: 'EN',
        fr: 'FR',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
