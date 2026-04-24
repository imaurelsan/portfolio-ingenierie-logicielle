# portfolio-ingenierie-logicielle

Portfolio professionnel d'Aurel YAHOUEDEOU, construit avec Angular et déployé automatiquement sur Hostinger.

## Objectif

Ce projet met en avant une démarche d'ingénierie logicielle orientée :
- maintenabilité (structure claire, séparation des responsabilités, composants Angular)
- performance (build statique optimisé en production)
- maîtrise des coûts (hébergement existant, automatisation CI/CD)

## Aperçu de l'architecture

- Front public : Angular 20 (SPA statique)
- Hébergement : Hostinger (sous-domaine `portfolio.yaurel.com`)
- Pipeline : GitHub Actions + déploiement FTPS automatisé
- Build metadata : fichier `assets/build-info.json` généré à chaque build pour vérifier la version servie

## Fonctionnalités principales

- Navigation complète sur pages portfolio : accueil, présentation, compétences, réalisations, parcours, contact
- Routes dynamiques :
	- `competences/:slug`
	- `realisations/:slug`
- Thème clair/sombre avec switch visuel
- Expérience responsive (desktop/tablette/mobile)
- Moteur de recherche rapide de sections dans l'interface
- Formulaire de contact branché à EmailJS

## Stack technique

- Angular 20
- TypeScript
- SCSS
- EmailJS (`@emailjs/browser`)
- GitHub Actions
- FTPS (lftp)

## Démarrage local

Depuis le dossier `app` :

```bash
npm install
npm run start
```

Application locale : `http://localhost:4200`

## Build production

Depuis le dossier `app` :

```bash
npm run build -- --configuration production
```

Sortie du build :
- `app/dist/app/browser`

## Déploiement automatique

Workflow CI/CD :
- `.github/workflows/ci-cd-hostinger.yml`

Comportement principal :
1. Build Angular sur GitHub Actions
2. Génération des métadonnées de build (`build-info.json`)
3. Déploiement FTPS vers le répertoire cible Hostinger
4. Vérifications automatiques post-déploiement (fichier metadata et endpoint image)

Secrets requis côté GitHub :
- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `HOSTINGER_FTP_TARGET_DIR`
- `ALLOW_FTP_ROOT_DEPLOY` (optionnel, contrôle de sécurité)

## Structure du dépôt

- `app/` : application Angular
- `docs/` : documentation projet et soutenance
- `.github/workflows/` : pipeline CI/CD

## Documentation utile

- `docs/devops-hostinger.md` : guide d'exploitation et de déploiement
- `docs/plan-portfolio-iscod.md` : plan projet public
- `docs/private/plan-portfolio-iscod-prive.md` : base de préparation soutenance (dossier privé)

## Notes importantes

- Les assets de production sont sous `app/src/assets`.
- Le fichier `app/src/index.html` porte les méta de base (titre, description, favicon statique).
- Le portfolio est pensé comme un support professionnel ; le wording des contenus est formulé en ce sens.
