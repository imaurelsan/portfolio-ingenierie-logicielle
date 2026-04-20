# Plan Portfolio ISCOD (version publique)

## 1) Décision d'architecture

Problématique retenue (verrouillée avec mon Learning Coach) :
<< Comment mettre en place une architecture web mutualisée et évolutive pour répondre aux enjeux de maintenance, de performance et de coûts d'une entreprise multi-projets ? >>

Architecture cible :
- Back-office de contenu : WordPress sur yaurel.com
- Front public du portfolio : Angular statique
- Hébergement cible : Hostinger (mon hébergeur actuel) sans coût additionnel
- Exposition du portfolio : portfolio.yaurel.com
- Communication : API REST WordPress (natif + endpoints personnalisés)

Pourquoi ce choix ? :
- Met en valeur une vraie séparation front/back
- Montre une approche d'ingénierie logicielle (modulaire, évolutive, maintenable)
- Capitalise sur ton environnement réel d'entreprise
- Reste déployable rapidement avec une contrainte de 10 jours

## 2) Sous-domaine (décision opérationnelle)

Choix d'hébergement - portfolio.yaurel.com :
- Avantages :
  - Plus professionnel pour un jury et des recruteurs
  - Clair pour séparer application portfolio et site principal
  - Plus propre pour une évolution future (nouvelle version, CI/CD, migration)
- Effort Hostinger : faible à moyen
  - Création du sous-domaine dans hPanel
  - Dossier web dédié (ex: public_html/portfolio)
  - SSL automatique à vérifier


## 3) Structure des pages (en respect des critères de la grille 100/100)

Pages principales :
1. Accueil
2. Présentation générale
3. Compétences (vue comparative)
4. Compétence détail (x10)
5. Réalisations (vue commune x5)
6. Réalisation détail (x5)
7. Parcours (frise anti-chronologique)
8. Contact

Navigation obligatoire :
- Menu persistant sur toutes les pages
- Liens croisés compétence -> réalisation et réalisation -> compétence
- Identité (nom + photo) visible partout (header + footer compact)

## 3 bis) Arborescence du projet (repère opérationnel)

```text
portfolio-ingenierie-logicielle/
├─ .github/
│  └─ workflows/
│     └─ ci-cd-hostinger.yml (pipeline CI/CD: build Angular + déploiement FTPS Hostinger)
├─ app/ (application Angular principale)
│  ├─ angular.json (configuration du build Angular)
│  ├─ package.json (scripts npm et dépendances front)
│  ├─ public/
│  │  └─ .htaccess (fallback SPA pour les routes Angular sur Hostinger)
│  ├─ src/
│  │  ├─ main.ts (point d'entrée Angular)
│  │  ├─ styles.scss (thème global: variables, layout, composants visuels)
│  │  ├─ app/
│  │  │  ├─ app.ts (shell principal et navigation globale)
│  │  │  ├─ app.html (structure du shell: header, router-outlet, footer)
│  │  │  ├─ app.routes.ts (routes du portfolio)
│  │  │  └─ pages/ (pages métier: accueil, présentation, compétences, réalisations, parcours, contact)
│  │  └─ assets/
│  │     ├─ fonts/ (polices locales du design)
│  │     └─ images/ (photo, logo, visuels de sections)
│  └─ dist/app/browser/ (artefact statique final déployé en production)
├─ docs/
│  ├─ plan-portfolio-iscod.md (plan projet, stratégie, grille de réalisation)
│  ├─ devops-hostinger.md (guide d'exploitation CI/CD et déploiement)
│  └─ support-soutenance-base.md (base du support oral centré problématique)
└─ README.md (présentation générale du repo)
```

Règle pratique pour ne pas se perdre :
- Si tu modifies le rendu du site : va dans app/src/app/pages ou app/src/styles.scss
- Si tu modifies la navigation : va dans app/src/app/app.routes.ts
- Si tu modifies le déploiement : va dans .github/workflows/ci-cd-hostinger.yml
- Si tu prépares ton argumentaire jury : va dans docs/

## 4) Liste de mes 10 compétences

Techniques :
1. Architecture web mutualisée (WordPress multisite)
2. Développement plugin WordPress
3. Intégrations API REST et interconnexion services
4. Performance web et optimisation front
5. Sécurité applicative et durcissement WordPress

Humaines/organisationnelles :
6. Gestion de projet agile et priorisation
7. Communication technique avec parties prenantes
8. UX/UI orientée usage et accessibilité
9. Automatisation et amélioration continue
10. Analyse critique et prise de décision technique

## 5) Liste des 5 réalisations

1. 360-content-bridge (plugin import/export WordPress)
2. 360-media-auto-cleanup (plugin nettoyage médias orphelins)
3. 360tranquillité (plugin multitâche monitoring + sécurité)
4. crewai-projet-agent-voyage (agent IA de planification de voyages)
5. v0-vastrion-mobile-prototype (marketplace services B2C/B2B, en cours)

## 6) Structure d'une page compétence (selon ma grille d'éval)

Chaque compétence inclut :
- Définition contextualisée métier + actualité
- 1 à 3 preuves (anecdotes concrètes)
- Résultats mesurables + valeur ajoutée
- Autocritique (niveau, limites, vitesse d'acquisition)
- Évolution cible (moyen terme + formation associée)
- Liste finale des réalisations liées (liens)

## 7) Structure d'une page réalisation (selon ma grille d'éval)

Chaque réalisation inclut :
- Présentation/définition du projet
- Objectifs, contexte, enjeux, risques
- Étapes de réalisation
- Acteurs et interactions
- Résultats (pour toi et pour l'entreprise)
- Suites du projet (court et moyen terme)
- Regard critique
- Liste des compétences mobilisées (liens)

## 8) Direction design

Polices :
- Titres : Zuume (assets locaux)
- Paragraphes : Montserrat

Palette :
- #2D2D2D
- #30302F
- #BDBDBD
- #FFFFFF
- #339989
- #153030

Intentions visuelles :
- Haut contraste lisible
- Héro impactant (photo + proposition de valeur)
- Cartes réalisations premium
- Motifs de fond subtils (pas fond plat)
- Responsive mobile prioritaire

