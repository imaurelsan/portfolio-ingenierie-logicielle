import { Component } from '@angular/core';

type Skill = {
  slug: string;
  title: string;
  domain: 'Technique' | 'Transversal';
  level: string;
  note: string;
  progress: number;
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
            <p class="skill-note">{{ skill.note }}</p>
            <div class="skill-meter" role="presentation" aria-hidden="true">
              <span [style.width.%]="skill.progress"></span>
            </div>
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
      level: 'Intermédiaire avancé',
      note: 'Compétence socle déjà appliquée sur des cas réels, encore en consolidation sur les cas les plus complexes.',
      progress: 72,
    },
    {
      slug: 'developpement-plugins-wordpress',
      title: 'Développement de plugins WordPress',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'Pratique régulière en entreprise, avec encore des axes de montée en robustesse et tests.',
      progress: 62,
    },
    {
      slug: 'integrations-api-rest',
      title: 'Intégrations API REST',
      domain: 'Technique',
      level: 'Débutant',
      note: 'Bases opérationnelles en place, phase d’apprentissage active sur la résilience et les contrats.',
      progress: 34,
    },
    {
      slug: 'performance-front-optimisation',
      title: 'Performance front-end et optimisation',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'Méthode audit-correction déjà appliquée, à systématiser encore sur des seuils automatisés.',
      progress: 58,
    },
    {
      slug: 'securite-applicative',
      title: 'Sécurité applicative',
      domain: 'Technique',
      level: 'Intermédiaire',
      note: 'Socle fort via mon parcours initial, transposition web encore en progression continue.',
      progress: 60,
    },
    {
      slug: 'gestion-projet-agile',
      title: 'Gestion de projet agile',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Bonne autonomie sur priorisation et découpage, marge de progression sur les indicateurs.',
      progress: 57,
    },
    {
      slug: 'communication-technique',
      title: 'Communication technique',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Confortable en vulgarisation, avec amélioration continue sur la formalisation des supports.',
      progress: 56,
    },
    {
      slug: 'ux-ui-orientee-usage',
      title: 'UX/UI orientée usage',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Pratique appliquée sur des projets concrets, encore en montée sur les tests utilisateurs.',
      progress: 55,
    },
    {
      slug: 'automatisation-amelioration-continue',
      title: 'Automatisation et amélioration continue',
      domain: 'Transversal',
      level: 'Débutant',
      note: 'Premiers acquis réels en CI/CD, étape actuelle: fiabiliser et standardiser les contrôles.',
      progress: 36,
    },
    {
      slug: 'analyse-critique-decision-technique',
      title: 'Analyse critique et prise de décision',
      domain: 'Transversal',
      level: 'Intermédiaire',
      note: 'Bon recul sur les compromis, avec objectif de mieux appuyer les décisions par des métriques.',
      progress: 59,
    },
  ];
}
