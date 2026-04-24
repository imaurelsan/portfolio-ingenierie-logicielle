import { Component } from '@angular/core';

type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  keyMetric: string;
  visualHint: string;
  repository: string;
  relatedSkills: Array<{ title: string; path: string }>;
};

@Component({
  selector: 'app-realisations-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Réalisations</p>
        <h1>Mes 5 projets de référence</h1>
      </header>

      <div class="cards-grid">
        @for (project of projects; track project.title) {
          <article class="card card--project" [id]="project.slug">
            <div class="project-visual">
              <p>{{ project.visualHint }}</p>
              <span>Zone de capture projet (à remplacer)</span>
            </div>
            <p class="chip metric-chip">{{ project.keyMetric }}</p>
            <h2>{{ project.title }}</h2>
            <p class="project-tagline">{{ project.tagline }}</p>
            <p>{{ project.summary }}</p>
            <a class="card-link" [href]="'/realisations/' + project.slug">Voir le détail</a>
            <p class="card-meta-title">Compétences mobilisées</p>
            <ul class="card-meta-list card-meta-list--pretty">
              @for (skill of project.relatedSkills; track skill.path) {
                <li>
                  <a [href]="skill.path">{{ skill.title }}</a>
                </li>
              }
            </ul>
            <a [href]="project.repository" target="_blank" rel="noopener" class="github-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.2-1.4-4.2-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1 0 1.8 1.1 1.8 1.1 1 .1.5 2.3 3.7 1.6.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.5 9c-.1-.3-.6-1.5.1-3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6.1 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3 .8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"/>
              </svg>
              <span>Consulter le dépôt GitHub</span>
            </a>
          </article>
        }
      </div>
    </section>
  `,
})
export class RealisationsPage {
  // J'ai retenu ces projets pour illustrer clairement mon niveau, ma méthode et mes résultats sur des cas concrets.
  protected readonly projects: Project[] = [
    {
      slug: 'project-360-content-bridge',
      title: '360-content-bridge',
      tagline: 'Rendre les transferts de contenu fiables et plus rapides à exploiter.',
      summary: "Plugin d'import/export WordPress conçu pour accélérer la maintenance de contenus à l'échelle.",
      keyMetric: '-40% temps opérationnel estimé',
      visualHint: 'Flux import/export multisite',
      repository: 'https://github.com/imaurelsan/360-content-bridge',
      relatedSkills: [
        {
          title: 'Architecture web mutualisée (WordPress multisite)',
          path: '/competences/architecture-web-mutualisee',
        },
        {
          title: 'Développement de plugins WordPress',
          path: '/competences/developpement-plugins-wordpress',
        },
        {
          title: 'Intégrations API REST',
          path: '/competences/integrations-api-rest',
        },
      ],
    },
    {
      slug: 'project-360-media-auto-cleanup',
      title: '360-media-auto-cleanup',
      tagline: 'Nettoyer sans casser : automatisation prudente des médias orphelins.',
      summary: "Plugin de nettoyage des médias orphelins pour réduire le poids des instances et les coûts de stockage.",
      keyMetric: '-25% stockage estimé',
      visualHint: 'Audit et nettoyage médias',
      repository: 'https://github.com/imaurelsan/360-media-auto-cleanup',
      relatedSkills: [
        {
          title: 'Architecture web mutualisée (WordPress multisite)',
          path: '/competences/architecture-web-mutualisee',
        },
        {
          title: 'Performance web et optimisation front',
          path: '/competences/performance-front-optimisation',
        },
        {
          title: 'Automatisation et amélioration continue',
          path: '/competences/automatisation-amelioration-continue',
        },
      ],
    },
    {
      slug: 'project-360tranquilite',
      title: '360tranquilité',
      tagline: 'Unifier sécurité, monitoring et exploitation dans un socle modulaire.',
      summary: 'Plugin WordPress open-source de monitoring, sécurité et exploitation opérationnelle.',
      keyMetric: '+1 socle opérationnel centralisé',
      visualHint: 'Console de supervision WordPress',
      repository: 'https://github.com/imaurelsan/360tranquilite',
      relatedSkills: [
        {
          title: 'Architecture web mutualisée (WordPress multisite)',
          path: '/competences/architecture-web-mutualisee',
        },
        {
          title: 'Sécurité applicative',
          path: '/competences/securite-applicative',
        },
        {
          title: 'Automatisation et amélioration continue',
          path: '/competences/automatisation-amelioration-continue',
        },
      ],
    },
    {
      slug: 'project-crewai-voyage',
      title: 'crewai-projet-agent-voyage',
      tagline: 'Transformer une expérimentation IA en parcours lisible pour l’utilisateur.',
      summary: "Agent IA de planification de voyage orienté scénarios et gain de temps utilisateur.",
      keyMetric: 'Prototype fonctionnel en itérations courtes',
      visualHint: 'Scénarios de recommandations IA',
      repository: 'https://github.com/imaurelsan/crewai-projet-agent-voyage',
      relatedSkills: [
        {
          title: 'Analyse critique et prise de décision',
          path: '/competences/analyse-critique-decision-technique',
        },
        {
          title: 'Communication technique',
          path: '/competences/communication-technique',
        },
        {
          title: 'UX/UI orientée usage',
          path: '/competences/ux-ui-orientee-usage',
        },
      ],
    },
    {
      slug: 'project-v0-vastrion-mobile-prototype',
      title: 'v0-vastrion-mobile-prototype',
      tagline: 'Poser une base produit claire avant industrialisation.',
      summary: 'Prototype d’une marketplace B2B/B2C de services, actuellement en développement.',
      keyMetric: 'MVP cadré en 4 parcours prioritaires',
      visualHint: 'Wireframes et parcours mobile',
      repository: 'https://github.com/imaurelsan/v0-vastrion-mobile-prototype',
      relatedSkills: [
        {
          title: 'UX/UI orientée usage',
          path: '/competences/ux-ui-orientee-usage',
        },
        {
          title: 'Gestion de projet agile',
          path: '/competences/gestion-projet-agile',
        },
        {
          title: 'Analyse critique et prise de décision',
          path: '/competences/analyse-critique-decision-technique',
        },
      ],
    },
  ];
}
