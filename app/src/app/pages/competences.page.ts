import { Component } from '@angular/core';

type Skill = {
  title: string;
  domain: 'Technique' | 'Transversal';
  level: string;
  detailPath?: string;
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
            @if (skill.detailPath) {
              <a class="card-link" [href]="skill.detailPath">Voir le détail</a>
            }
          </article>
        }
      </div>
    </section>
  `,
})
export class CompetencesPage {
  // J'utilise un tableau clair pour pouvoir brancher facilement ces données sur l'API plus tard.
  protected readonly skills: Skill[] = [
    {
      title: 'Architecture web mutualisée (WordPress multisite)',
      domain: 'Technique',
      level: 'Avancé',
      detailPath: '/competences/architecture-web-mutualisee',
    },
    { title: 'Développement de plugins WordPress', domain: 'Technique', level: 'Avancé' },
    { title: 'Intégrations API REST', domain: 'Technique', level: 'Intermédiaire +' },
    { title: 'Performance front-end et optimisation', domain: 'Technique', level: 'Intermédiaire +' },
    { title: 'Sécurité applicative', domain: 'Technique', level: 'Intermédiaire +' },
    { title: 'Gestion de projet agile', domain: 'Transversal', level: 'Intermédiaire +' },
    { title: 'Communication technique', domain: 'Transversal', level: 'Intermédiaire +' },
    { title: 'UX/UI orientée usage', domain: 'Transversal', level: 'Intermédiaire +' },
    { title: 'Automatisation et productivité', domain: 'Transversal', level: 'Intermédiaire +' },
    { title: 'Analyse critique et prise de décision', domain: 'Transversal', level: 'Intermédiaire +' },
  ];
}
