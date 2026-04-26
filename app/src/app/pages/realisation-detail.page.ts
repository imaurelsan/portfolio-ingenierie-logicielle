import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

export type TechBadge = {
  name: string;
  iconUrl: string;
};

export type LinkedSkill = {
  title: string;
  path: string;
};

export type RealisationDetail = {
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

export const REALISATIONS: RealisationDetail[] = [
  {
    slug: 'project-360-content-bridge',
    order: 'Réalisation détaillée 1/5',
    title: '360 Content Bridge',
    screenshot: 'assets/images/screenshots-realisations/360-content-bridge.png',
    presentation:
      'Le projet consiste à faciliter les échanges de contenus entre différents sites WordPress, dans un contexte multisite où certaines données doivent être partagées ou dupliquées. Au départ, l’équipe passait beaucoup de temps sur des copier-coller manuels, avec des risques d’oublis et de petites erreurs. || J’ai voulu proposer un outil simple, compréhensible et rassurant à utiliser au quotidien. L’idée n’était pas de tout automatiser d’un coup, mais d’avancer étape par étape avec des garde-fous clairs et des retours terrain.',
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
      'Je suis satisfait de l’utilité réelle du projet, mais j’aurais cadré plus tôt les scénarios d’erreur dès la phase de conception. J’aurais aussi mis en place une documentation utilisateur et technique dès la première itération, au lieu d’attendre la stabilisation. Ce projet m’a appris qu’un outil destiné à d’autres doit être pensé autant pour l’usage quotidien que pour sa maintenance future. Depuis, je conçois mes solutions avec plus de clarté opérationnelle, de garde-fous et de lisibilité pour les équipes qui les reprennent.',
    repository: 'https://github.com/imaurelsan/360-content-bridge',
    techStack: [
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'WordPress', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
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
    title: '360 Media Auto Cleanup',
    screenshot: 'assets/images/screenshots-realisations/360-media-auto-cleanup.png',
    presentation:
      'Le projet vise à identifier et nettoyer les médias orphelins sur des sites WordPress pour réduire la dette de stockage et améliorer l’hygiène opérationnelle. En pratique, la médiathèque devenait vite difficile à maintenir, et personne ne savait ce qui pouvait être supprimé sans risque. || J’ai construit une logique de tri progressive avec une priorité claire: éviter les suppressions dangereuses. Le but était d’apporter un vrai gain de temps sans créer de stress, en gardant une approche prudente et compréhensible pour l’équipe.',
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
      'Avec du recul, j’aurais cadré dès le départ une stratégie plus stricte de gestion des faux positifs, avec des seuils de confiance et des étapes de validation plus explicites avant suppression. Cela m’aurait évité certaines zones grises dans les premiers tests. Ce projet m’a appris qu’un outil de suppression irréversible destiné à d’autres utilisateurs doit d’abord être pensé pour réduire le risque, pas seulement pour accélérer l’exécution. Depuis, je privilégie systématiquement la traçabilité, les confirmations intermédiaires et la lisibilité des décisions automatiques.',
    repository: 'https://github.com/imaurelsan/360-media-auto-cleanup',
    techStack: [
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'WordPress', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
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
    title: '360 Tranquillité',
    presentation:
      '360tranquilité est un plugin WordPress qui centralise des fonctions de sécurité, monitoring et exploitation pour éviter la dispersion des outils. Avant ce projet, il fallait jongler avec plusieurs extensions, ce qui compliquait le suivi et la maintenance au quotidien. || J’ai voulu créer un socle unique, plus lisible, pour garder une vision claire de l’état d’un site. Le plugin avance module par module, avec un équilibre volontaire entre ambition, simplicité d’usage et stabilité générale.',
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
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'WordPress', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
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
    title: 'CrewAI Agent de voyage',
    presentation:
      'Ce projet académique explore la création d’un agent capable de proposer des itinéraires de voyage cohérents à partir d’entrées variables. L’objectif était d’aller au-delà de la démonstration technique pour obtenir un résultat lisible par un utilisateur non expert. || J’ai travaillé sur la clarté des sorties, la cohérence des étapes et la limitation des réponses trop floues. Ce prototype m’a surtout aidé à mieux cadrer ce qui est montrable aujourd’hui et ce qui doit encore être renforcé.',
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
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'CrewAI', iconUrl: 'https://cdn.simpleicons.org/langchain/0F172A' },
      { name: 'OpenAI', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
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
    title: 'V0 Vastrion Mobile Prototype',
    presentation:
      'Ce projet pose les fondations d’une marketplace de services en mode prototype, avec un focus sur les parcours utilisateur et l’exploration produit. L’enjeu principal était de transformer une idée large en parcours concrets et compréhensibles dès les premiers tests. || J’ai priorisé les écrans essentiels pour vérifier rapidement la valeur de la proposition. L’approche a consisté à clarifier l’expérience avant d’alourdir la partie technique, afin de préparer une suite plus solide et mieux argumentée.',
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
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
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
      <button class="btn btn--ghost btn--back" type="button" (click)="goBack()" aria-label="Retour">
        <svg viewBox="0 -960 960 960" aria-hidden="true" focusable="false">
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      </button>

      @if (realisation; as project) {
        <header class="section-header">
          <p class="section-header__kicker">{{ project.order }}</p>
          <h1>{{ project.title }}</h1>
        </header>

        <div class="detail-hero-split">
          @if (project.screenshot) {
            <figure
              class="realisation-screenshot realisation-screenshot--interactive"
              (mousemove)="onImageMove($event)"
              (mouseleave)="onImageLeave($event)"
              (click)="openImageViewer(project.screenshot, project.title)"
            >
              <img [src]="project.screenshot" [alt]="'Capture — ' + project.title" />
            </figure>
          }

          <article class="panel detail-block">
            <h2>1. Présentation de la réalisation</h2>
            <div class="detail-intro-copy">
              @for (paragraph of presentationParagraphs(project.presentation); track paragraph) {
                <p>{{ paragraph }}</p>
              }
            </div>
          </article>
        </div>

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">2. Objectifs, contexte, enjeux et risques</h2>
          <ul class="detail-list">
            @for (item of project.objectivesContextRisks; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">3. Étapes : ce que j’ai fait</h2>
          <ul class="detail-list">
            @for (item of project.steps; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">4. Acteurs et interactions</h2>
          <ul class="detail-list">
            @for (item of project.stakeholders; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block detail-block--results">
          <h2 class="detail-heading--anchored">5. Résultats</h2>
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
              <h3>Pour l’entreprise</h3>
            <ul class="detail-list">
              @for (item of project.resultsForCompany; track item) {
                <li>{{ item }}</li>
              }
            </ul>
            </div>
          </div>
        </article>

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">6. Lendemains du projet</h2>
          <ul class="detail-list">
            <li><strong>Futur immédiat :</strong> {{ project.futureImmediate }}</li>
            <li><strong>À distance :</strong> {{ project.futureDistance }}</li>
            <li><strong>Aujourd’hui :</strong> {{ project.futureToday }}</li>
          </ul>
        </article>

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">7. Mon regard critique</h2>
          <p>{{ project.criticalView }}</p>
        </article>

        @if (project.techStack.length) {
          <article class="panel detail-block">
            <h2 class="detail-heading--anchored">Technologies utilisées</h2>
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

        <article class="panel detail-block">
          <h2 class="detail-heading--anchored">Compétences rattachées</h2>
          <ul class="detail-list detail-list--links">
            @for (skill of project.linkedSkills; track skill.path) {
              <li>
                <a [href]="skill.path">{{ skill.title }}</a>
              </li>
            }
          </ul>
          <a class="detail-inline-github" [href]="project.repository" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.2-1.4-4.2-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1 0 1.8 1.1 1.8 1.1 1 .1.5 2.3 3.7 1.6.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.5 9c-.1-.3-.6-1.5.1-3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6.1 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3 .8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
            <span>Consulter le dépôt ↗</span>
          </a>
        </article>

        <div class="detail-primary-action">
          <a class="detail-return-link" href="/realisations">Retour à la vue des réalisations</a>
        </div>
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

      @if (isImageViewerOpen) {
        <div class="image-viewer" role="dialog" aria-modal="true" [attr.aria-label]="imageViewerAlt">
          <button class="image-viewer__backdrop" type="button" aria-label="Fermer l'aperçu" (click)="closeImageViewer()"></button>
          <figure class="image-viewer__content">
            <button class="image-viewer__close" type="button" aria-label="Fermer l'aperçu" (click)="closeImageViewer()">✕</button>
            <img [src]="imageViewerSrc" [alt]="imageViewerAlt" />
          </figure>
        </div>
      }
    </section>
  `,
})
export class RealisationDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  protected realisation: RealisationDetail | null = null;

  protected isImageViewerOpen = false;
  protected imageViewerSrc = '';
  protected imageViewerAlt = '';

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const slug = params.get('slug');
        this.realisation = REALISATIONS.find((item) => item.slug === slug) ?? null;
        this.closeImageViewer();
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
  }

  protected goBack(): void {
    this.location.back();
  }

  protected onImageMove(event: MouseEvent): void {
    const container = event.currentTarget as HTMLElement | null;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    container.style.setProperty('--zoom-x', `${x}%`);
    container.style.setProperty('--zoom-y', `${y}%`);
  }

  protected onImageLeave(event: MouseEvent): void {
    const container = event.currentTarget as HTMLElement | null;
    if (!container) {
      return;
    }

    container.style.setProperty('--zoom-x', '50%');
    container.style.setProperty('--zoom-y', '50%');
  }

  protected openImageViewer(src: string, title: string): void {
    this.imageViewerSrc = src;
    this.imageViewerAlt = `Aperçu agrandi — ${title}`;
    this.isImageViewerOpen = true;
  }

  protected closeImageViewer(): void {
    this.isImageViewerOpen = false;
    this.imageViewerSrc = '';
    this.imageViewerAlt = '';
  }

  protected presentationParagraphs(text: string): string[] {
    return text.split('||').map((part) => part.trim()).filter((part) => part.length > 0);
  }
}
