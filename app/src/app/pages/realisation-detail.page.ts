import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type TechBadge = {
  name: string;
  iconUrl: string;
};

type LinkedSkill = {
  title: string;
  path: string;
};

type RealisationDetail = {
  slug: string;
  order: string;
  title: string;
  screenshot?: string;
  presentation: string;
  objectivesContextRisks: string[];
  steps: string[];
  stakeholders: string[];
  resultsForMe: string[];
  resultsForCompany: string[];
  futureImmediate: string;
  futureDistance: string;
  futureToday: string;
  criticalView: string;
  repository: string;
  techStack: TechBadge[];
  linkedSkills: LinkedSkill[];
};

const REALISATIONS: RealisationDetail[] = [
  {
    slug: 'project-360-content-bridge',
    order: 'Réalisation détaillée 1/5',
    title: '360-content-bridge',
    screenshot: 'assets/images/screenshots-realisations/360-content-bridge.png',
    presentation:
      'Le projet consiste à faciliter les échanges de contenus entre différents sites WordPress, notamment dans un contexte multisite où certaines données doivent être partagées ou dupliquées.',
    objectivesContextRisks: [
      'Objectif principal : éviter les copier-coller manuels et sécuriser les transferts.',
      'Contexte : besoins de maintenance multi-sites avec des volumes et structures hétérogènes.',
      'Enjeu : rendre des opérations régulières plus fiables sans compliquer le travail au quotidien.',
      'Risque : perte de cohérence de données en cas de mapping incomplet ou de cas limites non couverts.',
    ],
    steps: [
      'Définition du besoin et des cas d’usage prioritaires.',
      'Structuration des données à exporter/importer.',
      'Développement des fonctionnalités principales.',
      'Tests et ajustements sur scénarios réels.',
    ],
    stakeholders: [
      'Développeur principal : moi, sur la conception et l’implémentation.',
      'Parties prenantes internes : validation des usages attendus.',
      'Utilisateurs back-office : exploitation des fonctions d’import/export.',
    ],
    resultsForMe: [
      'J’ai progressé sur la façon de traiter des données sans casser les cas existants.',
      'J’ai aussi mieux compris comment concevoir un outil utile pour les personnes qui l’utilisent vraiment.',
    ],
    resultsForCompany: [
      'Moins de manipulations manuelles et donc moins de risques d’erreur.',
      'Gain de temps sur les opérations de contenu répétitives.',
    ],
    futureImmediate: 'Améliorer l’interface utilisateur et renforcer les validations sur cas limites.',
    futureDistance: 'Étendre les options de mapping pour des structures de données plus complexes.',
    futureToday: 'Le plugin est fonctionnel et constitue une base solide, mais encore perfectible sur la robustesse.',
    criticalView:
      'Je suis satisfait de l’utilité du projet. Avec le recul, j’aurais dû prévoir plus tôt certains cas d’erreur et mieux documenter l’outil dès la première version.',
    repository: 'https://github.com/imaurelsan/360-content-bridge',
    techStack: [
      { name: 'PHP', iconUrl: 'https://cdn.simpleicons.org/php/ffffff' },
      { name: 'WordPress', iconUrl: 'https://cdn.simpleicons.org/wordpress/ffffff' },
      { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/ffffff' },
      { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/ffffff' },
    ],
    linkedSkills: [
      { title: 'Architecture web mutualisée (WordPress multisite)', path: '/competences/architecture-web-mutualisee' },
      { title: 'Développement de plugins WordPress', path: '/competences/developpement-plugins-wordpress' },
      { title: 'Intégrations API REST', path: '/competences/integrations-api-rest' },
    ],
  },
  {
    slug: 'project-360-media-auto-cleanup',
    order: 'Réalisation détaillée 2/5',
    title: '360-media-auto-cleanup',
    screenshot: 'assets/images/screenshots-realisations/360-media-auto-cleanup.png',
    presentation:
      'Le projet vise à identifier et nettoyer les médias orphelins sur des sites WordPress pour réduire la dette de stockage et améliorer l’hygiène opérationnelle.',
    objectivesContextRisks: [
      'Objectif principal : réduire le volume de fichiers inutilisés.',
      'Contexte : médiathèques encombrées sur plusieurs projets et coûts de stockage croissants.',
      'Enjeu : automatiser le nettoyage sans prendre de risque inutile.',
      'Risque : faux positifs et suppression accidentelle de médias encore utiles.',
    ],
    steps: [
      'Analyse du besoin et des scénarios de faux positifs.',
      'Croisement des données entre médias et usages réels.',
      'Développement du module de scan et suppression contrôlée.',
      'Validation progressive avec garde-fous.',
    ],
    stakeholders: [
      'Développeur principal : moi, sur la logique de détection.',
      'Utilisateurs de contenu : validation de la pertinence du nettoyage.',
      'Exploitation : suivi des effets en production.',
    ],
    resultsForMe: [
      'J’ai approfondi ma façon de sécuriser un automatisme.',
      'J’ai mieux compris l’équilibre entre vitesse, efficacité et prudence.',
    ],
    resultsForCompany: [
      'Réduction du volume de fichiers inutiles.',
      'Médiathèque plus saine et maintenance simplifiée.',
    ],
    futureImmediate: 'Durcir encore les garde-fous contre les faux positifs.',
    futureDistance: 'Ajouter des rapports plus détaillés et exploitables par les équipes.',
    futureToday: 'Le plugin est utile en exploitation et déjà générateur de gains concrets.',
    criticalView:
      'Le projet apporte de la valeur rapidement, mais tout repose sur la qualité des règles mises en place. C’est donc un point que je continue d’améliorer en priorité.',
    repository: 'https://github.com/imaurelsan/360-media-auto-cleanup',
    techStack: [
      { name: 'PHP', iconUrl: 'https://cdn.simpleicons.org/php/ffffff' },
      { name: 'WordPress', iconUrl: 'https://cdn.simpleicons.org/wordpress/ffffff' },
      { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/ffffff' },
    ],
    linkedSkills: [
      { title: 'Architecture web mutualisée (WordPress multisite)', path: '/competences/architecture-web-mutualisee' },
      { title: 'Performance web et optimisation front', path: '/competences/performance-front-optimisation' },
      { title: 'Automatisation et amélioration continue', path: '/competences/automatisation-amelioration-continue' },
    ],
  },
  {
    slug: 'project-360tranquilite',
    order: 'Réalisation détaillée 3/5',
    screenshot: 'assets/images/screenshots-realisations/360-tranquillite.png',
    title: '360tranquilité',
    presentation:
      '360tranquilité est un plugin WordPress qui centralise des fonctions de sécurité, monitoring et exploitation pour éviter la dispersion des outils.',
    objectivesContextRisks: [
      'Objectif principal : centraliser des besoins opérationnels récurrents dans un socle unique.',
      'Contexte : trop d’extensions différentes et pas assez de vision d’ensemble.',
      'Enjeu : renforcer la stabilité et la capacité de diagnostic des sites.',
      'Risque : complexité croissante si la modularité et la qualité ne sont pas strictement maintenues.',
    ],
    steps: [
      'Conception d’une architecture modulaire.',
      'Intégration progressive des fonctionnalités de sécurité et monitoring.',
      'Structuration des options de configuration.',
      'Tests de non-régression et itérations.',
    ],
    stakeholders: [
      'Développeur principal : moi, sur conception et implémentation.',
      'Utilisateurs techniques : exploitation quotidienne des modules.',
      'Parties prenantes métier : priorisation des évolutions.',
    ],
    resultsForMe: [
      'Projet le plus représentatif de ma montée en compétences logicielle.',
      'Capitalisation forte entre mon socle sécurité/réseau et mes acquis en ingénierie logicielle.',
    ],
    resultsForCompany: [
      'Meilleure centralisation des opérations de surveillance et de sécurité.',
      'Moins de dépendance à un ensemble d’extensions externes dispersées.',
    ],
    futureImmediate: 'Poursuivre l’amélioration de l’ergonomie et de la cohérence inter-modules.',
    futureDistance: 'Renforcer les scénarios de supervision, alerting et reporting.',
    futureToday: 'Le plugin est déjà exploitable et continue d’évoluer de manière incrémentale.',
    criticalView:
      'C’est mon projet le plus important aujourd’hui. Il reste ambitieux, et la vraie difficulté est de garder la même qualité à mesure qu’il grandit.',
    repository: 'https://github.com/imaurelsan/360tranquilite',
    techStack: [
      { name: 'PHP', iconUrl: 'https://cdn.simpleicons.org/php/ffffff' },
      { name: 'WordPress', iconUrl: 'https://cdn.simpleicons.org/wordpress/ffffff' },
      { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/ffffff' },
      { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/ffffff' },
    ],
    linkedSkills: [
      { title: 'Architecture web mutualisée (WordPress multisite)', path: '/competences/architecture-web-mutualisee' },
      { title: 'Sécurité applicative', path: '/competences/securite-applicative' },
      { title: 'Automatisation et amélioration continue', path: '/competences/automatisation-amelioration-continue' },
    ],
  },
  {
    slug: 'project-crewai-voyage',
    order: 'Réalisation détaillée 4/5',
    screenshot: 'assets/images/screenshots-realisations/travel-planner.png',
    title: 'crewai-projet-agent-voyage',
    presentation:
      'Ce projet académique explore la création d’un agent capable de proposer des itinéraires de voyage cohérents à partir d’entrées variables.',
    objectivesContextRisks: [
      'Objectif principal : produire des recommandations exploitables et compréhensibles.',
      'Contexte : apprentissage de nouvelles approches IA appliquées à un cas concret.',
      'Enjeu : transformer une idée expérimentale en résultat vraiment utile pour l’utilisateur.',
      'Risque : incohérences de sortie si le cadrage et les garde-fous sont insuffisants.',
    ],
    steps: [
      'Définition des cas d’usage et des entrées variables.',
      'Conception de la logique de génération et d’organisation.',
      'Tests de cohérence des sorties.',
      'Ajustements orientés lisibilité et pertinence.',
    ],
    stakeholders: [
      'Développeur principal : moi.',
      'Encadrement académique : cadrage et retour méthodologique.',
      'Utilisateurs test : appréciation de la pertinence des propositions.',
    ],
    resultsForMe: [
      'Découverte de nouvelles méthodes liées à l’IA et à l’automatisation.',
      'Renforcement de ma capacité à cadrer un prototype exploratoire.',
    ],
    resultsForCompany: [
      'Projet à dominante pédagogique, sans impact opérationnel direct entreprise.',
      'Apports indirects sur l’acculturation IA et la capacité de prototypage.',
    ],
    futureImmediate: 'Améliorer la constance des recommandations sur des cas limites.',
    futureDistance: 'Explorer des scénarios plus riches et une meilleure personnalisation.',
    futureToday: 'Prototype fonctionnel et exploratoire, utile pour comprendre le potentiel de la technologie.',
    criticalView:
      'Le projet reste volontairement expérimental. Sa valeur vient surtout de la démarche et de ce qu’il m’a appris, plus que d’un produit déjà mature.',
    repository: 'https://github.com/imaurelsan/crewai-projet-agent-voyage',
    techStack: [
      { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/ffffff' },
      { name: 'CrewAI', iconUrl: '' },
      { name: 'OpenAI', iconUrl: 'https://cdn.simpleicons.org/openai/ffffff' },
    ],
    linkedSkills: [
      { title: 'Analyse critique et prise de décision', path: '/competences/analyse-critique-decision-technique' },
      { title: 'Communication technique', path: '/competences/communication-technique' },
      { title: 'UX/UI orientée usage', path: '/competences/ux-ui-orientee-usage' },
    ],
  },
  {
    slug: 'project-v0-vastrion-mobile-prototype',
    order: 'Réalisation détaillée 5/5',
    screenshot: 'assets/images/screenshots-realisations/vastrion-super-app.png',
    title: 'v0-vastrion-mobile-prototype',
    presentation:
      'Ce projet pose les fondations d’une marketplace de services en mode prototype, avec un focus sur les parcours utilisateur et l’exploration produit.',
    objectivesContextRisks: [
      'Objectif principal : structurer un socle produit pour tester les hypothèses de valeur.',
      'Contexte : phase amont d’un produit en cours de définition.',
      'Enjeu : avancer vite sans perdre la cohérence d’ensemble.',
      'Risque : dérive de périmètre et dette technique si les choix initiaux ne sont pas cadrés.',
    ],
    steps: [
      'Travail sur la structure générale du prototype.',
      'Conception des écrans principaux et interactions.',
      'Itérations UI/UX sur les éléments clés.',
      'Préparation des pistes d’évolution.',
    ],
    stakeholders: [
      'Développeur principal : moi.',
      'Parties prenantes produit : alignement sur les fonctionnalités clés.',
      'Utilisateurs test : retour sur compréhension et usage.',
    ],
    resultsForMe: [
      'Montée en compétences sur la phase de cadrage produit.',
      'Renforcement de ma capacité à articuler UX et décisions techniques.',
    ],
    resultsForCompany: [
      'Base de discussion concrète pour orienter la suite du produit.',
      'Clarification des premières hypothèses fonctionnelles.',
    ],
    futureImmediate: 'Poursuivre les tests et affiner les parcours critiques.',
    futureDistance: 'Passer du prototype à une architecture plus industrialisable.',
    futureToday: 'Le projet reste un laboratoire actif plus qu’un produit finalisé.',
    criticalView:
      'Cette réalisation est encore en mouvement. Sa force est d’ouvrir des pistes, mais je dois encore transformer ces idées en base technique plus stable.',
    repository: 'https://github.com/imaurelsan/v0-vastrion-mobile-prototype',
    techStack: [
      { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/ffffff' },
      { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/ffffff' },
    ],
    linkedSkills: [
      { title: 'UX/UI orientée usage', path: '/competences/ux-ui-orientee-usage' },
      { title: 'Gestion de projet agile', path: '/competences/gestion-projet-agile' },
      { title: 'Analyse critique et prise de décision', path: '/competences/analyse-critique-decision-technique' },
    ],
  },
];

@Component({
  selector: 'app-realisation-detail-page',
  template: `
    <section class="page-section">
      <button class="btn btn--ghost btn--back" type="button" (click)="goBack()">&lt; Retour</button>

      @if (realisation; as project) {
        <header class="section-header">
          <p class="section-header__kicker">{{ project.order }}</p>
          <h1>{{ project.title }}</h1>
        </header>

        @if (project.screenshot) {
          <figure class="realisation-screenshot">
            <img [src]="project.screenshot" [alt]="'Capture — ' + project.title" />
          </figure>
        }

        <article class="panel detail-block">
          <h2>1. Présentation de la réalisation</h2>
          <p>{{ project.presentation }}</p>
        </article>

        <article class="panel detail-block">
          <h2>2. Objectifs, contexte, enjeu et risques</h2>
          <ul class="detail-list">
            @for (item of project.objectivesContextRisks; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>3. Étapes - ce que j’ai fait</h2>
          <ul class="detail-list">
            @for (item of project.steps; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>4. Acteurs - interactions</h2>
          <ul class="detail-list">
            @for (item of project.stakeholders; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>5. Résultats</h2>
          <div class="two-columns two-columns--details">
            <div class="detail-result-card">
              <h3>Pour moi</h3>
            <ul class="detail-list">
              @for (item of project.resultsForMe; track item) {
                <li>{{ item }}</li>
              }
            </ul>
            </div>

            <div class="detail-result-card">
              <h3>Pour l'entreprise</h3>
            <ul class="detail-list">
              @for (item of project.resultsForCompany; track item) {
                <li>{{ item }}</li>
              }
            </ul>
            </div>
          </div>
        </article>

        <article class="panel detail-block">
          <h2>6. Lendemains du projet</h2>
          <ul class="detail-list">
            <li><strong>Futur immédiat :</strong> {{ project.futureImmediate }}</li>
            <li><strong>À distance :</strong> {{ project.futureDistance }}</li>
            <li><strong>Aujourd’hui :</strong> {{ project.futureToday }}</li>
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>7. Mon regard critique</h2>
          <p>{{ project.criticalView }}</p>
          <a class="card-link" [href]="project.repository" target="_blank" rel="noopener">Consulter le dépôt GitHub</a>
        </article>

        <article class="panel detail-block">
          <h2>Compétences rattachées</h2>
          <ul class="detail-list detail-list--links">
            @for (skill of project.linkedSkills; track skill.path) {
              <li>
                <a [href]="skill.path">{{ skill.title }}</a>
              </li>
            }
          </ul>
          <a class="card-link" href="/realisations">Retour à la vue des réalisations</a>
        </article>

        @if (project.techStack.length) {
          <article class="panel detail-block">
            <h2>Technologies utilisées</h2>
            <div class="tech-stack">
              @for (badge of project.techStack; track badge.name) {
                <div class="tech-badge">
                  @if (badge.iconUrl) {
                    <img class="tech-badge__icon" [src]="badge.iconUrl" [alt]="badge.name" />
                  }
                  <span>{{ badge.name }}</span>
                </div>
              }
            </div>
          </article>
        }
      } @else {
        <header class="section-header">
          <p class="section-header__kicker">Réalisation</p>
          <h1>Réalisation introuvable</h1>
        </header>
        <article class="panel detail-block">
          <p>Le slug demandé ne correspond à aucune réalisation connue.</p>
          <a class="card-link" href="/realisations">Retour à la vue des réalisations</a>
        </article>
      }
    </section>
  `,
})
export class RealisationDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  protected readonly realisation = REALISATIONS.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug')
  );

  protected goBack(): void {
    this.location.back();
  }
}
