# DevOps - Portfolio sur Hostinger

## Objectif
Mettre en place une chaîne DevOps simple, mesurable et défendable à la soutenance :
- Build fiable et reproductible
- Qualité minimale automatisée
- Déploiement automatisé vers portfolio.yaurel.com

## Workflow en place
Fichier : .github/workflows/ci-cd-hostinger.yml

Pipeline :
1. Checkout du repo
2. Setup Node 22
3. npm ci (app)
4. Build Angular production
5. Upload artefact dist
6. Déploiement FTPS sur /public_html/portfolio (branche main)

## Secrets GitHub à configurer
Dans GitHub -> Settings -> Secrets and variables -> Actions -> New repository secret

- HOSTINGER_FTP_SERVER
- HOSTINGER_FTP_USERNAME
- HOSTINGER_FTP_PASSWORD

## Vérification post-déploiement
- Ouvrir https://portfolio.yaurel.com/
- Vérifier les routes principales
- Vérifier l'affichage mobile
- Lancer un Lighthouse rapide (Perf/Accessibility/Best Practices/SEO)

## Argumentaire soutenance (maintenance, performance, coûts, évolutivité)
- Maintenance : déploiement standardisé, moins d'actions manuelles
- Performance : build production systématique, artefacts optimisés
- Coûts : outillage gratuit (GitHub Actions), aucun serveur supplémentaire
- Évolutivité : pipeline réutilisable pour d'autres sous-domaines/projets

## Limites connues
- Dépendance aux identifiants FTP
- Pas de rollback automatisé multi-version
- Monitoring applicatif à renforcer

## Prochaines améliorations conseillées
- Ajouter test/lint dans le pipeline
- Ajouter audit Lighthouse CI avec seuils
- Mettre en place le versionning de release
- Ajouter des logs de déploiement et une validation automatique de healthcheck
