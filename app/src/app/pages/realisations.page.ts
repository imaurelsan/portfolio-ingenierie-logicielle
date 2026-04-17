import { Component } from '@angular/core';

type Project = {
  title: string;
  summary: string;
  repository: string;
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
          <article class="card card--project">
            <h2>{{ project.title }}</h2>
            <p>{{ project.summary }}</p>
            <a [href]="project.repository" target="_blank" rel="noopener">Consulter le dépôt GitHub</a>
          </article>
        }
      </div>
    </section>
  `,
})
export class RealisationsPage {
  // J'ai listé les projets retenus pour coller à ta grille et à ton discours de soutenance.
  protected readonly projects: Project[] = [
    {
      title: '360-content-bridge',
      summary: "Plugin d'import/export WordPress conçu pour accélérer la maintenance de contenus à l'échelle.",
      repository: 'https://github.com/imaurelsan/360-content-bridge',
    },
    {
      title: '360-media-auto-cleanup',
      summary: "Plugin de nettoyage des médias orphelins pour réduire le poids des instances et les coûts de stockage.",
      repository: 'https://github.com/imaurelsan/360-media-auto-cleanup',
    },
    {
      title: '360tranquilité',
      summary: 'Plugin WordPress open-source de monitoring, sécurité et exploitation opérationnelle.',
      repository: 'https://github.com/imaurelsan/360tranquilite',
    },
    {
      title: 'crewai-projet-agent-voyage',
      summary: "Agent IA de planification de voyage orienté scénarios et gain de temps utilisateur.",
      repository: 'https://github.com/imaurelsan/crewai-projet-agent-voyage',
    },
    {
      title: 'v0-vastrion-mobile-prototype',
      summary: 'Prototype d’une marketplace B2B/B2C de services, actuellement en développement.',
      repository: 'https://github.com/imaurelsan/v0-vastrion-mobile-prototype',
    },
  ];
}
