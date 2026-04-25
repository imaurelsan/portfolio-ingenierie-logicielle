import { Component, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPETENCES, CompetenceDetail } from './competence-detail.page';

type Skill = {
  slug: string;
  title: string;
  domain: 'Technique' | 'Transversal';
  level: string;
  note: string;
  progress: number;
};

type SkillFilter = 'Tous' | 'Technique' | 'Transversal';

@Component({
  selector: 'app-competences-page',
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Compétences</p>
        <h1>Vue comparative de mes 10 compétences</h1>
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
            (click)="setFilter(item)"
          >
            {{ item }}
          </button>
        }
      </div>

      <div class="cards-grid cards-grid--skills">
        @for (skill of filteredSkills; track skill.title) {
          <article class="card card--skill">
            <div class="card__body">
              <p class="chip">{{ skill.domain }}</p>
              <h2>{{ skill.title }}</h2>
              <p>Niveau actuel : <strong>{{ skill.level }}</strong></p>
              <p class="skill-note">{{ skill.note }}</p>
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
            <ul class="detail-list detail-list--rich detail-list--cards">
              @for (anecdote of selectedDetail.anecdotes; track anecdote.title) {
                <li>
                  <h4>{{ anecdote.title }}</h4>
                  <div class="detail-points">
                    <p><strong>Contexte :</strong> {{ anecdote.situation }}</p>
                    <p><strong>Résultat :</strong> {{ anecdote.result }}</p>
                    <p><strong>Valeur ajoutée :</strong> {{ anecdote.valueAdded }}</p>
                    <p>
                      <strong>Réalisation liée :</strong>
                      <a [routerLink]="anecdote.linkedProject.path">{{ anecdote.linkedProject.title }}</a>
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
                  <a [routerLink]="project.path" (click)="closeDrawer()">{{ project.title }}</a>
                </li>
              }
            </ul>
            <a class="card-link" [routerLink]="'/competences/' + selectedDetail.slug">Voir la page dédiée ↗</a>
          </article>
        </div>
      </aside>
    }
  `,
})
export class CompetencesPage {
  private readonly location = inject(Location);

  protected readonly filters: SkillFilter[] = ['Tous', 'Technique', 'Transversal'];
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

    return this.skills.filter((skill) => skill.domain === this.selectedFilter);
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
      level: 'Intermédiaire avancé',
      note: 'Je l’ai déjà pratiquée sur des cas réels, mais je dois encore la renforcer sur les situations les plus complexes.',
      progress: 72,
    },
    {
      slug: 'developpement-plugins-wordpress',
      title: 'Développement de plugins WordPress',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'Je la pratique régulièrement en entreprise, avec encore une marge de progression sur les tests et la solidité du code.',
      progress: 62,
    },
    {
      slug: 'integrations-api-rest',
      title: 'Intégrations API REST',
      domain: 'Technique',
      level: 'Débutant',
      note: 'J’ai les bases et je continue d’apprendre à mieux gérer les échanges de données, les erreurs et les cas limites.',
      progress: 34,
    },
    {
      slug: 'performance-front-optimisation',
      title: 'Performance front-end et optimisation',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'J’ai déjà appliqué une logique audit puis correction, mais je dois encore mieux la rendre régulière et mesurable.',
      progress: 58,
    },
    {
      slug: 'securite-applicative',
      title: 'Sécurité applicative',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'J’ai un bon socle grâce à mon parcours initial, et je continue à mieux l’appliquer au web.',
      progress: 60,
    },
    {
      slug: 'gestion-projet-agile',
      title: 'Gestion de projet agile',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Je suis assez autonome pour prioriser et découper le travail, mais je dois encore progresser sur le suivi par indicateurs.',
      progress: 57,
    },
    {
      slug: 'communication-technique',
      title: 'Communication technique',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Je suis à l’aise pour expliquer les sujets techniques simplement, même si je peux encore améliorer la clarté de mes supports.',
      progress: 56,
    },
    {
      slug: 'ux-ui-orientee-usage',
      title: 'UX/UI orientée usage',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Je l’ai mise en pratique sur plusieurs projets, et je veux encore progresser sur les retours utilisateurs.',
      progress: 55,
    },
    {
      slug: 'automatisation-amelioration-continue',
      title: 'Automatisation et amélioration continue',
      domain: 'Transversal',
      level: 'Débutant',
      note: 'J’ai acquis de premières bases concrètes en CI/CD ; mon enjeu maintenant est de rendre tout cela plus fiable et plus régulier.',
      progress: 36,
    },
    {
      slug: 'analyse-critique-decision-technique',
      title: 'Analyse critique et prise de décision',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'J’ai déjà du recul sur les choix à faire, et je veux maintenant mieux appuyer mes décisions sur des faits simples et mesurables.',
      progress: 59,
    },
  ];
}
