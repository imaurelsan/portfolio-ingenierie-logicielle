# DevOps - Portfolio sur Hostinger

## Objectif
Disposer d'une chaîne de livraison fiable, défendable et exploitable :
- build reproductible
- déploiement automatisé
- vérification de version réellement servie en ligne

## Pipeline CI/CD en place

Fichier source : `.github/workflows/ci-cd-hostinger.yml`

Déclencheurs :
- `push` sur `main`
- `pull_request` vers `main`
- exécution manuelle (`workflow_dispatch`)

Jobs :

1. `build`
- checkout
- setup Node 22 + cache npm
- `npm ci` (dans `app`)
- génération de `src/assets/build-info.json`
- build Angular production
- écriture de `dist/app/browser/assets/build-info.json`
- publication de l'artefact `angular-dist`

2. `deploy` (uniquement sur `main`, pas sur PR)
- rebuild production
- génération des metadata
- création optionnelle d'un alias de compatibilité du bundle `main-*.js` pour contourner un cache agressif de l'index live
- contrôle de présence des assets critiques
- déploiement FTPS via `lftp` avec retries
- vérification du `build-info.json` distant sur la cible FTP
- vérification non bloquante de la version servie publiquement
- vérification non bloquante de l'endpoint image

## Secrets GitHub requis

Dans GitHub -> Settings -> Secrets and variables -> Actions :

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `HOSTINGER_FTP_TARGET_DIR` (recommandé: `/portfolio/`)
- `ALLOW_FTP_ROOT_DEPLOY` (optionnel, `true` uniquement si déploiement racine assumé)

## Cible de déploiement

- Cible préférée : valeur de `HOSTINGER_FTP_TARGET_DIR`
- Fallback sécurisé : `/portfolio/` si la racine `/` n'est pas explicitement autorisée

## Vérification post-déploiement

Checklist rapide :
1. Ouvrir `https://portfolio.yaurel.com/`
2. Vérifier les routes principales (dont routes dynamiques)
3. Vérifier le responsive mobile
4. Contrôler `https://portfolio.yaurel.com/assets/build-info.json`
5. Vérifier que le commit servi correspond au dernier commit attendu

Exemple PowerShell de contrôle cache-bypass :

```powershell
$u='https://portfolio.yaurel.com/assets/build-info.json?ts=' + [int][double]::Parse((Get-Date -UFormat %s))
Invoke-WebRequest -Uri $u -UseBasicParsing | Select-Object StatusCode,Content | Format-List
```

## Prévisualisation locale avant push

Checklist recommandée avant tout `git push` :
1. Se placer dans `app`
2. Lancer la prévisualisation locale : `npm start -- --host 0.0.0.0 --port 4200`
3. Ouvrir `http://localhost:4200/`
4. Vérifier desktop + mobile (menu, sous-menus, drawers, formulaires)
5. Valider avec un build prod : `npm run build -- --configuration production`

Principe : ne pousser que les modifications validées visuellement en local.

## Argumentaire soutenance

- Maintenance : process standardisé, moins d'erreurs humaines
- Performance : build production systématique et assets statiques optimisés
- Coûts : pas d'infrastructure serveur supplémentaire
- Évolutivité : workflow réutilisable pour d'autres fronts statiques

## Limites connues

- Dépendance aux secrets FTP
- Rollback non versionné automatiquement côté hébergeur
- Vérification publique potentiellement perturbée par le cache CDN/navigateur

## Améliorations proposées

- Ajouter `npm run test` et lint dans la pipeline
- Ajouter Lighthouse CI avec seuils bloquants
- Mettre en place une stratégie de rollback (archives versionnées)
- Ajouter une vérification de healthcheck applicatif plus stricte
