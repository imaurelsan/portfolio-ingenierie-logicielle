import { Component } from '@angular/core';

type Evidence = {
  title: string;
  detail: string;
};

type Metric = {
  label: string;
  value: string;
  whyItMatters: string;
};

type ImprovementPlan = {
  horizon: string;
  target: string;
  action: string;
};

@Component({
  selector: 'app-competence-architecture-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Compétence détaillée 1/10</p>
        <h1>Architecture web mutualisée (WordPress multisite)</h1>
      </header>

      <article class="panel detail-block">
        <h2>Définition contextualisée et actualité</h2>
        <p>
          Cette compétence consiste à concevoir une architecture où plusieurs sites partagent un socle technique
          commun, avec une gouvernance claire des thèmes, plugins et déploiements. Dans mon contexte, cela répond
          directement à un enjeu d'entreprise multi-projets: livrer plus vite, sans multiplier les coûts de maintenance.
        </p>
        <p>
          Elle reste actuelle car les organisations cherchent à standardiser leurs plateformes pour mieux absorber les
          évolutions sécurité, performance et conformité, tout en gardant la possibilité d'adapter chaque site à un besoin métier.
        </p>
      </article>

      <article class="panel detail-block">
        <h2>Preuves concrètes</h2>
        <div class="cards-grid">
          @for (evidence of evidences; track evidence.title) {
            <article class="card">
              <h3>{{ evidence.title }}</h3>
              <p>{{ evidence.detail }}</p>
            </article>
          }
        </div>
      </article>

      <article class="panel detail-block">
        <h2>Résultats mesurables et valeur ajoutée</h2>
        <div class="cards-grid metrics-grid">
          @for (metric of metrics; track metric.label) {
            <article class="card">
              <h3>{{ metric.label }}</h3>
              <p class="metric-value">{{ metric.value }}</p>
              <p>{{ metric.whyItMatters }}</p>
            </article>
          }
        </div>
      </article>

      <div class="two-columns">
        <article class="panel detail-block">
          <h2>Autocritique</h2>
          <p>
            Mon niveau est avancé sur la structure multisite et la création de composants réutilisables.
            Ma limite actuelle se situe surtout sur l'industrialisation complète de la chaîne: observabilité centrale,
            rollback automatisé et tests de non-régression systématiques sur tous les sites du réseau.
          </p>
          <p>
            Je peux déployer vite, mais je veux réduire davantage le risque humain en renforçant l'automatisation
            de la validation avant mise en production.
          </p>
        </article>

        <article class="panel detail-block">
          <h2>Évolution cible</h2>
          <ul class="detail-list">
            @for (plan of improvementPlans; track plan.horizon) {
              <li>
                <strong>{{ plan.horizon }}</strong>
                <p>{{ plan.target }}</p>
                <p>{{ plan.action }}</p>
              </li>
            }
          </ul>
        </article>
      </div>

      <article class="panel detail-block">
        <h2>Réalisations liées</h2>
        <p class="intro-text">
          Ces projets démontrent comment cette compétence est appliquée en situation réelle.
        </p>
        <ul class="detail-list detail-list--links">
          @for (project of relatedProjects; track project.slug) {
            <li>
              <a [href]="'/realisations#' + project.slug">{{ project.title }}</a>
              <p>{{ project.reason }}</p>
            </li>
          }
        </ul>
      </article>
    </section>
  `,
})
export class CompetenceArchitecturePage {
  protected readonly evidences: Evidence[] = [
    {
      title: 'Déploiement multisite en entreprise',
      detail:
        'Contribution à une architecture WordPress multisite permettant de centraliser la maintenance technique tout en conservant des spécificités par site.',
    },
    {
      title: 'Plugins et widgets custom mutualisables',
      detail:
        'Conception de composants pouvant être activés site par site ou sur l’ensemble du réseau, avec logique réutilisable et maintenance simplifiée.',
    },
    {
      title: 'Processus par environnements',
      detail:
        'Mise en pratique d’une approche en trois phases (dev, staging, production) pour fiabiliser la mise en ligne et limiter les effets de bord.',
    },
  ];

  protected readonly metrics: Metric[] = [
    {
      label: 'Mutualisation des interventions',
      value: '1 socle technique pour plusieurs sites',
      whyItMatters: 'Réduit les actions répétitives et accélère les corrections transverses.',
    },
    {
      label: 'Temps de maintenance',
      value: 'Baisse observée sur les tâches récurrentes',
      whyItMatters: 'Permet de dégager du temps pour les évolutions métier.',
    },
    {
      label: 'Cohérence technique',
      value: 'Standards partagés sur le réseau',
      whyItMatters: 'Limite la dérive entre projets et facilite la reprise par un autre développeur.',
    },
  ];

  protected readonly improvementPlans: ImprovementPlan[] = [
    {
      horizon: 'Court terme (3 mois)',
      target: 'Industrialiser les contrôles avant déploiement.',
      action: 'Ajouter lint, tests ciblés et check qualité dans la pipeline CI/CD.',
    },
    {
      horizon: 'Moyen terme (6 à 12 mois)',
      target: 'Améliorer la résilience opérationnelle.',
      action: 'Mettre en place un rollback versionné, un monitoring unifié et des alertes exploitables.',
    },
  ];

  protected readonly relatedProjects = [
    {
      slug: 'project-360-content-bridge',
      title: '360-content-bridge',
      reason: 'Contribution directe à la maintenance multi-sites via des opérations de contenus structurées.',
    },
    {
      slug: 'project-360-media-auto-cleanup',
      title: '360-media-auto-cleanup',
      reason: 'Réduction de la charge de stockage et standardisation des bonnes pratiques de nettoyage.',
    },
    {
      slug: 'project-360tranquilite',
      title: '360tranquilité',
      reason: 'Complément sécurité et exploitation pour stabiliser un environnement mutualisé dans la durée.',
    },
  ];
}
