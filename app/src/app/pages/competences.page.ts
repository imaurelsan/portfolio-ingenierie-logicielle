import { Component } from '@angular/core';

type Skill = {
  slug: string;
  title: string;
  domain: 'Technique' | 'Transversal';
  level: string;
};

@Component({
  selector: 'app-competences-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Compétences</p>
        <h1>Vue comparative de mes 10 compétences</h1>
      </header>

      <p class="intro-text">
        Je présente ici ma hiérarchie de compétences pour que le jury comprenne immédiatement mes points forts,
        mes axes de progression et leur lien avec mes réalisations.
      </p>

      <div class="cards-grid cards-grid--skills">
        @for (skill of skills; track skill.title) {
          <article class="card">
            <p class="chip">{{ skill.domain }}</p>
            <h2>{{ skill.title }}</h2>
            <p>Niveau actuel : <strong>{{ skill.level }}</strong></p>
            <a class="card-link" [href]="'/competences/' + skill.slug">Voir le détail</a>
          </article>
        }
      </div>
    </section>
  `,
})
export class CompetencesPage {
  // Ici je garde les competences dans un tableau clair pour pouvoir les brancher facilement sur l'API plus tard.
  protected readonly skills: Skill[] = [
    {
      slug: 'architecture-web-mutualisee',
      title: 'Architecture web mutualisée (WordPress multisite)',
      domain: 'Technique',
      level: 'Avancé',
    },
    { slug: 'developpement-plugins-wordpress', title: 'Développement de plugins WordPress', domain: 'Technique', level: 'Avancé' },
    { slug: 'integrations-api-rest', title: 'Intégrations API REST', domain: 'Technique', level: 'Intermédiaire +' },
    { slug: 'performance-front-optimisation', title: 'Performance front-end et optimisation', domain: 'Technique', level: 'Intermédiaire +' },
    { slug: 'securite-applicative', title: 'Sécurité applicative', domain: 'Technique', level: 'Intermédiaire +' },
    { slug: 'gestion-projet-agile', title: 'Gestion de projet agile', domain: 'Transversal', level: 'Intermédiaire +' },
    { slug: 'communication-technique', title: 'Communication technique', domain: 'Transversal', level: 'Intermédiaire +' },
    { slug: 'ux-ui-orientee-usage', title: 'UX/UI orientée usage', domain: 'Transversal', level: 'Intermédiaire +' },
    { slug: 'automatisation-amelioration-continue', title: 'Automatisation et amélioration continue', domain: 'Transversal', level: 'Intermédiaire +' },
    { slug: 'analyse-critique-decision-technique', title: 'Analyse critique et prise de décision', domain: 'Transversal', level: 'Intermédiaire +' },
  ];
}
