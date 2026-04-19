# Support de soutenance - Base de travail

## Problématique
Comment mettre en place une architecture web mutualisée et évolutive pour répondre aux enjeux de maintenance, de performance et de coûts d'une entreprise multi-projets ?

## 1. Contexte entreprise
- Environnement multi-sites avec besoins hétérogènes.
- Contraintes de maintenance récurrente et de cohérence technique.
- Pression sur les délais de mise en ligne et les coûts d'exploitation.

## 2. Diagnostic initial
- Architecture existante fonctionnelle mais industrialisation incomplète.
- Déploiements historiquement majoritairement manuels.
- Monitoring et rollback à renforcer pour sécuriser la croissance.

## 3. Objectifs de solution
- Réduire les actions répétitives de maintenance.
- Garantir un niveau de performance stable en production.
- Maîtriser les coûts techniques sans multiplier l'infrastructure.
- Préparer une trajectoire d'évolution réutilisable sur d'autres projets.

## 4. Architecture retenue
- Back-office de contenu: WordPress sur domaine principal.
- Front public portfolio: Angular statique découplé du back.
- Exposition: portfolio.yaurel.com (sous-domaine dédié).
- Communication: API REST WordPress.

## 5. Mise en oeuvre DevOps
- Pipeline CI/CD GitHub Actions.
- Build Angular production reproductible.
- Déploiement FTPS automatisé vers Hostinger.
- Artefact de build conservé pour traçabilité.

## 6. Résultats observables
- Déploiement standardisé et rapide.
- Réduction du risque d'erreur manuelle sur la mise en ligne.
- Base technique plus claire pour la maintenance future.
- Positionnement défendable sur les trois axes: maintenance, performance, coûts.

## 7. Limites actuelles
- Dépendance aux secrets de déploiement.
- Rollback multi-version encore non automatisé.
- Monitoring applicatif et alerting à consolider.

## 8. Feuille de route
### Court terme
- Ajouter lint et tests ciblés dans la CI.
- Ajouter des contrôles qualité avant déploiement.

### Moyen terme
- Mettre en place un rollback versionné.
- Ajouter des métriques d'observabilité et des alertes.
- Formaliser des indicateurs comparables avant/après.

## 9. Indicateurs à présenter au jury
- Temps moyen de mise en ligne avant/après pipeline.
- Nombre d'interventions manuelles évitées par sprint.
- Score Lighthouse mobile et desktop.
- Effort de maintenance hebdomadaire estimé.
- Coût d'hébergement/outillage mensuel.

## 10. Conclusion soutenance
La solution proposée n'est pas une démonstration théorique: elle est déjà appliquée sur un cas réel, mesurable, et améliorable. Elle répond à une logique d'ingénierie logicielle orientée valeur métier et pérennité technique.
