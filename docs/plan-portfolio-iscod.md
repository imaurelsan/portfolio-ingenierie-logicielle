# Plan Portfolio ISCOD (version publique)

## 1) Problématique retenue

Comment mettre en place une architecture web mutualisée et évolutive pour répondre aux enjeux de maintenance, de performance et de coûts d'une entreprise multi-projets ?

## 2) Architecture retenue

- Front public : Angular statique (SPA)
- Back-office de contenu : WordPress (environnement existant)
- Hébergement : Hostinger
- Exposition : portfolio.yaurel.com
- Communication envisagée : API REST WordPress (natif + endpoints ciblés)

## 3) Pourquoi ce choix

- Séparation claire des responsabilités front/back
- Meilleure maintenabilité du code et de l'exploitation
- Performance solide via build statique optimisé
- Coûts maîtrisés grâce à la mutualisation de l'infrastructure existante
- Déploiement industrialisé via pipeline CI/CD

## 4) Pages et navigation

Pages principales :
1. Accueil
2. Présentation
3. Compétences
4. Détail compétence (route dynamique)
5. Réalisations
6. Détail réalisation (route dynamique)
7. Parcours
8. Contact

Règles de navigation :
- Menu global persistant
- Liens croisés compétences <-> réalisations
- Identité visuelle cohérente sur tout le site

## 5) État actuel du produit

- Thème clair/sombre avec switch visuel
- Header responsive avec menu mobile, fermeture par clic extérieur et touche Escape
- Moteur de recherche de sections (matching par mots-clés)
- Routes Angular titrées page par page
- Formulaire de contact connecté à EmailJS
- Parcours structuré en trois blocs visuellement distincts : expériences, formations, certifications
- Wording orienté posture professionnelle (pas de formulation scolaire)

## 6) Arborescence opérationnelle

```text
portfolio-ingenierie-logicielle/
├─ .github/
│  └─ workflows/
│     └─ ci-cd-hostinger.yml
├─ app/
│  ├─ angular.json
│  ├─ package.json
│  ├─ public/
│  │  └─ .htaccess
│  ├─ src/
│  │  ├─ index.html
│  │  ├─ main.ts
│  │  ├─ styles.scss
│  │  ├─ app/
│  │  │  ├─ app.ts
│  │  │  ├─ app.html
│  │  │  ├─ app.routes.ts
│  │  │  ├─ pages/
│  │  │  └─ services/
│  │  └─ assets/
│  │     ├─ fonts/
│  │     └─ images/
│  └─ dist/app/browser/
├─ docs/
│  ├─ devops-hostinger.md
│  ├─ plan-portfolio-iscod.md
│  └─ private/
│     └─ plan-portfolio-iscod-prive.md
└─ README.md
```

## 7) Industrialisation et déploiement

Pipeline GitHub Actions :
- Build Angular production
- Génération de metadata de build (commit/run/date)
- Déploiement FTPS vers Hostinger
- Vérifications post-déploiement (FTP et endpoint live)

Secrets nécessaires :
- HOSTINGER_FTP_SERVER
- HOSTINGER_FTP_USERNAME
- HOSTINGER_FTP_PASSWORD
- HOSTINGER_FTP_TARGET_DIR
- ALLOW_FTP_ROOT_DEPLOY (optionnel)

## 8) Valeur démontrée

- Maintenance : processus de livraison reproductible
- Performance : bundle statique optimisé
- Coûts : aucun serveur additionnel
- Évolutivité : base prête pour enrichissements fonctionnels

## 9) Message clé soutenance

Ce portfolio n'est pas un simple site vitrine. C'est un produit front industrialisé, déployé automatiquement, avec des choix d'architecture assumés et justifiés par des contraintes réelles (qualité, délais, coûts, maintenabilité).
