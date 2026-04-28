import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-presentation-page',
  imports: [RouterLink],
  template: `
    <section class="presentation-banner" aria-labelledby="presentation-banner-title">
      <div class="presentation-banner__inner">
        <img class="presentation-banner__photo" src="assets/images/photo-identite.jpg" alt="Aurel YAHOUEDEOU" />
        <div class="presentation-banner__content">
          <p class="section-header__kicker">QUI SUIS-JE ?</p>
          <h1 id="presentation-banner-title">Mon positionnement professionnel</h1>
        </div>
      </div>
    </section>

    <section class="page-section presentation-intro-editorial" aria-labelledby="presentation-intro-title">
      <header class="section-header section-header--compact">
        <p id="presentation-intro-title" class="section-header__kicker">EN QUELQUES MOTS</p>
      </header>
      <div class="presentation-intro-editorial__copy">
        <p>
          J’ai construit mon parcours entre création visuelle, ingénierie réseaux/systèmes et développement d'applications web.
          Cette trajectoire me permet aujourd’hui de relier plusieurs exigences sans les opposer : la clarté pour
          l’utilisateur, la robustesse technique, et la sécurité dans la durée.
        </p>
        <p>
          Je recherche un environnement où l’on conçoit des produits utiles, lisibles et maintenables, avec une vraie
          culture d’équipe. Mon objectif est de progresser sur un poste de développeur fullstack junior en continuant à
          apporter cette lecture transversale entre design, architecture et fiabilité.
        </p>
      </div>
    </section>

    <section class="page-section presentation-pillars" aria-labelledby="presentation-pillars-title">
      <h2 id="presentation-pillars-title" class="sr-only">Piliers de présentation</h2>

      <article class="presentation-pillar">
        <p class="section-header__kicker">MES VALEURS</p>
        <h2>Ce qui guide mes décisions au quotidien</h2>
        <p>
          Je privilégie la <strong>clarté</strong> : expliquer simplement un choix technique, rendre les impacts compréhensibles et
          garder une communication honnête avec l’équipe comme avec les métiers.
        </p>
        <p>
          Je défends aussi la <strong>responsabilité technique</strong> : anticiper les risques, éviter les solutions fragiles et
          construire des bases qui restent maintenables quand le produit évolue.
        </p>
        <p>
          Enfin, je crois à l’<strong>amélioration continue</strong> guidée par des preuves concrètes : tester, mesurer, ajuster, puis
          documenter pour capitaliser au lieu de repartir de zéro.
        </p>
      </article>

      <article class="presentation-pillar">
        <p class="section-header__kicker">MON PROJET</p>
        <h2>Là où je veux aller, et pourquoi</h2>
        <p>
          Je vise un titre fullstack, où je peux contribuer à la fois au front et au back, avec une attention
          particulière à l’architecture et à la qualité des livrables.
        </p>
        <p>
          À moyen terme, je veux développer des solutions réutilisables et économiquement viables, puis approfondir une
          spécialisation IA appliquée à des usages métier concrets.
        </p>
      </article>

      <article class="presentation-pillar">
        <p class="section-header__kicker">MES QUALITÉS HUMAINES</p>
        <h2>Ce que je mobilise dans une équipe</h2>
        <ul class="presentation-plain-list">
          <li><strong>Discipline</strong> et régularité dans l’exécution</li>
          <li><strong>Capacité d’adaptation</strong> dans des contextes changeants</li>
          <li><strong>Sens du collectif</strong> et de la communication constructive</li>
        </ul>
      </article>

      <article class="presentation-pillar">
        <p class="section-header__kicker">MES CENTRES D'INTÉRÊT</p>
        <h2>Ce qui m'anime en dehors du code</h2>
        <ul class="presentation-plain-list">
          <li><strong>Recherche et Développement</strong> : veille technologique, IA appliquée, optimisation web, cyber-sécurité.</li>
          <li><strong>Création</strong> : design graphique, UI/UX, dessin et photographie.</li>
          <li><strong>Équilibre personnel</strong> : sport, lecture, méditation, apprentissage continu.</li>
        </ul>
      </article>
    </section>

    <section class="page-section presentation-transition" aria-labelledby="presentation-transition-title">
      <h2 id="presentation-transition-title" class="sr-only">Transition vers le portfolio</h2>
      <p class="presentation-transition__text">
        Voilà comment je me définis aujourd'hui. <br> 
        La suite du portfolio montre comment cela se traduit concrètement dans
        mes choix techniques et mes projets.
      </p>
      <div class="presentation-transition__actions">
        <a routerLink="/competences" class="btn btn--ghost">Voir mes compétences</a>
        <a routerLink="/realisations" class="btn btn--ghost">Voir mes réalisations</a>
      </div>
    </section>
  `,
})
export class PresentationPage {}
