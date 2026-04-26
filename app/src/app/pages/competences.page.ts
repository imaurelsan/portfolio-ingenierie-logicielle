import { Component, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPETENCES, CompetenceDetail } from './competence-detail.page';

type Skill = {
  slug: string;
  title: string;
  domain: 'Technique' | 'Humaine';
  iconPath: string;
  level: string;
  importance: string;
  transferability: string;
  progress: number;
};

type SkillFilter = 'Tous' | 'Techniques' | 'Humaines';

@Component({
  selector: 'app-competences-page',
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Compétences</p>
        <h1>Vue comparative de mes 11 compétences</h1>
      </header>

      <p class="intro-text">
        Cette cartographie présente mes compétences de manière claire : niveau actuel, axes de progression
        et articulation concrète avec mes réalisations.
      </p>

      <div class="segment-filter" role="group" aria-label="Filtrer les compétences">
        @for (item of filters; track item) {
          <button
            type="button"
            class="segment-filter__item"
            [class.segment-filter__item--active]="item === selectedFilter"
            [class.segment-filter__item--tech]="item === 'Techniques'"
            [class.segment-filter__item--human]="item === 'Humaines'"
            (click)="setFilter(item)"
          >
            {{ item }}
          </button>
        }
      </div>

      <div class="cards-grid cards-grid--skills">
        @for (skill of filteredSkills; track skill.title) {
          <article
            class="card card--skill"
            [class.card--skill-tech]="skill.domain === 'Technique'"
            [class.card--skill-human]="skill.domain === 'Humaine'"
          >
            <div class="card__body">
              <div class="skill-head">
                <svg class="skill-head__icon" viewBox="0 0 24 24" [attr.aria-label]="skill.domain" role="img">
                  <path [attr.d]="skill.iconPath" />
                </svg>
              </div>
              <h2>{{ skill.title }}</h2>
              <p><strong>Niveau actuel :</strong> {{ skill.level }}</p>
              <p><strong>Importance pour mon projet pro :</strong> {{ skill.importance }}</p>
              <p><strong>Transférabilité inter-projets :</strong> {{ skill.transferability }}</p>
            </div>
            <div class="card__footer">
              <div class="skill-meter" role="presentation" aria-hidden="true">
                <span [style.--progress-width.%]="skill.progress"></span>
              </div>
              <button class="card-link" type="button" (click)="openDrawer(skill.slug)">Voir le détail</button>
            </div>
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

          <article class="panel detail-block">
            <h3>1. Ma définition</h3>
            @for (p of selectedDetail.definition; track p) {
              <p>{{ p }}</p>
            }
          </article>

          <article class="panel detail-block">
            <h3>2. Mes éléments de preuve</h3>
            <ul class="detail-list detail-list--rich detail-list--cards detail-list--no-bullet">
              @for (anecdote of selectedDetail.anecdotes; track anecdote.title) {
                <li>
                  <h4>{{ anecdote.title }}</h4>
                  <div class="detail-points">
                    <p><strong>Contexte :</strong> {{ anecdote.situation }}</p>
                    <p><strong>Résultat :</strong> {{ anecdote.result }}</p>
                    <p><strong>Valeur ajoutée :</strong> {{ anecdote.valueAdded }}</p>
                    <p>
                      <strong>Réalisation liée :</strong>&nbsp;
                      <a [routerLink]="anecdote.linkedProject.path">{{ anecdote.linkedProject.title }} <span aria-hidden="true">↗</span></a>
                    </p>
                  </div>
                </li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>3. Mon autocritique</h3>
            <ul class="detail-list">
              @for (item of selectedDetail.selfReview; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>4. Mon évolution</h3>
            <ul class="detail-list">
              @for (item of selectedDetail.evolution; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h3>Réalisations rattachées</h3>
            <ul class="detail-list detail-list--links">
              @for (project of selectedDetail.projects; track project.path) {
                <li>
                  <a [routerLink]="project.path" (click)="closeDrawer()">{{ project.title }} <span aria-hidden="true">↗</span></a>
                </li>
              }
            </ul>
          </article>
        </div>
      </aside>
    }
  `,
})
export class CompetencesPage {
  private readonly location = inject(Location);

  protected readonly filters: SkillFilter[] = ['Tous', 'Techniques', 'Humaines'];
  protected selectedFilter: SkillFilter = 'Tous';
  protected selectedDetail: CompetenceDetail | null = null;

  @HostListener('window:keydown.escape')
  protected handleEscape(): void {
    this.closeDrawer();
  }

  protected openDrawer(slug: string): void {
    this.selectedDetail = COMPETENCES.find((c) => c.slug === slug) ?? null;
    if (this.selectedDetail) {
      this.location.replaceState('/competences/' + slug);
    }
  }

  protected closeDrawer(): void {
    if (this.selectedDetail) {
      this.selectedDetail = null;
      this.location.replaceState('/competences');
    }
  }

  protected get filteredSkills(): Skill[] {
    if (this.selectedFilter === 'Tous') {
      return this.skills;
    }

    const expectedDomain = this.selectedFilter === 'Techniques' ? 'Technique' : 'Humaine';
    return this.skills.filter((skill) => skill.domain === expectedDomain);
  }

  protected setFilter(filter: SkillFilter): void {
    this.selectedFilter = filter;
  }

  // Ici je garde les competences dans un tableau clair pour pouvoir les brancher facilement sur l'API plus tard.
  protected readonly skills: Skill[] = [
    {
      slug: 'architecture-web-mutualisee',
      title: 'Architecture web mutualisée (WordPress multisite)',
      domain: 'Technique',
      iconPath: 'M3 4h8v7H3V4Zm10 0h8v7h-8V4ZM3 13h8v7H3v-7Zm10 0h8v7h-8v-7Z',
      level: 'Intermédiaire avancé',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 72,
    },
    {
      slug: 'developpement-plugins-wordpress',
      title: 'Développement de plugins WordPress',
      domain: 'Technique',
      iconPath: 'M19 8h-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9a2 2 0 0 0-2 2v2H5v2h2v2H5v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V8Zm-4 8H9V6h6v10Z',
      level: 'Intermédiaire',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 62,
    },
    {
      slug: 'integrations-api-rest',
      title: 'Intégrations API REST',
      domain: 'Technique',
      iconPath: 'M4 5h5v4H4V5Zm11 0h5v4h-5V5ZM4 15h5v4H4v-4Zm11 0h5v4h-5v-4Zm-4-8h2v3h3v2h-3v3h-2v-3H8v-2h3V7Z',
      level: 'Débutant',
      importance: 'Élevée',
      transferability: 'Moyenne',
      progress: 34,
    },
    {
      slug: 'performance-front-optimisation',
      title: 'Performance front-end et optimisation',
      domain: 'Technique',
      iconPath: 'M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4Zm-1 4h2v4.4l3.3 2-1 1.6-4.3-2.6V8Z',
      level: 'Intermédiaire',
      importance: 'Élevée',
      transferability: 'Forte',
      progress: 58,
    },
    {
      slug: 'securite-applicative',
      title: 'Sécurité applicative',
      domain: 'Technique',
      iconPath: 'M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 13-3-3 1.4-1.4L11 12.2l3.6-3.6L16 10l-5 5Z',
      level: 'Intermédiaire',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 60,
    },
    {
      slug: 'automatisation-amelioration-continue',
      title: 'Automatisation et amélioration continue',
      domain: 'Technique',
      iconPath: 'M7 4h10v2H7V4Zm0 14h10v2H7v-2Zm-2-9h14v6H5V9Zm2 2v2h3v-2H7Z',
      level: 'Débutant',
      importance: 'Élevée',
      transferability: 'Moyenne',
      progress: 36,
    },
    {
      slug: 'gestion-projet-agile',
      title: 'Gestion de projet agile',
      domain: 'Humaine',
      iconPath: 'M4 6h10v2H4V6Zm0 5h16v2H4v-2Zm0 5h12v2H4v-2Z',
      level: 'Intermédiaire',
      importance: 'Élevée',
      transferability: 'Forte',
      progress: 57,
    },
    {
      slug: 'communication-technique',
      title: 'Communication technique',
      domain: 'Humaine',
      iconPath: 'M4 5h16v10H7l-3 3V5Zm4 3h8v2H8V8Zm0 3h6v2H8v-2Z',
      level: 'Intermédiaire',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 56,
    },
    {
      slug: 'ux-ui-orientee-usage',
      title: 'UX/UI orientée usage',
      domain: 'Humaine',
      iconPath: 'M4 4h16v4H4V4Zm0 6h7v10H4V10Zm9 0h7v5h-7v-5Zm0 7h7v3h-7v-3Z',
      level: 'Intermédiaire',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 55,
    },
    {
      slug: 'analyse-critique-decision-technique',
      title: 'Analyse critique et prise de décision',
      domain: 'Humaine',
      iconPath: 'M12 2a8 8 0 0 0-8 8c0 3 1.7 5.6 4.2 6.9L8 22h8l-.2-5.1A8 8 0 0 0 12 2Zm-1 6h2v5h-2V8Zm0 6h2v2h-2v-2Z',
      level: 'Intermédiaire',
      importance: 'Très élevée',
      transferability: 'Forte',
      progress: 59,
    },
    {
      slug: 'collaboration-interdisciplinaire',
      title: 'Collaboration interdisciplinaire',
      domain: 'Humaine',
      iconPath: 'M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.3 0-7 1.1-7 3.4V19h14v-2.6C15 14.1 10.3 13 8 13Zm8 0c-.3 0-.7 0-1.1.1 1.2.8 2.1 1.8 2.1 3.3V19h6v-2.6c0-2.3-4.7-3.4-7-3.4Z',
      level: 'Intermédiaire',
      importance: 'Élevée',
      transferability: 'Très forte',
      progress: 61,
    },
  ];
}
