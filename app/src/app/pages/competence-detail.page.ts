import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Anecdote = {
  title: string;
  situation: string;
  result: string;
  valueAdded: string;
  linkedProject: { title: string; path: string };
};

type CompetenceDetail = {
  slug: string;
  order: string;
  title: string;
  definition: string[];
  anecdotes: Anecdote[];
  selfReview: string[];
  evolution: string[];
  projects: Array<{ title: string; path: string }>;
};

const COMPETENCES: CompetenceDetail[] = [
  {
    slug: 'architecture-web-mutualisee',
    order: 'Compétence détaillée 1/10',
    title: 'Architecture web mutualisée (WordPress multisite)',
    definition: [
      'Je définis cette compétence comme la capacité à concevoir un socle unique pour plusieurs sites, avec des règles communes et des variations contrôlées.',
      'Dans un contexte où les coûts de maintenance et la cohérence technique deviennent critiques, l’architecture mutualisée reste une réponse actuelle et durable.',
    ],
    anecdotes: [
      {
        title: 'Mise en place d’un socle multisite en entreprise',
        situation:
          'Avant l’architecture multisite, chaque site fonctionnait avec ses propres plugins et configurations, ce qui rendait les mises à jour longues et risquées.',
        result:
          'La centralisation du thème, des plugins et de la structure a réduit les opérations répétitives et amélioré la cohérence entre sites.',
        valueAdded:
          'J’ai contribué à rendre la maintenance plus lisible et plus contrôlable, tout en identifiant les limites quand certains besoins deviennent trop spécifiques.',
        linkedProject: { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire avancé, en consolidation.',
      'Place dans mon profil : compétence socle, prioritaire pour construire des solutions économiquement viables.',
      'Vitesse d’acquisition : rapide grâce à la répétition sur plusieurs projets en environnement réel.',
      'Recul : je recommande de documenter très tôt les exceptions de périmètre pour éviter la complexité cachée.',
    ],
    evolution: [
      'Objectif moyen terme : renforcer encore la résilience et la supervision du multisite.',
      'Autoformation prévue : approfondir les patterns d’architecture évolutive et de gouvernance technique.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'developpement-plugins-wordpress',
    order: 'Compétence détaillée 2/10',
    title: 'Développement de plugins WordPress',
    definition: [
      'Je définis cette compétence comme la capacité à encapsuler une logique métier dans un plugin modulaire, maintenable et versionnable.',
      'Avec la montée des besoins d’industrialisation WordPress, cette compétence reste stratégique pour limiter la dépendance aux extensions externes.',
    ],
    anecdotes: [
      {
        title: 'Conception d’un plugin de monitoring et sécurité',
        situation:
          'Le besoin était de centraliser plusieurs fonctionnalités opérationnelles dans un seul plugin au lieu d’empiler de nombreuses extensions tierces.',
        result:
          'Le plugin modulaire a permis de gagner du temps sur les opérations récurrentes et de mieux maîtriser les évolutions futures.',
        valueAdded:
          'J’ai structuré le code pour permettre l’ajout progressif de modules et j’ai renforcé ma discipline sur la documentation et le versionning.',
        linkedProject: { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, en consolidation.',
      'Place dans mon profil : compétence centrale de production et de différenciation.',
      'Vitesse d’acquisition : soutenue via des projets concrets livrés en entreprise.',
      'Recul : un plugin utile n’est pas seulement fonctionnel, il doit rester explicable et maintenable dans la durée.',
    ],
    evolution: [
      'Objectif moyen terme : augmenter la robustesse des modules et la couverture de tests.',
      'Formation prévue : consolider les pratiques de qualité logicielle appliquées à WordPress.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'integrations-api-rest',
    order: 'Compétence détaillée 3/10',
    title: 'Intégrations API REST et interconnexion services',
    definition: [
      'Je définis cette compétence comme la capacité à relier des systèmes via des contrats de données fiables, sans exposer inutilement la logique métier.',
      'Dans des environnements hybrides, l’interconnexion de services est aujourd’hui un levier clé d’automatisation.',
    ],
    anecdotes: [
      {
        title: 'Connexion de WordPress à des services externes',
        situation:
          'Plusieurs tâches étaient faites manuellement, avec des risques d’erreurs et une faible traçabilité.',
        result:
          'La mise en place d’appels API sécurisés et de traitements serveur a automatisé les échanges de données et amélioré la fiabilité globale.',
        valueAdded:
          'J’ai pris en charge le cadrage des formats, la gestion des erreurs et la protection des logiques sensibles.',
        linkedProject: { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      },
    ],
    selfReview: [
      'Niveau actuel : débutant, en progression active.',
      'Place dans mon profil : compétence structurante pour l’évolutivité des produits.',
      'Vitesse d’acquisition : progressive, renforcée par des cas d’intégration réels.',
      'Recul : la qualité d’une API se joue autant dans les erreurs et cas limites que dans le chemin nominal.',
    ],
    evolution: [
      'Objectif moyen terme : formaliser davantage les contrats et conventions de version.',
      'Autoformation prévue : approfondissement sur la résilience des intégrations et l’observabilité.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'performance-front-optimisation',
    order: 'Compétence détaillée 4/10',
    title: 'Performance web et optimisation front',
    definition: [
      'Je définis cette compétence comme l’ensemble des actions qui réduisent le temps de chargement et améliorent la perception utilisateur.',
      'La performance est une exigence actuelle, à la fois UX, SEO et économique.',
    ],
    anecdotes: [
      {
        title: 'Optimisation de sites et suivi Lighthouse',
        situation:
          'Plusieurs sites présentaient un chargement ralenti par des médias lourds et des scripts peu utiles.',
        result:
          'Les optimisations d’images, de scripts et de chargement ont amélioré la vitesse perçue et les scores de performance.',
        valueAdded:
          'J’ai traité la performance comme un ensemble cohérent de petites décisions plutôt qu’un correctif ponctuel.',
        linkedProject: { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence clé pour la qualité d’usage.',
      'Vitesse d’acquisition : bonne, grâce au cycle audit-correction-mesure.',
      'Recul : il faut éviter les optimisations isolées et privilégier une stratégie continue.',
    ],
    evolution: [
      'Objectif moyen terme : systématiser des seuils de performance dans la CI/CD.',
      'Autoformation prévue : approfondir Core Web Vitals et budgets de performance.',
    ],
    projects: [
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'securite-applicative',
    order: 'Compétence détaillée 5/10',
    title: 'Sécurité applicative et durcissement WordPress',
    definition: [
      'Je définis cette compétence comme la capacité à réduire l’exposition au risque applicatif par des mécanismes simples, utiles et maintenables.',
      'Dans un contexte d’attaques fréquentes sur les CMS, le durcissement WordPress reste un enjeu immédiat.',
    ],
    anecdotes: [
      {
        title: 'Durcissement progressif de sites WordPress',
        situation:
          'Des points faibles revenaient régulièrement : accès admin exposé, extensions peu fiables, contrôles insuffisants.',
        result:
          'La mise en place de limitations d’accès, sécurisation d’endpoints et surveillance ciblée a renforcé la stabilité globale.',
        valueAdded:
          'J’ai combiné mon socle réseau/sécurité avec des fonctionnalités plugin orientées exploitation réelle.',
        linkedProject: { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence historique et différenciante.',
      'Vitesse d’acquisition : forte, grâce à mon parcours initial en sécurité puis à l’application web.',
      'Recul : la sécurité utile est celle qui reste activable et comprise par les équipes.',
    ],
    evolution: [
      'Objectif moyen terme : mieux formaliser les scénarios de réponse incident.',
      'Formation prévue : approfondir les pratiques de sécurité applicative orientées DevSecOps.',
    ],
    projects: [{ title: '360tranquilité', path: '/realisations/project-360tranquilite' }],
  },
  {
    slug: 'gestion-projet-agile',
    order: 'Compétence détaillée 6/10',
    title: 'Gestion de projet agile et priorisation',
    definition: [
      'Je définis cette compétence comme la capacité à prioriser par valeur, à découper les livrables et à piloter sous contrainte.',
      'Dans des contextes où les demandes évoluent vite, l’agilité pragmatique est une compétence indispensable.',
    ],
    anecdotes: [
      {
        title: 'Arbitrages entre rapidité et qualité',
        situation:
          'Sur plusieurs projets, les demandes se sont enchaînées avec des objectifs parfois contradictoires.',
        result:
          'Le découpage des tâches et la priorisation par impact ont permis de livrer sans perdre le cap technique.',
        valueAdded:
          'J’ai appris à estimer plus réalistement et à assumer des compromis explicites.',
        linkedProject: { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence transverse essentielle pour livrer dans les temps.',
      'Vitesse d’acquisition : régulière, principalement par la pratique terrain.',
      'Recul : la priorisation doit rester transparente pour éviter les incompréhensions côté métier.',
    ],
    evolution: [
      'Objectif moyen terme : mieux outiller la mesure d’effort et de valeur livrée.',
      'Formation prévue : approfondir les cadres agile de pilotage multi-projets.',
    ],
    projects: [
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'communication-technique',
    order: 'Compétence détaillée 7/10',
    title: 'Communication technique avec parties prenantes',
    definition: [
      'Je définis cette compétence comme la capacité à traduire des contraintes techniques en décisions compréhensibles par des profils non techniques.',
      'Dans les projets digitaux, cette compétence réduit fortement les malentendus et les dérives de périmètre.',
    ],
    anecdotes: [
      {
        title: 'Dialogue entre design, technique et usage',
        situation:
          'Certaines propositions visuelles étaient peu compatibles avec les contraintes de performance ou d’accessibilité.',
        result:
          'L’explication des compromis a permis d’aligner les choix et d’éviter des allers-retours coûteux.',
        valueAdded:
          'J’ai joué un rôle de pont entre besoins fonctionnels et faisabilité technique.',
        linkedProject: { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence clé pour la coordination et la confiance.',
      'Vitesse d’acquisition : progressive, renforcée par des contextes multi-acteurs.',
      'Recul : mieux communiquer, c’est aussi mieux cadrer la décision et ses impacts.',
    ],
    evolution: [
      'Objectif moyen terme : standardiser mes supports de communication technique.',
      'Autoformation prévue : approfondir les techniques de facilitation et de synthèse décisionnelle.',
    ],
    projects: [
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'ux-ui-orientee-usage',
    order: 'Compétence détaillée 8/10',
    title: 'UX/UI orientée usage et accessibilité',
    definition: [
      'Je définis cette compétence comme la capacité à concevoir des interfaces lisibles et utiles, au service d’un usage concret.',
      'Avec l’exigence actuelle d’inclusivité et de clarté, l’accessibilité n’est plus optionnelle.',
    ],
    anecdotes: [
      {
        title: 'Conception d’interfaces avec attention à l’accessibilité',
        situation:
          'Le besoin était de produire des interfaces simples à comprendre, avec une hiérarchie visuelle claire.',
        result:
          'Le travail sur contrastes, navigation et structure a amélioré la lisibilité et l’efficacité des parcours.',
        valueAdded:
          'J’ai intégré très tôt la logique d’usage, au-delà de la seule esthétique.',
        linkedProject: { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence de différenciation produit et expérience utilisateur.',
      'Vitesse d’acquisition : régulière grâce au travail conjoint avec des designers.',
      'Recul : une bonne interface est d’abord une interface compréhensible et actionnable.',
    ],
    evolution: [
      'Objectif moyen terme : renforcer la validation par tests utilisateurs.',
      'Autoformation prévue : approfondir les référentiels d’accessibilité et les méthodes UX de terrain.',
    ],
    projects: [
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
    ],
  },
  {
    slug: 'automatisation-amelioration-continue',
    order: 'Compétence détaillée 9/10',
    title: 'Automatisation et amélioration continue',
    definition: [
      'Je définis cette compétence comme la capacité à transformer des tâches manuelles fragiles en processus fiables, mesurables et répétables.',
      'Dans l’ingénierie logicielle actuelle, l’automatisation est indispensable pour soutenir la cadence sans sacrifier la qualité.',
    ],
    anecdotes: [
      {
        title: 'Mise en place d’une CI/CD sur le portfolio',
        situation:
          'Les mises en ligne manuelles créaient des frictions, des délais et des risques d’erreurs.',
        result:
          'Le pipeline build/test/deploy automatise les livraisons et réduit significativement les interventions manuelles.',
        valueAdded:
          'J’ai stabilisé la chaîne jusqu’à obtenir un flux de déploiement reproductible et plus sûr.',
        linkedProject: { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      },
    ],
    selfReview: [
      'Niveau actuel : débutant, en progression active.',
      'Place dans mon profil : compétence accélératrice de qualité et de productivité.',
      'Vitesse d’acquisition : rapide sur les derniers mois grâce à la pratique CI/CD.',
      'Recul : l’automatisation utile est celle qui reste compréhensible, diagnostiquable et maintenable.',
    ],
    evolution: [
      'Objectif moyen terme : enrichir les contrôles post-déploiement et le suivi de qualité.',
      'Autoformation prévue : approfondir les pratiques DevOps/observabilité adaptées aux projets web.',
    ],
    projects: [
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'analyse-critique-decision-technique',
    order: 'Compétence détaillée 10/10',
    title: 'Analyse critique et prise de décision technique',
    definition: [
      'Je définis cette compétence comme la capacité à choisir entre plusieurs options en tenant compte du temps, du coût, du risque et de la maintenabilité.',
      'Dans des contextes contraints, cette compétence conditionne la viabilité des projets à moyen terme.',
    ],
    anecdotes: [
      {
        title: 'Arbitrages entre solution rapide et solution durable',
        situation:
          'Sur plusieurs projets, le choix devait être fait entre livrer vite ou poser une base plus propre mais plus longue à mettre en place.',
        result:
          'En prenant davantage en compte les impacts de maintenance, les décisions techniques sont devenues plus robustes dans le temps.',
        valueAdded:
          'J’ai renforcé ma capacité à argumenter des compromis défendables face aux contraintes réelles.',
        linkedProject: { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, avec progression régulière.',
      'Place dans mon profil : compétence de pilotage stratégique des choix techniques.',
      'Vitesse d’acquisition : progressive, enrichie par des contextes variés.',
      'Recul : décider vite est utile, mais décider juste reste la priorité.',
    ],
    evolution: [
      'Objectif moyen terme : appuyer systématiquement les décisions sur des indicateurs chiffrés.',
      'Autoformation prévue : approfondir l’évaluation d’architecture et la gestion de trade-offs.',
    ],
    projects: [
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
];

@Component({
  selector: 'app-competence-detail-page',
  template: `
    <section class="page-section">
      <button class="btn btn--ghost btn--back" type="button" (click)="goBack()">Retour à la page précédente</button>

      @if (competence; as skill) {
        <header class="section-header">
          <p class="section-header__kicker">{{ skill.order }}</p>
          <h1>{{ skill.title }}</h1>
        </header>

        <article class="panel detail-block">
          <h2>1. Ma définition</h2>
          @for (paragraph of skill.definition; track paragraph) {
            <p>{{ paragraph }}</p>
          }
        </article>

        <article class="panel detail-block">
          <h2>2. Mes éléments de preuve</h2>
          <ul class="detail-list detail-list--rich">
            @for (anecdote of skill.anecdotes; track anecdote.title) {
              <li>
                <h3>{{ anecdote.title }}</h3>
                <p><strong>Contexte :</strong> {{ anecdote.situation }}</p>
                <p><strong>Résultat :</strong> {{ anecdote.result }}</p>
                <p><strong>Valeur ajoutée :</strong> {{ anecdote.valueAdded }}</p>
                <p>
                  <strong>Réalisation liée :</strong>
                  <a [href]="anecdote.linkedProject.path">{{ anecdote.linkedProject.title }}</a>
                </p>
              </li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>3. Mon autocritique</h2>
          <ul class="detail-list">
            @for (item of skill.selfReview; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>4. Mon évolution dans cette compétence</h2>
          <ul class="detail-list">
            @for (item of skill.evolution; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>Réalisations rattachées</h2>
          <ul class="detail-list detail-list--links">
            @for (project of skill.projects; track project.path) {
              <li>
                <a [href]="project.path">{{ project.title }}</a>
              </li>
            }
          </ul>
        </article>
      } @else {
        <header class="section-header">
          <p class="section-header__kicker">Compétence</p>
          <h1>Compétence introuvable</h1>
        </header>
        <article class="panel detail-block">
          <p>Le slug demandé ne correspond à aucune compétence connue.</p>
          <a class="card-link" href="/competences">Retour à la liste des compétences</a>
        </article>
      }
    </section>
  `,
})
export class CompetenceDetailPage {
  private readonly route = inject(ActivatedRoute);
    private readonly location = inject(Location);

  protected readonly competence = COMPETENCES.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug')
  );

    protected goBack(): void {
      this.location.back();
    }
}
