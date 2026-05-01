import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type Anecdote = {
  title: string;
  situation: string;
  result: string;
  valueAdded: string;
  linkedProject: { title: string; path: string };
};

export type CompetenceDetail = {
  slug: string;
  order: string;
  title: string;
  definition: string[];
  anecdotes: Anecdote[];
  selfReview: string[];
  evolution: string[];
  projects: Array<{ title: string; path: string }>;
};

export const COMPETENCES: CompetenceDetail[] = [
  // Chaque bloc suit la meme structure pour faciliter la comparaison entre competences.
  {
    slug: 'architecture-web-mutualisee',
    order: 'Compétence détaillée 1/11',
    title: 'Architecture web mutualisée (WordPress multisite)',
    definition: [
      'Je définis cette compétence comme la capacité à concevoir un socle unique pour plusieurs sites, avec des règles communes et des variations contrôlées.',
      'Quand plusieurs sites doivent rester cohérents sans coûter trop cher à maintenir, l’architecture mutualisée devient une réponse simple et utile.',
      'Dans le contexte actuel de rationalisation des coûts et de maintien en conditions opérationnelles, ce type d’architecture aide les équipes à livrer plus régulièrement avec un niveau de qualité homogène.',
    ],
    anecdotes: [
      {
        title: 'Mise en place d’un socle multisite en entreprise',
        situation:
          'Avant l’architecture multisite, chaque site fonctionnait avec ses propres plugins et configurations, ce qui rendait les mises à jour longues et risquées.',
        result:
          'Le fait de centraliser le thème, les plugins et la structure a réduit les tâches répétitives et rendu l’ensemble plus cohérent.',
        valueAdded:
          'J’ai aidé à rendre la maintenance plus claire et plus facile à gérer, tout en repérant les limites quand un besoin devient trop particulier.',
        linkedProject: { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      },
      {
        title: 'Standardisation progressive des pratiques de maintenance',
        situation:
          'L’équipe devait appliquer les mêmes vérifications sur plusieurs sites, mais sans cadre unique la qualité variait selon les interventions.',
        result:
          'La mise en commun des règles de base et des séquences de contrôle a réduit les oublis et facilité les passages de relais.',
        valueAdded:
          'J’ai contribué à transformer un fonctionnement dépendant des habitudes individuelles en une méthode plus lisible et reproductible.',
        linkedProject: { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire avancé ; je continue de la renforcer.',
      'Place dans mon profil : c’est une compétence socle pour construire des solutions simples à maintenir.',
      'Vitesse d’acquisition : j’ai progressé assez vite grâce à la répétition sur plusieurs projets réels.',
      'Avec le recul : il faut documenter tôt les cas particuliers pour éviter les problèmes cachés plus tard.',
    ],
    evolution: [
      'Objectif moyen terme : mieux fiabiliser et mieux suivre un multisite dans la durée.',
      'Autoformation prévue : continuer à apprendre des façons simples de faire évoluer une architecture sans la compliquer.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'developpement-plugins-wordpress',
    order: 'Compétence détaillée 2/11',
    title: 'Développement de plugins WordPress',
    definition: [
      'Je définis cette compétence comme la capacité à mettre une logique métier dans un plugin clair, réutilisable et facile à faire évoluer.',
      'C’est une compétence importante quand on veut moins dépendre d’extensions externes et garder la main sur ce qu’on construit.',
    ],
    anecdotes: [
      {
        title: 'Conception d’un plugin de monitoring et sécurité',
        situation:
          'Le besoin était de centraliser plusieurs fonctionnalités opérationnelles dans un seul plugin au lieu d’empiler de nombreuses extensions tierces.',
        result:
          'Le plugin modulaire a permis de gagner du temps sur les tâches répétitives et de mieux préparer les évolutions suivantes.',
        valueAdded:
          'J’ai structuré le code pour pouvoir ajouter des modules petit à petit, tout en gardant une base lisible.',
        linkedProject: { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire ; je continue de progresser.',
      'Place dans mon profil : c’est une compétence centrale dans mon travail actuel.',
      'Vitesse d’acquisition : j’ai progressé grâce à des projets concrets livrés en entreprise.',
      'Avec le recul : un plugin utile ne doit pas seulement marcher, il doit aussi rester compréhensible et facile à maintenir.',
    ],
    evolution: [
      'Objectif moyen terme : rendre les modules plus solides et mieux testés.',
      'Formation prévue : continuer à progresser sur les bonnes pratiques de qualité appliquées à WordPress.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'integrations-api-rest',
    order: 'Compétence détaillée 3/11',
    title: 'Intégrations API REST et interconnexion services',
    definition: [
      'Je définis cette compétence comme la capacité à faire communiquer des systèmes entre eux de façon claire et fiable.',
      'Aujourd’hui, relier plusieurs services est souvent nécessaire pour gagner du temps et éviter les tâches manuelles.',
    ],
    anecdotes: [
      {
        title: 'Connexion de WordPress à des services externes',
        situation:
          'Plusieurs tâches étaient faites manuellement, avec des risques d’erreurs et une faible traçabilité.',
        result:
          'La mise en place d’appels API sécurisés et de traitements côté serveur a permis d’automatiser les échanges de données et de réduire les erreurs.',
        valueAdded:
          'J’ai travaillé sur le format des données, la gestion des erreurs et la protection des parties sensibles.',
        linkedProject: { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      },
    ],
    selfReview: [
      'Niveau actuel : débutant, en progression active.',
      'Place dans mon profil : compétence importante pour faire évoluer un produit proprement.',
      'Vitesse d’acquisition : je progresse au fil des cas d’intégration rencontrés.',
      'Avec le recul : une API ne se juge pas seulement quand tout va bien, mais aussi sur sa façon de gérer les erreurs.',
    ],
    evolution: [
      'Objectif moyen terme : mieux formaliser les formats d’échange et les versions.',
      'Autoformation prévue : continuer à apprendre à rendre les intégrations plus fiables et plus faciles à suivre.',
    ],
    projects: [
      { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'performance-front-optimisation',
    order: 'Compétence détaillée 4/11',
    title: 'Performance web et optimisation front',
    definition: [
      'Je définis cette compétence comme l’ensemble des actions qui réduisent le temps de chargement et améliorent la perception utilisateur.',
      'La performance est aujourd’hui un point important, à la fois pour l’expérience utilisateur, la visibilité web et les coûts.',
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
      'Objectif moyen terme : définir des seuils de performance clairs dans la CI/CD.',
      'Autoformation prévue : continuer à progresser sur les indicateurs simples de performance web.',
    ],
    projects: [
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'securite-applicative',
    order: 'Compétence détaillée 5/11',
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
      'Formation prévue : approfondir les bonnes pratiques de sécurité appliquées au développement web.',
    ],
    projects: [{ title: '360tranquilité', path: '/realisations/project-360tranquilite' }],
  },
  {
    slug: 'gestion-projet-agile',
    order: 'Compétence détaillée 6/11',
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
      'Objectif moyen terme : mieux mesurer l’effort fourni et la valeur livrée.',
      'Formation prévue : approfondir les méthodes agiles de pilotage sur plusieurs projets.',
    ],
    projects: [
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'communication-technique',
    order: 'Compétence détaillée 7/11',
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
      'Autoformation prévue : approfondir les techniques d’animation d’équipe et de synthèse des décisions.',
    ],
    projects: [
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'ux-ui-orientee-usage',
    order: 'Compétence détaillée 8/11',
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
      'Autoformation prévue : approfondir les bases d’accessibilité et les méthodes UX appliquées sur le terrain.',
    ],
    projects: [
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
    ],
  },
  {
    slug: 'automatisation-amelioration-continue',
    order: 'Compétence détaillée 9/11',
    title: 'Automatisation et amélioration continue',
    definition: [
      'Je définis cette compétence comme la capacité à transformer des tâches manuelles fragiles en processus plus fiables et reproductibles.',
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
      'Recul : une automatisation utile doit rester compréhensible, facile à suivre et simple à maintenir.',
    ],
    evolution: [
      'Objectif moyen terme : enrichir les contrôles post-déploiement et le suivi de qualité.',
      'Autoformation prévue : approfondir les pratiques DevOps et les outils de suivi adaptés aux projets web.',
    ],
    projects: [
      { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
      { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
    ],
  },
  {
    slug: 'analyse-critique-decision-technique',
    order: 'Compétence détaillée 10/11',
    title: 'Analyse critique et prise de décision technique',
    definition: [
      'Je définis cette compétence comme la capacité à choisir entre plusieurs options en tenant compte du temps, du coût, du risque et de la maintenance.',
      'Dans un contexte contraint, cette compétence aide à garder un projet viable sur la durée.',
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
      'Recul : décider vite est utile, mais décider juste reste le plus important.',
    ],
    evolution: [
      'Objectif moyen terme : appuyer systématiquement les décisions sur des indicateurs chiffrés.',
      'Autoformation prévue : approfondir l’évaluation d’architecture et la gestion des compromis techniques.',
    ],
    projects: [
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
    ],
  },
  {
    slug: 'collaboration-interdisciplinaire',
    order: 'Compétence détaillée 11/11',
    title: 'Collaboration interdisciplinaire',
    definition: [
      'Je définis cette compétence comme la capacité à faire travailler ensemble des profils différents autour d’un objectif concret et partagé.',
      'Elle est essentielle dès qu’un projet implique à la fois des enjeux métier, design, techniques et de delivery.',
    ],
    anecdotes: [
      {
        title: 'Coordination produit, design et technique sur des sujets web',
        situation:
          'Sur plusieurs projets, les décisions devaient rester cohérentes entre attentes métier, expérience utilisateur et contraintes techniques.',
        result:
          'En clarifiant les priorités et les compromis, nous avons réduit les allers-retours et conservé un rythme de livraison stable.',
        valueAdded:
          'J’ai facilité les arbitrages en traduisant les contraintes de chaque partie prenante dans un langage commun.',
        linkedProject: { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      },
    ],
    selfReview: [
      'Niveau actuel : intermédiaire, consolidé par des contextes multi-acteurs.',
      'Place dans mon profil : compétence humaine structurante pour transformer une intention en livraison concrète.',
      'Vitesse d’acquisition : progressive, grâce à des rôles hybrides entre exécution et coordination.',
      'Recul : la collaboration efficace repose sur des objectifs explicites et des décisions tracées.',
    ],
    evolution: [
      'Objectif moyen terme : renforcer mes pratiques de facilitation et de cadrage inter-équipes.',
      'Autoformation prévue : approfondir les méthodes de communication projet et de pilotage collaboratif.',
    ],
    projects: [
      { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      { title: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
    ],
  },
];

@Component({
  selector: 'app-competence-detail-page',
  template: `
    <section class="page-section">
      <button class="btn btn--ghost btn--back" type="button" (click)="goBack()" aria-label="Retour">
        <svg viewBox="0 -960 960 960" aria-hidden="true" focusable="false">
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      </button>

      @if (competence; as skill) {
        <header class="section-header">
          <p class="section-header__kicker">{{ skill.order }}</p>
          <h1>{{ skill.title }}</h1>
        </header>

        <article class="detail-block detail-block--definition">
          <p class="section-header__kicker">Définition</p>
          <blockquote class="detail-quote">{{ skill.definition[0] }}</blockquote>
          <div class="detail-definition-copy">
            @for (paragraph of skill.definition.slice(1); track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </div>
        </article>

        <article class="detail-block detail-block--anecdotes">
          <h2>Mes éléments de preuve</h2>
          <div class="anecdote-accordion-list">
            @for (anecdote of skill.anecdotes; track anecdote.title) {
              <details class="anecdote-accordion">
                <summary>{{ anecdote.title }}</summary>
                <div class="detail-points">
                  <p><strong>Contexte :</strong> {{ anecdote.situation }}</p>
                  <p><strong>Résultat :</strong> {{ anecdote.result }}</p>
                  <p><strong>Valeur ajoutée :</strong> {{ anecdote.valueAdded }}</p>
                  <p>
                    <strong>Réalisation liée :</strong>&nbsp;
                    <a [href]="anecdote.linkedProject.path">{{ anecdote.linkedProject.title }} <span aria-hidden="true">↗</span></a>
                  </p>
                </div>
              </details>
            }
          </div>
        </article>

        <div class="detail-section-divider" aria-hidden="true"></div>

        <article class="detail-block detail-block--critical">
          <h2>Mon autocritique</h2>
          <p class="section-header__kicker">Regard critique</p>
          <ul class="detail-list detail-list--critical">
            @for (item of skill.selfReview; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="detail-block detail-block--evolution">
          <p class="section-header__kicker">Projection</p>
          <h2>Mon évolution dans cette compétence</h2>
          <div class="detail-evolution-copy">
            @for (item of skill.evolution; track item) {
              <p>{{ item }}</p>
            }
          </div>
        </article>

        <article class="detail-block detail-block--linked">
          <h2>Réalisations rattachées</h2>
          <div class="linked-projects-mini">
            @for (project of skill.projects; track project.path) {
              <a class="linked-project-mini" [href]="project.path">
                <span class="linked-project-mini__title">{{ project.title }}</span>
                <span class="linked-project-mini__meta">{{ projectContext(project.title) }}</span>
                <span class="linked-project-mini__arrow" aria-hidden="true">↗</span>
              </a>
            }
          </div>
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

  protected projectContext(projectTitle: string): string {
    if (projectTitle.includes('360-content-bridge')) {
      return 'Plugin WordPress multisite et orchestration de contenu';
    }
    if (projectTitle.includes('360tranquilité')) {
      return 'Suite WordPress orientée sécurité et exploitation';
    }
    if (projectTitle.includes('360-media-auto-cleanup')) {
      return 'Gouvernance médias et optimisation opérationnelle';
    }
    if (projectTitle.includes('v0-vastrion-mobile-prototype')) {
      return 'Prototype produit orienté UX et cadrage fonctionnel';
    }
    if (projectTitle.includes('crewai-projet-agent-voyage')) {
      return 'Expérimentation IA multi-agents sur un cas concret';
    }
    return 'Projet lié à la compétence évaluée';
  }
}
