import { Component } from '@angular/core';

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
          <article class="card">
            <p class="chip">{{ skill.domain }}</p>
            <h2>{{ skill.title }}</h2>
            <p>Niveau actuel : <strong>{{ skill.level }}</strong></p>
            <p class="skill-note">{{ skill.note }}</p>
            <div class="skill-meter" role="presentation" aria-hidden="true">
              <span [style.--progress-width.%]="skill.progress"></span>
            </div>
            <a class="card-link" [href]="'/competences/' + skill.slug">Voir le détail</a>
          </article>
        }
      </div>
    </section>
  `,
})
export class CompetencesPage {
  protected readonly filters: SkillFilter[] = ['Tous', 'Technique', 'Transversal'];
  protected selectedFilter: SkillFilter = 'Tous';

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
