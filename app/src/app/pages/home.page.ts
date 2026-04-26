import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

type AngleLine = {
  keyword: string;
  iconPath: string;
  sentenceOne: string;
  sentenceTwo: string;
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

    <section class="page-section home-angles" aria-labelledby="home-angles-title" [style.--home-angles-progress]="anglesProgress">
      <h2 id="home-angles-title" class="sr-only">Ma façon d'intervenir</h2>
      <div class="home-angles__list">
        @for (line of angleLines; track line.keyword) {
          <article class="home-angle-line">
            <div class="home-angle-line__icon" aria-hidden="true">
              <svg viewBox="0 -960 960 960" focusable="false">
                <path [attr.d]="line.iconPath" />
              </svg>
            </div>
            <p class="home-angle-line__keyword">{{ line.keyword }}</p>
            <p class="home-angle-line__sentence">{{ line.sentenceOne }}</p>
            <p class="home-angle-line__sentence">{{ line.sentenceTwo }}</p>
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
        <a routerLink="/realisations" class="btn btn--primary">Voir toutes les réalisations</a>
      </div>
    </section>

    <section class="home-quote" aria-label="Positionnement">
      <div class="home-quote__inner">
        <p class="home-quote__text">
          <span class="home-quote__line">Je ne cherche pas à impressionner par la complexité.</span>
          <span class="home-quote__line home-quote__line--typed">Je cherche à convaincre par la clarté.</span>
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
export class HomePage implements AfterViewInit {
  protected anglesProgress = 0;

  ngAfterViewInit(): void {
    this.updateAnglesProgress();
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateAnglesProgress();
  }

  private updateAnglesProgress(): void {
    if (typeof window === 'undefined') {
      this.anglesProgress = 0;
      return;
    }

    const revealDistance = Math.max(window.innerHeight * 0.3, 220);
    const progress = window.scrollY / revealDistance;
    this.anglesProgress = Math.min(Math.max(progress, 0), 1);
  }

  protected readonly angleLines: AngleLine[] = [
    {
      keyword: 'ARCHITECTURE',
      iconPath: 'M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm400-400h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Z',
      sentenceOne: 'Je construis des bases simples, fiables et évolutives.',
      sentenceTwo: 'J\'aime structurer et planifier, pour permettre aux projets d\'avancer sereinement.',
    },
    {
      keyword: 'MÉTHODE',
      iconPath: 'M296-270q-42 35-87.5 32T129-269q-34-28-46.5-73.5T99-436l75-124q-25-22-39.5-53T120-680q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47q-9 0-18-1t-17-3l-77 130q-11 18-7 35.5t17 28.5q13 11 31 12.5t35-12.5l420-361q42-35 88-31.5t80 31.5q34 28 46 73.5T861-524l-75 124q25 22 39.5 53t14.5 67q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47q9 0 17.5 1t16.5 3l78-130q11-18 7-35.5T782-630q-13-11-31-12.5T716-630L296-270Z',
      sentenceOne: 'J\'automatise ce qui est récurrent et qui fait perdre du temps,',
      sentenceTwo: 'tout en privilégiant les solutions fiables et la cohérence.',
    },
    {
      keyword: 'POSTURE',
      iconPath: 'M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z',
      sentenceOne: 'Je travaille avec intégrité, je soutiens mon équipe,',
      sentenceTwo: 'et j\'avance dans un cadre clair et responsable.',
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
