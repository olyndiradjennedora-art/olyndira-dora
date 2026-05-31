# Olyndira Djenne Dora — Frontend Developer

Single-page portfolio built with React, Tailwind CSS, and Framer Motion.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **React Icons** — icônes SVG

## Installation

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |

## Personnalisation

- **Photo** → remplace `src/assets/profile.jpg` par la tienne
- **Nom & bio** → modifie `Hero.jsx` et `About.jsx`
- **Projets** → édite le tableau `projects` dans `Projects.jsx`
- **Liens sociaux** → mets à jour le tableau `socials` dans `Contact.jsx`

## Structure

```
src/
├── assets/profile.jpg
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
```

## Déploiement

```bash
npm run build
# Dépose le dossier dist/ sur Vercel, Netlify ou GitHub Pages
```