import { Component } from '@angular/core';

type Project = {
  slug: string;
  title: string;
  summary: string;
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
            <h2>{{ project.title }}</h2>
            <p>{{ project.summary }}</p>
            <p class="card-meta-title">Compétences mobilisées</p>
            <ul class="card-meta-list">
              @for (skill of project.relatedSkills; track skill.path) {
                <li>
                  <a [href]="skill.path">{{ skill.title }}</a>
                </li>
              }
            </ul>
            <a [href]="project.repository" target="_blank" rel="noopener">Consulter le dépôt GitHub</a>
          </article>
        }
      </div>
    </section>
  `,
})
export class RealisationsPage {
  // J'ai retenu ces projets pour rester aligne avec la grille d'evaluation et l'argumentaire de soutenance.
  protected readonly projects: Project[] = [
    {
      slug: 'project-360-content-bridge',
      title: '360-content-bridge',
      summary: "Plugin d'import/export WordPress conçu pour accélérer la maintenance de contenus à l'échelle.",
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
      summary: "Plugin de nettoyage des médias orphelins pour réduire le poids des instances et les coûts de stockage.",
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
      summary: 'Plugin WordPress open-source de monitoring, sécurité et exploitation opérationnelle.',
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
      summary: "Agent IA de planification de voyage orienté scénarios et gain de temps utilisateur.",
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
      summary: 'Prototype d’une marketplace B2B/B2C de services, actuellement en développement.',
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
