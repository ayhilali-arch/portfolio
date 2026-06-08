# Portfolio d'Ayoub Hilali

**Développeur Full Stack JavaScript | React • Next.js • Node.js • Laravel**

Portfolio professionnel premium créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Caractéristiques

- **Design premium et moderne** : Dark theme élégant avec dégradés subtils
- **Animations fluides** : Powered by Framer Motion
- **Responsive mobile-first** : Compatible desktop, tablette et mobile
- **Performance optimisée** : Next.js avec SEO intégré
- **Accessibilité** : Standards web et WCAG compliance
- **Code modulaire** : Architecture propre et maintenable

## 📋 Sections

1. **Hero** - Présentation impactante avec animation de code terminal
2. **À propos** - Parcours et approche professionnelle
3. **Compétences** - Stack technologique par catégorie
4. **Expérience** - Timeline professionnelle
5. **Projets** - Portfolio de projets full stack
6. **Formation** - Parcours académique
7. **Langues** - Compétences multilingues
8. **Contact** - Formulaire et coordonnées

## 🛠️ Stack Technique

- **Framework** : Next.js 14.2.3
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 3.4.3
- **Animations** : Framer Motion 11.0.3
- **Icônes** : Lucide React
- **Node** : v18+

## 📦 Installation

### Prérequis
- Node.js v18 ou supérieur
- npm ou yarn

### Étapes

```bash
# Cloner le repository
git clone https://github.com/ayhilali-arch/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🔨 Commandes disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer la production
npm start

# Linter
npm run lint

# Export statique
npm run export
```

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── layout.tsx        # Layout principal + metadata
│   └── globals.css       # Styles globaux
├── components/
│   ├── Navbar.tsx        # Navigation responsive
│   ├── Hero.tsx          # Section hero
│   ├── About.tsx         # À propos
│   ├── Skills.tsx        # Compétences
│   ├── Experience.tsx    # Expérience
│   ├── Projects.tsx      # Projets
│   ├── Education.tsx     # Formation
│   ├── Languages.tsx     # Langues
│   ├── Contact.tsx       # Contact
│   ├── Footer.tsx        # Footer
│   ├── CodeAnimation.tsx # Animation terminal
│   └── index.ts          # Exports
├── data/
│   └── portfolio.ts      # Données centralisées
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🎨 Personnalisation

### Modifier les données
Tous les contenus sont centralisés dans `data/portfolio.ts` :
- Informations personnelles
- Compétences
- Expériences
- Projets
- Formation
- Langues
- Coordonnées de contact

### Modifier le design
- **Couleurs** : `tailwind.config.js`
- **Animations** : Framer Motion dans chaque composant
- **Typographie** : `app/globals.css` et Tailwind
- **Breakpoints** : Tailwind responsive classes

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build
npm run build

# Netlify détecte automatiquement la configuration
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ✅ Checklist pré-déploiement

- [ ] Mettre à jour les données dans `data/portfolio.ts`
- [ ] Ajouter votre CV dans `public/cv.pdf`
- [ ] Vérifier les liens sociaux et email
- [ ] Tester sur mobile, tablette et desktop
- [ ] Vérifier les performances (Lighthouse)
- [ ] Vérifier le SEO
- [ ] Configurer le domaine personnalisé

## 📱 Responsive Design

- **Mobile** : <768px
- **Tablette** : 768px - 1024px
- **Desktop** : >1024px

Tous les composants sont optimisés pour chaque écran.

## ♿ Accessibilité

- Contraste de couleurs conforme WCAG AA
- Labels associés à tous les inputs
- Navigation au clavier
- ARIA labels où nécessaire
- Focus states visibles

## 📊 SEO

- Metadata automatique du titre et description
- Open Graph optimisé
- Sitemap généré automatiquement
- Robots.txt configuré
- URLs sémantiques

## 🤝 Support

Pour toute question ou problème :
- Email : hiayoub26@gmail.com
- GitHub : https://github.com/ayhilali-arch

## 📄 License

© 2026 Ayoub Hilali. Tous droits réservés.

---

**Créé avec ❤️ et beaucoup de ☕**
