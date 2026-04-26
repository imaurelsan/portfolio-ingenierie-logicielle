import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Présentation générale</p>
        <h1>Mon positionnement professionnel</h1>
      </header>

      <div class="presentation-stack">
        <div class="panel text-block presentation-intro">
          <p>
            J’ai construit mon parcours entre création visuelle, ingénierie réseaux/systèmes et développement logiciel.
            Cette trajectoire me permet aujourd’hui de relier plusieurs exigences sans les opposer : la clarté pour
            l’utilisateur, la robustesse technique, et la sécurité dans la durée.
          </p>
          <p>
            Je recherche un environnement où l’on conçoit des produits utiles, lisibles et maintenables, avec une vraie
            culture d’équipe. Mon objectif est de progresser sur un poste de développeur fullstack junior en continuant à
            apporter cette lecture transversale entre design, architecture et fiabilité.
          </p>
        </div>
      </div>

      <div class="two-columns">
        <article class="panel text-block">
          <h2>Mes valeurs</h2>
          <p>
            Je privilégie la clarté : expliquer simplement un choix technique, rendre les impacts compréhensibles et
            garder une communication honnête avec l’équipe comme avec les métiers.
          </p>
          <p>
            Je défends aussi la responsabilité technique : anticiper les risques, éviter les solutions fragiles et
            construire des bases qui restent maintenables quand le produit évolue.
          </p>
          <p>
            Enfin, je crois à l’amélioration continue guidée par des preuves concrètes : tester, mesurer, ajuster, puis
            documenter pour capitaliser au lieu de repartir de zéro.
          </p>
        </article>

        <article class="panel text-block">
          <h2>Mon projet</h2>
          <p>
            Je vise un rôle fullstack junior où je peux contribuer à la fois au front et au back, avec une attention
            particulière à l’architecture et à la qualité des livrables.
          </p>
          <p>
            À moyen terme, je veux développer des solutions réutilisables et économiquement viables, puis approfondir une
            spécialisation IA appliquée à des usages métier concrets.
          </p>
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
