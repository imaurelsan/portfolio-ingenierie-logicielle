import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Présentation générale</p>
        <h1>Qui je suis et comment je travaille</h1>
      </header>

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

        <article class="panel">
          <h2>Mes principales qualités humaines</h2>
          <ul>
            <li>Discipline et régularité dans l’exécution</li>
            <li>Capacité d’adaptation dans des contextes changeants</li>
            <li>Sens du collectif et de la communication constructive</li>
          </ul>
        </article>

        <article class="panel">
          <h2>Mes centres d’intérêt</h2>
          <ul>
            <li>R&D : IA appliquée, optimisation web, sécurité</li>
            <li>Création : design visuel, UI/UX, photographie</li>
            <li>Équilibre personnel : sport, lecture, apprentissage continu</li>
          </ul>
        </article>
      </div>
    </section>
  `,
})
export class PresentationPage {}
