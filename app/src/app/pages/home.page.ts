import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type FocusArea = {
  title: string;
  metric: string;
  description: string;
};

type GuidingPrinciple = {
  title: string;
  description: string;
  iconPath: string;
};

type StatHighlight = {
  value: string;
  title: string;
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
        </div>

        <div class="hero__text">
          <p class="hero__kicker">Ingénieur logiciel, avec un socle réseaux, systèmes et sécurité</p>
          <p class="hero__highlight">Profil hybride : design UI/UX, architecture, sécurité et développement fullstack.</p>
          <h1>Je conçois des solutions web claires, fiables et utiles.</h1>
          <p class="hero__lede">
            Je cadre proprement, je relie la technique à la valeur d'usage et je livre avec méthode.
          </p>
          <p class="hero__value">J’apporte un regard croisé entre design, architecture et sécurité pour construire des solutions fiables et faciles à comprendre.</p>

          <div class="hero__divider" aria-hidden="true"></div>

          <div class="hero__actions">
            <a routerLink="/realisations" class="btn btn--primary">Entrer par les réalisations</a>
            <a routerLink="/competences" class="btn btn--ghost">Comparer mes compétences</a>
          </div>
        </div>
      </div>

      <div class="hero__principles">
        <p class="hero__principles-title">Ce qui guide mes décisions techniques</p>
        <ul class="hero__signals">
          @for (signal of guidingPrinciples; track signal.title) {
            <li>
              <svg class="hero__signal-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path [attr.d]="signal.iconPath" />
              </svg>
              <strong>{{ signal.title }}</strong>
              <span>{{ signal.description }}</span>
            </li>
          }
        </ul>
      </div>

      <div class="hero__stats-wrap">
        <div class="hero__stats-intro">
          <p class="section-header__kicker">En un coup d'œil</p>
          <p class="intro-text intro-text--tight">Ce que vous trouverez dans ce portfolio pour évaluer mon niveau, ma méthode et mon potentiel.</p>
        </div>

        <div class="hero__stats">
          @for (stat of statHighlights; track stat.title) {
            <article class="stat-card stat-card--pulse">
              <h2>{{ stat.value }}</h2>
              <h3>{{ stat.title }}</h3>
              <p>{{ stat.description }}</p>
            </article>
          }
        </div>
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
  protected readonly guidingPrinciples: GuidingPrinciple[] = [
    {
      title: 'Design vers architecture',
      description: 'Je pars d\u2019abord de l\u2019usage avant de penser la structure.',
      iconPath: 'M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm13 2v2h-2v2h2v2h2v-2h2v-2h-2v-2z',
    },
    {
      title: 'Sécurité vers développement',
      description: 'Je préfère poser une base saine dès le départ plutôt que corriger trop tard.',
      iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
    },
    {
      title: 'Produit vers technique',
      description: 'Je prends mes décisions en gardant le besoin réel et la clarté en tête.',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z',
    },
  ];

  protected readonly statHighlights: StatHighlight[] = [
    {
      value: '5',
      title: 'Réalisations détaillées',
      description: 'Des preuves concrètes de ma méthode et de mes résultats.',
    },
    {
      value: '10',
      title: 'Compétences comparées',
      description: 'Un positionnement clair et honnête sur mes forces actuelles.',
    },
    {
      value: '1',
      title: 'Fil conducteur',
      description: 'Design vers architecture vers sécurité vers développement.',
    },
  ];

  protected readonly focusAreas: FocusArea[] = [
    {
      title: 'Concevoir des bases techniques sobres',
      metric: 'Architecture',
      description:
        'Je préfère des bases simples, réutilisables et adaptées au besoin réel.',
    },
    {
      title: 'Raccourcir les boucles de maintenance',
      metric: 'Méthode',
      description:
        'J’automatise ce qui fait perdre du temps : déploiement, nettoyage et tâches répétitives.',
    },
    {
      title: 'Relier technique, usage et responsabilité',
      metric: 'Impact',
      description:
        'Je cherche des solutions qui ont du sens à la fois pour l’équipe, pour l’usage et pour le temps passé.',
    },
  ];

  protected readonly entryPoints: EntryPoint[] = [
    {
      title: 'Comprendre mon profil et mes valeurs',
      description: 'Pour comprendre d’où je viens, comment je travaille et ce que je cherche aujourd’hui.',
      path: '/presentation',
      cta: 'Ouvrir la présentation',
    },
    {
      title: 'Comparer mes compétences entre elles',
      description: 'Pour voir rapidement mes points forts actuels et les domaines où je progresse encore.',
      path: '/competences',
      cta: 'Voir la cartographie',
    },
    {
      title: 'Entrer par les preuves projets',
      description: 'Pour juger mon niveau à partir de projets concrets, de leur contexte et de leurs résultats.',
      path: '/realisations',
      cta: 'Voir les réalisations',
    },
    {
      title: 'Lire mon évolution dans le temps',
      description: 'Pour suivre mon évolution sans réduire le site à une simple suite de dates.',
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
      impact: 'Un outil pensé pour alléger les sites et rendre le nettoyage des médias plus sûr.',
      path: '/realisations/project-360-media-auto-cleanup',
    },
    {
      tag: 'Sécurité et exploitation',
      title: '360tranquilité',
      impact: 'Un socle open source qui réunit sécurité, suivi et outils utiles pour des sites WordPress exposés.',
      path: '/realisations/project-360tranquilite',
    },
  ];
}
