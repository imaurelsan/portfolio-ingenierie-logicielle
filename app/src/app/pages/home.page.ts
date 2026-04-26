import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type AngleLine = {
  keyword: string;
  sentence: string;
};

type FeaturedProject = {
  title: string;
  context: string;
  screenshot: string;
  path: string;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="home-hero" aria-labelledby="home-hero-title">
      <div class="home-hero__inner">
        <div class="home-hero__text">
          <p id="home-hero-title" class="home-hero__name"><span class="home-hero__name-first">Aurel</span> <span class="home-hero__name-last">YAHOUEDEOU</span></p>
          <h1 class="home-hero__title">Développeur Fullstack</h1>
          <p class="home-hero__junior" aria-label="Junior">Junior</p>
        </div>

        <div class="home-hero__actions">
          <a routerLink="/presentation" class="btn btn--primary">En savoir plus</a>
        </div>

        <div class="home-hero__scroll-hint" aria-hidden="true">
          <svg viewBox="0 -960 960 960" focusable="false">
            <path d="M80-80v-60h81q-59-72-90-159T40-480q0-94 31-181t90-159H80v-60h200v200h-60v-116q-58 66-89 147t-31 169q0 88 31 169t89 147v-116h60v200H80Zm578-47q-23 8-46.5 7.5T566-131L304-253l18-40q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l148 407-100 7 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Zm-90-265-54-151q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150-76 28Zm113-41-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 112-75 28Zm8 88Z" />
          </svg>
        </div>
      </div>
    </section>

    <section class="page-section home-angles" aria-labelledby="home-angles-title">
      <h2 id="home-angles-title" class="sr-only">Ma façon d'intervenir</h2>
      <div class="home-angles__list">
        @for (line of angleLines; track line.keyword) {
          <article class="home-angle-line">
            <p class="home-angle-line__keyword">{{ line.keyword }}</p>
            <p class="home-angle-line__sentence">{{ line.sentence }}</p>
          </article>
        }
      </div>
    </section>

    <section class="page-section home-projects" aria-labelledby="home-projects-title">
      <header class="section-header section-header--compact">
        <h2 id="home-projects-title" class="section-title">Projets récents</h2>
        <p class="intro-text intro-text--tight">Chaque projet illustre un problème réel et la décision qui l'a résolu.</p>
      </header>

      <article class="home-project home-project--lead">
        <img [src]="featuredProject.screenshot" [alt]="featuredProject.title" />
        <div class="home-project__content">
          <h3><a [routerLink]="featuredProject.path">{{ featuredProject.title }}</a></h3>
          <p>{{ featuredProject.context }}</p>
          <a class="home-project__cta" [routerLink]="featuredProject.path">Voir le projet</a>
        </div>
      </article>

      <div class="home-projects__grid">
        @for (project of compactProjects; track project.path) {
          <article class="home-project home-project--compact">
            <img [src]="project.screenshot" [alt]="project.title" />
            <div class="home-project__content">
              <h3><a [routerLink]="project.path">{{ project.title }}</a></h3>
              <p>{{ project.context }}</p>
              <a class="home-project__cta" [routerLink]="project.path">Voir le projet</a>
            </div>
          </article>
        }
      </div>

      <div class="home-projects__all-link">
        <a routerLink="/realisations">Voir les 5 réalisations -></a>
      </div>
    </section>

    <section class="home-quote" aria-label="Positionnement">
      <div class="home-quote__inner">
        <p class="home-quote__text">
          Je ne cherche pas à impressionner par la complexité.<br />
          Je cherche à convaincre par la clarté.
        </p>
        <p class="home-quote__attribution">Ma philosophie de conception</p>
      </div>
    </section>

    <section class="page-section home-contact-invite" aria-labelledby="home-contact-title">
      <h2 id="home-contact-title" class="sr-only">Invitation à échanger</h2>
      <p>Une question sur un projet ou sur mon profil ?</p>
      <div class="home-contact-invite__actions">
        <a routerLink="/contact" class="btn btn--ghost">Entrer en relation</a>
        <a routerLink="/parcours" class="btn btn--ghost">Voir mon parcours</a>
      </div>
    </section>
  `,
})
export class HomePage {
  protected readonly angleLines: AngleLine[] = [
    {
      keyword: 'ARCHITECTURE',
      sentence: 'Je construis des bases simples sur lesquelles on peut évoluer.',
    },
    {
      keyword: 'MÉTHODE',
      sentence: 'J\'automatise ce qui fait perdre du temps, pas ce qui crée de la valeur.',
    },
    {
      keyword: 'POSTURE',
      sentence: 'Je relie le technique, l\'usage et la responsabilité.',
    },
  ];

  protected readonly featuredProject: FeaturedProject = {
    title: '360-content-bridge',
    context: 'Plugin WordPress - réduction du temps de transfert estimée à -60%.',
    screenshot: 'assets/images/screenshots-realisations/360-content-bridge.png',
    path: '/realisations/project-360-content-bridge',
  };

  protected readonly compactProjects: FeaturedProject[] = [
    {
      title: '360-media-auto-cleanup',
      context: 'Plugin WordPress - gouvernance médias et réduction du bruit opérationnel.',
      screenshot: 'assets/images/screenshots-realisations/360-media-auto-cleanup.png',
      path: '/realisations/project-360-media-auto-cleanup',
    },
    {
      title: '360tranquilité',
      context: 'Suite WordPress - sécurité applicative et exploitation unifiée.',
      screenshot: 'assets/images/screenshots-realisations/360-tranquillite.png',
      path: '/realisations/project-360tranquilite',
    },
  ];
}
