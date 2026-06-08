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
        title: 'Full-Stack Developer',
        tagline: 'Full-Stack Developer, I transform ideas into modern, high-performance, and intuitive web applications.',
        viewWork: 'View My Work',
        getInTouch: 'Get in Touch',
        scroll: 'Scroll',
      },
      about: {
        section: 'About Me',
        heading: 'Designing and Building',
        highlight: ' Web',
        paragraph1: "I am an analyst-developer specializing in both frontend and backend disciplines. I design and implement web applications using React for the frontend and Java with Spring Boot for server-side development. I emphasize data collection and analysis, UML modeling, and thorough architectural design before writing code.",
        paragraph2: "My work blends analytical rigor and practical engineering: gathering requirements, modeling systems, producing clear designs, then implementing robust, maintainable solutions. I am also expanding my skillset into mobile development.",
        techHeadingStart: 'Tools and Technologies I',
        techHeadingHighlight: 'Like',
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
            title: 'Thesis Defense Management (ITIM)',
            category: 'Web Application',
            description:
              "I built a web application to manage grades and thesis defense deliberations for ITIM (Institut des Technologies de l'Information et de Management).",
            color: '#D4AF37',
            gradient: 'from-amber-50 to-yellow-50',
            liveUrl: 'https://itim-website.vercel.app/',
            screenshotKey: 'itim',
            client: { initials: 'IT', name: 'ITIM', role: "Institut des Technologies de l'Information et de Management" },
          },
          {
            title: "MUNAS'PHERE Agency Website",
            category: 'Marketing Website',
            description:
              "A website created for MUNAS'PHERE (communication and digital marketing agency).",
            color: '#6366F1',
            gradient: 'from-indigo-50 to-purple-50',
            liveUrl: 'https://munasphere.vercel.app/',
            screenshotKey: 'munasphere',
            client: { initials: 'MP', name: "MUNAS'PHERE", role: 'Communication & Digital Marketing Agency' },
          },
          {
            title: 'LYNDIRA - African Fashion',
            category: 'E-commerce Website',
            description:
              "Website for the African fashion brand LYNDIRA — founded in 2022 in Bangui, Central African Republic. The brand combines fashion, beauty, and digital services: clothing, handcrafted shoes, accessories, natural cosmetics, and web/mobile development.",
            color: '#10B981',
            gradient: 'from-emerald-50 to-teal-50',
            liveUrl: 'https://lyndira.vercel.app/',
            screenshotKey: 'lyndira',
            client: { initials: 'LY', name: 'LYNDIRA', role: 'African Fashion Brand' },
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
        role: 'Full-Stack Developer',
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
        greeting: 'Salut, je suis',
        title: 'Développeuse Full-Stack',
        tagline: 'Développeuse Full-Stack, je transforme des idées en applications web modernes, performantes et intuitives.',
        viewWork: 'Voir mes projets',
        getInTouch: 'Contactez-moi',
        scroll: 'Défiler',
      },
      about: {
        section: 'À propos',
        heading: 'Conception et développement',
        highlight: " web",
        paragraph1: "Je suis une analyste-développeuse spécialisée à la fois en frontend et backend. J'utilise React pour l'interface et Java avec Spring Boot pour les services back-end. J'attache beaucoup d'importance à la collecte et l'analyse des données, à la modélisation UML et à la conception complète avant l'implémentation.",
        paragraph2: "Mon approche combine rigueur analytique et pratique d'ingénierie : collecte d'exigences, modélisation, conception détaillée, puis implémentation de solutions robustes et maintenables. J'apprends actuellement le développement mobile.",
        techHeadingStart: 'Outils & Technologies que',
        techHeadingHighlight: "j'aime",
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
            title: "Application de gestion des notes et des délibérations de soutenance : cas de l'ITIM",
            category: 'Application Web',
            description:
              "J'ai créé une application web de gestion des notes et des délibérations de soutenance : cas de l'ITIM (Institut des Technologies de l'Information et de Management).",
            color: '#D4AF37',
            gradient: 'from-amber-50 to-yellow-50',
            liveUrl: 'https://itim-website.vercel.app/',
            screenshotKey: 'itim',
            client: { initials: 'IT', name: 'ITIM', role: "Institut des Technologies de l'Information et de Management" },
          },
          {
            title: "Site web - MUNAS'PHERE",
            category: 'Site Marketing',
            description:
              "J'ai créé un site web pour l'agence MUNAS'PHERE (Agence de conseil en Communication et Marketing Digital).",
            color: '#6366F1',
            gradient: 'from-indigo-50 to-purple-50',
            liveUrl: 'https://munasphere.vercel.app/',
            screenshotKey: 'munasphere',
            client: { initials: 'MP', name: "MUNAS'PHERE", role: 'Agence de Communication & Marketing Digital' },
          },
          {
            title: 'Site e-commerce - LYNDIRA (African Fashion)',
            category: 'E‑commerce',
            description:
              "Site web pour la marque africaine LYNDIRA, fondée en 2022 à Bangui (République Centrafricaine). La marque allie mode, beauté et services numériques : vêtements, chaussures artisanales, accessoires, cosmétiques naturels et développement web/mobile.",
            color: '#10B981',
            gradient: 'from-emerald-50 to-teal-50',
            liveUrl: 'https://lyndira.vercel.app/',
            screenshotKey: 'lyndira',
            client: { initials: 'LY', name: 'LYNDIRA', role: 'Marque de Mode Africaine' },
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
        role: 'Développeuse Full-Stack',
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
