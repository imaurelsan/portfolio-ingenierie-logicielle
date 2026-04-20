# portfolio-ingenierie-logicielle

Portfolio de soutenance ISCOD base sur une architecture web mutualisée et évolutive.

## Objectif

Ce projet démontre une approche d'ingénierie logicielle orientée:
- maintenabilité (séparation front/back)
- performance (build statique Angular)
- maitrise des couts (hébergement existant)

## Architecture

- Front public: Angular (application statique)
- Back-office de contenu: WordPress
- Hebergement: Hostinger
- Sous-domaine cible: portfolio.yaurel.com
- Communication: API REST WordPress

## Stack technique

- Angular
- TypeScript
- SCSS
- GitHub Actions (CI/CD)
- FTPS (deploiement Hostinger)

## Lancement du projet en local

Depuis le dossier app:

```bash
npm install
npm run start
```

Build production:

```bash
npm run build -- --configuration production
```

Sortie du build:
- app/dist/app/browser

## Déploiement

Le déploiement est automatisé par le workflow:
- .github/workflows/ci-cd-hostinger.yml

Principe:
1. Build Angular en mode production
2. Publication de l'artefact
3. Envoi FTPS vers Hostinger

## Structure du dépot

- app/: application Angular
- docs/: documentation de projet
- .github/workflows/: CI/CD

## Assets locaux

- Polices: app/src/assets/fonts
- Images et logo: app/src/assets/images

Note: les assets utilisés par le site en production sont placés dans app/src/assets.
