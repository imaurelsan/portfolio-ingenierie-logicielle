import { Component } from '@angular/core';

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  details: string;
};

@Component({
  selector: 'app-parcours-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Parcours</p>
        <h1>Frise anti-chronologique</h1>
      </header>

      <ol class="timeline">
        @for (item of timeline; track item.title) {
          <li class="timeline__item">
            <p class="timeline__period">{{ item.period }}</p>
            <h2>{{ item.title }}</h2>
            <p class="timeline__place">{{ item.place }}</p>
            <p>{{ item.details }}</p>
          </li>
        }
      </ol>
    </section>
  `,
})
export class ParcoursPage {
  // J'ai structuré cette frise pour respecter le format anti-chronologique demandé dans ta grille.
  protected readonly timeline: TimelineItem[] = [
    {
      period: '2024 - 2026',
      title: 'Mastère Expert en Ingénierie du Logiciel',
      place: 'ISCOD - Paris',
      details: 'Approfondissement en architecture logicielle, pilotage projet, industrialisation et qualité.',
    },
    {
      period: '2023 - 2026',
      title: 'Alternance Développeur Web Fullstack',
      place: 'ASKI-DA Group',
      details: 'Conception de plugins WordPress, exploitation multisite, optimisation technique et maintenance.',
    },
    {
      period: 'Master validé',
      title: 'Master Réseaux, Systèmes et Sécurité',
      place: 'SUP DE CO - Dakar',
      details: 'Socle solide en sécurité et infrastructures, réinvesti aujourd’hui dans l’ingénierie logicielle.',
    },
  ];
}
