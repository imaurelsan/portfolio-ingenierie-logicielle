import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero__identity">
        <img class="hero__photo" src="assets/images/photo-identite.jpg" alt="Photo d'identité d'Aurel YAHOUEDEOU" />
        <div class="hero__text">
          <p class="hero__kicker">Portfolio d'ingénierie logicielle • Déploiement validé</p>
          <h1>Aurel YAHOUEDEOU</h1>
          <p>
            Développeur fullstack junior, orienté architecture web mutualisée, performance et maintenabilité.
          </p>
          <p>
            Ma problématique de soutenance : comment concevoir une architecture web mutualisée et évolutive,
            capable de réduire les coûts tout en renforçant la qualité et la vitesse de maintenance ?
          </p>
          <div class="hero__actions">
            <a routerLink="/realisations" class="btn btn--primary">Voir mes réalisations</a>
            <a routerLink="/competences" class="btn btn--ghost">Voir mes compétences</a>
          </div>
        </div>
      </div>

      <div class="hero__stats">
        <article class="stat-card">
          <h2>5</h2>
          <p>réalisations clés</p>
        </article>
        <article class="stat-card">
          <h2>10</h2>
          <p>compétences détaillées</p>
        </article>
        <article class="stat-card">
          <h2>+5 ans</h2>
          <p>d'expérience CMS</p>
        </article>
      </div>
    </section>
  `,
})
export class HomePage {}
