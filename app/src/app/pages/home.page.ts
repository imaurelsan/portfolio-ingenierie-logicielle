import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type FocusArea = {
  title: string;
  metric: string;
  description: string;
};

type EntryPoint = {
  title: string;
  description: string;
  path: string;
  cta: string;
};

type Proof = {
  tag: string;
  title: string;
  impact: string;
  path: string;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero__identity hero__identity--enhanced">
        <div class="hero__portrait">
          <img class="hero__photo" src="assets/images/photo-identite.jpg" alt="Photo d'identité d'Aurel YAHOUEDEOU" />
          <p class="hero__portrait-note">
            Profil hybride: designer UI/UX, artiste visuel, lead technique orienté produit et développeur web fullstack junior.
          </p>
        </div>

        <div class="hero__text">
          <p class="hero__kicker">Ingénieur réseaux, systèmes et sécurité · en reconversion vers l'ingénierie logicielle</p>
          <h1>Je conçois des solutions web claires, fiables et utiles.</h1>
          <p class="hero__lede">
            Ce portfolio montre ma façon de travailler: cadrer proprement, livrer avec méthode et relier la technique à
            la valeur d'usage.
          </p>

          <div class="hero__actions">
            <a routerLink="/realisations" class="btn btn--primary">Entrer par les réalisations</a>
            <a routerLink="/competences" class="btn btn--ghost">Comparer mes compétences</a>
          </div>

          <ul class="hero__signals">
            @for (signal of signals; track signal) {
              <li>{{ signal }}</li>
            }
          </ul>
        </div>
      </div>

      <div class="hero__stats">
        <article class="stat-card stat-card--pulse">
          <h2>5</h2>
          <p>réalisations détaillées et reliées aux compétences</p>
        </article>
        <article class="stat-card stat-card--pulse">
          <h2>10</h2>
          <p>compétences comparées pour rendre le niveau lisible</p>
        </article>
        <article class="stat-card stat-card--pulse">
          <h2>1</h2>
          <p>cap clair: contribuer vite aujourd'hui, progresser vite demain</p>
        </article>
      </div>
    </section>

    <section class="page-section page-section--home">
      <header class="section-header section-header--compact">
        <p class="section-header__kicker">Angle de lecture</p>
        <h2 class="section-title">Trois axes qui définissent ma manière d'intervenir</h2>
      </header>

      <div class="focus-grid">
        @for (area of focusAreas; track area.title) {
          <article class="card focus-card">
            <p class="chip">{{ area.metric }}</p>
            <h3>{{ area.title }}</h3>
            <p>{{ area.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="page-section page-section--home">
      <header class="section-header section-header--compact">
        <p class="section-header__kicker">Entrées rapides</p>
        <h2 class="section-title">Explorer le portfolio par intention, pas seulement par rubrique</h2>
      </header>

      <div class="entry-grid">
        @for (entry of entryPoints; track entry.path) {
          <a class="entry-card" [routerLink]="entry.path">
            <p class="entry-card__eyebrow">Navigation guidée</p>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.description }}</p>
            <span class="entry-card__cta">{{ entry.cta }}</span>
          </a>
        }
      </div>
    </section>

    <section class="page-section page-section--home">
      <div class="proof-board">
        <div class="proof-board__intro">
          <p class="section-header__kicker">Preuves rapides</p>
          <h2 class="section-title">Quelques exemples concrets avant d'entrer dans le détail</h2>
          <p class="intro-text intro-text--tight">
            Chaque preuve renvoie ensuite à une réalisation complète et aux compétences associées. L'objectif est de
            montrer la cohérence entre contexte, action, résultat et recul critique.
          </p>
        </div>

        <div class="proof-list">
          @for (proof of proofs; track proof.title) {
            <a class="proof-item" [routerLink]="proof.path">
              <p class="proof-item__tag">{{ proof.tag }}</p>
              <h3>{{ proof.title }}</h3>
              <p>{{ proof.impact }}</p>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class HomePage {
  protected readonly signals = [
    'Architecture web mutualisée',
    'Industrialisation pragmatique',
    'Décision technique expliquée',
  ];

  protected readonly focusAreas: FocusArea[] = [
    {
      title: 'Concevoir des bases techniques sobres',
      metric: 'Architecture',
      description:
        'Je privilégie des structures réutilisables, des dépendances maîtrisées et des choix proportionnés au contexte métier.',
    },
    {
      title: 'Raccourcir les boucles de maintenance',
      metric: 'Industrialisation',
      description:
        'J’automatise ce qui ralentit réellement l’équipe: déploiement, nettoyage, qualité d’exécution et tâches répétitives.',
    },
    {
      title: 'Relier technique, usage et responsabilité',
      metric: 'Impact',
      description:
        'Je cherche des solutions que l’on peut défendre à la fois sur le plan technique, économique et humain.',
    },
  ];

  protected readonly entryPoints: EntryPoint[] = [
    {
      title: 'Comprendre mon profil et mes valeurs',
      description: 'Pour situer mon projet professionnel, mes repères de travail et mon positionnement d’ingénierie.',
      path: '/presentation',
      cta: 'Ouvrir la présentation',
    },
    {
      title: 'Comparer mes compétences entre elles',
      description: 'Pour voir rapidement les compétences où je suis le plus à l’aise aujourd’hui, celles que je consolide encore et leur articulation.',
      path: '/competences',
      cta: 'Voir la cartographie',
    },
    {
      title: 'Entrer par les preuves projets',
      description: 'Pour évaluer mon niveau à travers des réalisations concrètes, leurs contraintes et les résultats obtenus.',
      path: '/realisations',
      cta: 'Voir les réalisations',
    },
    {
      title: 'Lire mon évolution dans le temps',
      description: 'Pour suivre la logique de mon parcours sans réduire le site à une simple chronologie de CV.',
      path: '/parcours',
      cta: 'Voir le parcours',
    },
  ];

  protected readonly proofs: Proof[] = [
    {
      tag: 'Maintenance à l’échelle',
      title: '360-content-bridge',
      impact: 'Un plugin pensé pour accélérer l’import, l’export et la maintenance de contenus WordPress à grande échelle.',
      path: '/realisations/project-360-content-bridge',
    },
    {
      tag: 'Réduction de coûts',
      title: '360-media-auto-cleanup',
      impact: 'Une approche outillée pour diminuer le poids des instances et fiabiliser le nettoyage des médias orphelins.',
      path: '/realisations/project-360-media-auto-cleanup',
    },
    {
      tag: 'Sécurité et exploitation',
      title: '360tranquilité',
      impact: 'Un socle open source combinant sécurité, surveillance et opérations pour des environnements WordPress exposés.',
      path: '/realisations/project-360tranquilite',
    },
  ];
}
