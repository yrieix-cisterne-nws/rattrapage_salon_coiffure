# Weather App – TP React

Application météo en temps réel affichant les conditions météorologiques de 5 villes françaises, développée dans le cadre d'un TP React.

---

## Sommaire

1. [Présentation](#présentation)
2. [Fonctionnalités et pages](#fonctionnalités-et-pages)
3. [Technologies et outils](#technologies-et-outils)
4. [Installation et configuration](#installation-et-configuration)
   - [Pré-requis](#pré-requis)
   - [Installation du projet](#installation-du-projet)
   - [Lancement en développement](#lancement-en-développement)
   - [Compilation pour la production](#compilation-pour-la-production)
5. [Déploiement](#déploiement)
6. [Auteur](#auteur)
7. [Licence](#licence)

---

## Présentation

Salon Belle Coiffure est un site web React qui sert de one page. Ce projet à été réalisé pour un Partiel d'école.

---

## Fonctionnalités et pages

- **Accueil** : One page qui contient, la présentation de l'entreprise, les salons de coiffure, les produits qu'ils vendent, leurs prestation (homme et femme) et d'une formulaire de contact pour prendre rendez-vous (avec une map sur la droite pour se repérer)
---

## Technologies et outils

- **React 18** : Framework principal pour la construction de l'interface et la gestion d'état (`useState`, `useEffect`, `useContext`).
- **Vite** : Bundler et serveur de développement ultra-rapide.
- **TailwindCSS v4** : Framework CSS utilitaire pour un design moderne et responsive.
- **Leaflet** : Carte interactives dans le navigateur (Avec des marqueurs pour les fausse adresse d'emplacement du salon de coiffure)

---

## Installation et configuration

### Pré-requis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)
- Un terminal (cmd, PowerShell, ou terminal intégré VS Code)

### Installation du projet

1. **Cloner le dépôt :**
   ```sh
   git clone https://github.com/yrieix-cisterne-nws/rattrapage_salon_coiffure
   cd rattrapage_salon_coiffure
   ```

2. **Installer les dépendances :**
   ```sh
   npm install
   ```

   Cela installera toutes les librairies nécessaires, dont :
   - react
   - react-dom
   - tailwindcss

### Lancement en développement

```sh
npm run dev
```
Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

### Compilation pour la production

```sh
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## Déploiement

Le site est en ligne : [Site](https://rattrapage-salon-coiffure.vercel.app/)

---

## Auteur

**Yrieix Cisterne**  
Étudiant à la Normandie Web School

- [LinkedIn](https://www.linkedin.com/in/yrieix-cisterne)
- [GitHub](https://github.com/yrieix-cisterne-nws)
- [Site](https://yrieix-cisterne.fr/)


---

## Licence

Projet réalisé dans le cadre d'un Partiel.  
Toute reproduction ou utilisation doit mentionner l'auteur.
