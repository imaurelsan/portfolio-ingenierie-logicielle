import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Présentation générale</p>
        <h1>Qui je suis et comment je travaille</h1>
      </header>

      <div class="presentation-stack">
        <div class="panel presentation-hero">
          <img src="assets/images/photo-identite.jpg" alt="Portrait d'Aurel YAHOUEDEOU" />
          <div class="text-block">
            <p>
              J'ai d'abord validé un Master en Réseaux, Systèmes et Sécurité. Ensuite, j'ai choisi de me reconvertir vers
              le développement logiciel pour construire des produits plus créatifs, utiles et durables.
            </p>
            <p>
              Aujourd'hui, je combine ce socle avec une pratique concrète du web: front-end moderne, back-end,
              WordPress multisite et développement de plugins orientés usage.
            </p>
            <p>
              Mon objectif est clair: évoluer sur un rôle fullstack qui relie architecture, expérience utilisateur et
              qualité de livraison, sans prétendre tout maîtriser d'emblée.
            </p>
            <ul class="presentation-chips">
              <li>Développeur fullstack junior</li>
              <li>Profil hybride sécurité + produit</li>
              <li>Curieux IA, design et expériences interactives</li>
            </ul>
          </div>
        </div>

        <div class="panel text-block presentation-focus">
          <h2>Ce que je recherche</h2>
          <p>
            Je cherche une équipe où je peux contribuer rapidement sur des sujets concrets, tout en continuant à progresser
            sur l'architecture, l'industrialisation et la communication technique.
          </p>
          <p>
            Je préfère les environnements où l'on valorise la qualité de code, la collaboration et la capacité à transformer
            des contraintes métier en solutions lisibles.
          </p>
        </div>
      </div>

      <div class="two-columns">
        <article class="panel">
          <h2>Mes valeurs</h2>
          <ul class="icon-list">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h8V3H3v9Zm10 9h8v-9h-8v9ZM3 21h8v-7H3v7Zm10-9h8V3h-8v9Z"/></svg>
              <span>Clarté technique et communication simple</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 3.1 5 1.9V11c0 3.7-2.3 7.3-5 8.5-2.7-1.2-5-4.8-5-8.5V7l5-1.9Z"/></svg>
              <span>Responsabilité sur la sécurité et la fiabilité</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6a6 6 0 0 1 5.66 4H20l-3 3-3-3h1.58A4 4 0 1 0 12 16v2a6 6 0 1 1 0-12Z"/></svg>
              <span>Amélioration continue guidée par les preuves</span>
            </li>
          </ul>
        </article>

        <article class="panel">
          <h2>Mon projet</h2>
          <ul class="icon-list">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 8.2L4.4 7 12 3.8 19.6 7 12 10.2ZM4 10.8l8 4 8-4V16l-8 4-8-4v-5.2Z"/></svg>
              <span>Évoluer vers un rôle fullstack à forte composante architecture</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v2H5V4Zm0 4h14v2H5V8Zm0 4h9v2H5v-2Zm0 4h9v2H5v-2Zm12 0 4 3v-6l-4 3Z"/></svg>
              <span>Développer des solutions réutilisables et économiquement viables</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v6c0 4.6 3 8.9 8 10 5-1.1 8-5.4 8-10V7l-8-4Zm-1 5h2v2h-2V8Zm0 4h2v4h-2v-4Z"/></svg>
              <span>Construire une spécialisation IA appliquée au développement</span>
            </li>
          </ul>
        </article>

        <article class="panel">
          <h2>Mes principales qualités humaines</h2>
          <ul class="icon-list">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10.6 3.2 1.9-1 1.7-4.2-2.5V6h2v6.6Z"/></svg>
              <span>Discipline et régularité dans l’exécution</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v4l3-3 1.4 1.4L12 11.8 7.6 7.4 9 6l3 3V5h0Zm-7 8h14v2H5v-2Z"/></svg>
              <span>Capacité d’adaptation dans des contextes changeants</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.3 0-7 1.1-7 3.4V19h14v-2.6C15 14.1 10.3 13 8 13Zm8 0c-.3 0-.7 0-1.1.1 1.2.8 2.1 1.8 2.1 3.3V19h6v-2.6c0-2.3-4.7-3.4-7-3.4Z"/></svg>
              <span>Sens du collectif et de la communication constructive</span>
            </li>
          </ul>
        </article>

        <article class="panel">
          <h2>Mes centres d’intérêt</h2>
          <ul class="icon-list">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm0 9.7L5.1 9 12 5.3 18.9 9 12 12.7Z"/></svg>
              <span>R&D : IA appliquée, optimisation web, sécurité</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm3 8 2.5-3 2 2 1.5-2L17 14H9Z"/></svg>
              <span>Création : design visuel, UI/UX, photographie</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7v3.6L3.3 16A1 1 0 0 0 4.2 18H9v-7H6V9a6 6 0 1 1 12 0v2h-3v7h4.8a1 1 0 0 0 .9-1.5L19 12.6V9a7 7 0 0 0-7-7Z"/></svg>
              <span>Équilibre personnel : sport, lecture, apprentissage continu</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  `,
})
export class PresentationPage {}
