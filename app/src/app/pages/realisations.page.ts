import { Component, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { REALISATIONS, RealisationDetail } from './realisation-detail.page';

type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  keyMetric: string;
  visualHint: string;
  screenshot: string;
  repository: string;
  relatedSkills: Array<{ title: string; path: string }>;
};

@Component({
  selector: 'app-realisations-page',
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Réalisations</p>
        <h1>Mes 5 projets de référence</h1>
      </header>

      <div class="cards-grid">
        @for (project of projects; track project.title) {
          <article class="card card--project" [id]="project.slug">
            <figure class="project-visual">
              <img [src]="project.screenshot" [alt]="'Capture — ' + project.title" />
            </figure>
            <p class="chip metric-chip">{{ project.keyMetric }}</p>
            <h2>{{ project.title }}</h2>
            <p class="project-tagline">{{ project.tagline }}</p>
            <p>{{ project.summary }}</p>
            <button class="card-link" type="button" (click)="openDrawer(project.slug)">Voir le détail</button>
            <p class="card-meta-title">Compétences mobilisées</p>
            <ul class="card-meta-list card-meta-list--pretty">
              @for (skill of project.relatedSkills; track skill.path) {
                <li>
                  <a [routerLink]="skill.path">{{ skill.title }}</a>
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

    @if (selectedDetail) {
      <div class="drawer-backdrop" (click)="closeDrawer()" aria-hidden="true"></div>
      <aside class="detail-drawer" role="dialog" aria-modal="true" [attr.aria-label]="selectedDetail.title">
        <div class="detail-drawer__header">
          <h2 class="detail-drawer__title">{{ selectedDetail.title }}</h2>
          <button class="detail-drawer__close" type="button" (click)="closeDrawer()" aria-label="Fermer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>
          </button>
        </div>
        <div class="detail-drawer__body">
          <p class="section-header__kicker">{{ selectedDetail.order }}</p>

          @if (selectedDetail.screenshot) {
            <figure class="realisation-screenshot">
              <img [src]="selectedDetail.screenshot" [alt]="'Capture — ' + selectedDetail.title" />
            </figure>
          }

          <article class="panel detail-block">
            <h3>1. Présentation</h3>
            <p>{{ selectedDetail.presentation }}</p>
          </article>

          <article class="panel detail-block">
            <h3>2. Objectifs, contexte, enjeux et risques</h3>
            <ul class="detail-list">
              @for (item of selectedDetail.objectivesContextRisks; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>3. Ce que j'ai fait</h3>
            <ul class="detail-list">
              @for (item of selectedDetail.steps; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>4. Acteurs</h3>
            <ul class="detail-list">
              @for (item of selectedDetail.stakeholders; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>5. Résultats</h3>
            <div class="two-columns two-columns--details">
              <div class="detail-result-card">
                <h4>Pour moi</h4>
                <ul class="detail-list">
                  @for (item of selectedDetail.resultsForMe; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
              <div class="detail-result-card">
                <h4>Pour l'entreprise</h4>
                <ul class="detail-list">
                  @for (item of selectedDetail.resultsForCompany; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </div>
          </article>

          <article class="panel detail-block">
            <h3>6. Lendemains</h3>
            <ul class="detail-list">
              <li><strong>Futur immédiat :</strong> {{ selectedDetail.futureImmediate }}</li>
              <li><strong>À distance :</strong> {{ selectedDetail.futureDistance }}</li>
              <li><strong>Aujourd'hui :</strong> {{ selectedDetail.futureToday }}</li>
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>7. Mon regard critique</h3>
            <p>{{ selectedDetail.criticalView }}</p>
            <a [href]="selectedDetail.repository" target="_blank" rel="noopener" class="github-link">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.2-1.4-4.2-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1 0 1.8 1.1 1.8 1.1 1 .1.5 2.3 3.7 1.6.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.5 9c-.1-.3-.6-1.5.1-3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6.1 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3 .8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
              <span>Dépôt GitHub</span>
            </a>
          </article>

          @if (selectedDetail.techStack.length) {
            <article class="panel detail-block">
              <h3>Technologies utilisées</h3>
              <div class="tech-stack">
                @for (badge of selectedDetail.techStack; track badge.name) {
                  <div class="tech-badge">
                    @if (badge.iconUrl) {
                      <img class="tech-badge__icon" [src]="badge.iconUrl" [alt]="badge.name" />
                    }
                    <span>{{ badge.name }}</span>
                  </div>
                }
              </div>
            </article>
          }

          <article class="panel detail-block">
            <h3>Compétences rattachées</h3>
            <ul class="detail-list detail-list--links">
              @for (skill of selectedDetail.linkedSkills; track skill.path) {
                <li>
                  <a [routerLink]="skill.path" (click)="closeDrawer()">{{ skill.title }}</a>
                </li>
              }
            </ul>
            <a class="card-link" [routerLink]="'/realisations/' + selectedDetail.slug">Voir la page dédiée ↗</a>
          </article>
        </div>
      </aside>
    }
  `,
})
export class RealisationsPage {
  private readonly location = inject(Location);
  protected selectedDetail: RealisationDetail | null = null;

  @HostListener('window:keydown.escape')
  protected handleEscape(): void {
    this.closeDrawer();
  }

  protected openDrawer(slug: string): void {
    this.selectedDetail = REALISATIONS.find((r) => r.slug === slug) ?? null;
    if (this.selectedDetail) {
      this.location.replaceState('/realisations/' + slug);
    }
  }

  protected closeDrawer(): void {
    if (this.selectedDetail) {
      this.selectedDetail = null;
      this.location.replaceState('/realisations');
    }
  }
  // J'ai retenu ces projets pour montrer simplement ce que j'ai fait, comment je l'ai fait et ce que cela a apporté.
  protected readonly projects: Project[] = [
    {
      slug: 'project-360-content-bridge',
      title: '360-content-bridge',
      screenshot: 'assets/images/screenshots-realisations/360-content-bridge.png',
      tagline: 'Rendre les transferts de contenu plus sûrs et plus rapides.',
      summary: "Plugin d'import/export WordPress conçu pour faciliter la maintenance de contenus sur plusieurs sites.",
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
      screenshot: 'assets/images/screenshots-realisations/360-media-auto-cleanup.png',
      tagline: 'Nettoyer sans casser : supprimer les médias inutiles avec prudence.',
      summary: "Plugin de nettoyage des médias orphelins pour alléger les sites et réduire le stockage inutile.",
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
      screenshot: 'assets/images/screenshots-realisations/360-tranquillite.png',
      tagline: 'Réunir sécurité, suivi et exploitation dans un seul outil.',
      summary: 'Plugin WordPress open source qui centralise des fonctions utiles pour la sécurité et le suivi.',
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
      screenshot: 'assets/images/screenshots-realisations/travel-planner.png',
      tagline: 'Transformer une idée IA en parcours simple pour l’utilisateur.',
      summary: "Agent IA de planification de voyage pensé pour proposer des scénarios clairs et utiles.",
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
      screenshot: 'assets/images/screenshots-realisations/vastrion-super-app.png',
      tagline: 'Poser une base produit claire avant d’aller plus loin.',
      summary: 'Prototype d’une marketplace de services, encore en cours de construction.',
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
