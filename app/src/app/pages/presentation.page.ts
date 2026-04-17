import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Présentation générale</p>
        <h1>Qui je suis et comment je travaille</h1>
      </header>

      <div class="text-block">
        <p>
          J'ai d'abord validé un Master en Réseaux, Systèmes et Sécurité. Ensuite, j'ai choisi de me reconvertir vers
          le développement logiciel pour construire des produits plus créatifs, utiles et durables.
        </p>
        <p>
          Aujourd'hui, je combine mon socle sécurité/réseau avec une pratique concrète du web : front-end moderne,
          back-end, API REST, WordPress multisite et conception de plugins orientés métier.
        </p>
        <p>
          J'accorde beaucoup d'importance à l'expérience utilisateur, à l'accessibilité et à la qualité d'exécution.
          Je travaille en collaboration avec les métiers, et je structure mes livrables pour qu'ils restent maintenables.
        </p>
      </div>

      <div class="two-columns">
        <article class="panel">
          <h2>Mes valeurs</h2>
          <ul>
            <li>Clarté technique et communication simple</li>
            <li>Responsabilité sur la sécurité et la fiabilité</li>
            <li>Amélioration continue guidée par les preuves</li>
          </ul>
        </article>

        <article class="panel">
          <h2>Mon projet</h2>
          <ul>
            <li>Évoluer vers un rôle fullstack à forte composante architecture</li>
            <li>Développer des solutions réutilisables et économiquement viables</li>
            <li>Construire une spécialisation IA appliquée au développement</li>
          </ul>
        </article>
      </div>
    </section>
  `,
})
export class PresentationPage {}
