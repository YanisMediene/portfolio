# Portfolio de Yanis Mediene

Portfolio personnel développé avec React et Vite, présentant mes compétences en ingénierie informatique, intelligence artificielle et développement full-stack.

## 🚀 Technologies utilisées

- **Frontend :** React 18 + Vite
- **Styling :** CSS Modules avec convention camelCase
- **Fonts :** Outfit & Roboto
- **Build :** Vite avec Hot Module Replacement

## 📋 Sections du portfolio

### 🦸 Hero
- Présentation personnelle
- Étudiant en ingénierie informatique
- Spécialisé en IA et développement

### 👤 About
- Biographie personnelle
- Compétences clés :
  - **IA Engineer** - Modèles génératifs, computer vision, LLMs
  - **Data Science** - Machine learning, visualisation de données
  - **Full-Stack Developer** - C++/Java, interfaces utilisateur

### 💼 Experience
- **Compétences techniques :** C++, Java, Python, Qt, React, OpenCV, Docker, AWS, etc.
- **Expériences professionnelles :**
  - Astrée Software - Data & Cloud Engineer (2024)
  - Myakiatto - Computer Vision & AI Engineer (2024)

### 🚀 Projects
- **AInimation** - Pipeline IA pour transformer mangas en animations
- **Quadrimon** - Jeu de cartes avec reconnaissance webcam
- **Slice Defender 3D** - Jeu avec détection de main
- **Frigo App** - Gestion intelligente de stock alimentaire
- **Comic Vine Manager** - Gestionnaire de collection de comics

### 📞 Contact
- Email : yanis.mediene@gmail.com
- LinkedIn : [yanis-mediene-22935a261](https://linkedin.com/in/yanis-mediene-22935a261)
- GitHub : [YanisMediene](https://github.com/YanisMediene)

## 🛠️ Installation et lancement

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd portfolio

# Installer les dépendances
npm install
```

### Lancement en mode développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173/`

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── About/          # Section À propos
│   ├── Contact/        # Section Contact
│   ├── Experience/     # Section Expérience
│   ├── Hero/           # Section d'accueil
│   ├── Navbar/         # Navigation
│   └── Projects/       # Section Projets
├── data/               # Données JSON
│   ├── history.json    # Expérience professionnelle
│   ├── projects.json   # Portfolio de projets
│   └── skills.json     # Compétences techniques
├── App.jsx             # Composant principal
└── utils.js            # Utilitaires
```

## 🎨 Personnalisation

Les données du portfolio peuvent être facilement modifiées en éditant les fichiers JSON dans le dossier `src/data/`:

- `skills.json` - Compétences techniques
- `history.json` - Expérience professionnelle  
- `projects.json` - Projets personnels

Les styles sont organisés en modules CSS pour chaque composant.

## 📄 Licence

Ce projet est sous licence MIT.
