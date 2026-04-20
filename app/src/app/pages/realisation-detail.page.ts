import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type LinkedSkill = {
  title: string;
  path: string;
};

type KpiItem = {
  label: string;
  value: string;
  impact: string;
};

type RealisationDetail = {
  slug: string;
  order: string;
  title: string;
  context: string;
  oralPitch: string[];
  kpis: KpiItem[];
  objectives: string[];
  steps: string[];
  stakeholders: string[];
  results: string[];
  nextSteps: string[];
  criticalView: string;
  repository: string;
  linkedSkills: LinkedSkill[];
};

const REALISATIONS: RealisationDetail[] = [
  {
    slug: 'project-360-content-bridge',
    order: 'Réalisation détaillée 1/5',
    title: '360-content-bridge',
    context:
      "Plugin WordPress conçu pour simplifier les opérations d'import/export de contenu dans un contexte multi-projets.",
    oralPitch: [
      'J\'ai conçu ce plugin pour fiabiliser les transferts de contenus entre environnements WordPress.',
      'Le besoin métier était de réduire les manipulations manuelles et les risques d\'erreur.',
      'J\'ai structuré la logique d\'import/export autour de règles de validation simples et maintenables.',
      'Le résultat est un gain de temps opérationnel et une base réutilisable pour d\'autres projets.',
    ],
    kpis: [
      {
        label: 'Temps de migration de contenu',
        value: 'Baisse sensible vs manuel',
        impact: 'Réduction des opérations répétitives en phase de maintenance.',
      },
      {
        label: 'Risque d\'erreur humaine',
        value: 'Réduit',
        impact: 'Moins d\'écarts entre source et cible lors des transferts.',
      },
    ],
    objectives: [
      'Accélérer les opérations de contenu répétitives.',
      'Réduire le risque d’erreur humaine lors des transferts.',
      'Rendre les manipulations plus reproductibles entre environnements.',
    ],
    steps: [
      'Cadrage fonctionnel des données à transférer.',
      'Conception de la structure de plugin et des points d’entrée.',
      'Implémentation des flux import/export avec validation basique.',
      'Tests manuels sur cas réels et ajustements.',
    ],
    stakeholders: [
      'Développeur (moi) pour la conception et la maintenance.',
      'Équipe projet pour les besoins de migration de contenu.',
      'Utilisateurs back-office pour l’exploitation quotidienne.',
    ],
    results: [
      'Gain de temps sur les opérations de contenu récurrentes.',
      'Réduction des manipulations manuelles fragiles.',
      'Base technique réutilisable pour d’autres besoins similaires.',
    ],
    nextSteps: [
      'Renforcer les validations et logs de traitement.',
      'Ajouter des options de mapping avancé des champs.',
    ],
    criticalView:
      'Le plugin répond bien au besoin principal, mais je dois encore durcir les scénarios d’erreur complexes et la documentation utilisateur.',
    repository: 'https://github.com/imaurelsan/360-content-bridge',
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
    context:
      'Plugin WordPress qui automatise le nettoyage des médias orphelins pour limiter les coûts de stockage et garder un parc propre.',
    oralPitch: [
      'J\'ai développé ce plugin pour automatiser une tâche de maintenance souvent oubliée.',
      'L\'enjeu principal était de nettoyer sans supprimer des médias encore utiles.',
      'J\'ai donc privilégié une logique prudente avec contrôle et validation.',
      'Le projet améliore durablement l\'hygiène technique et limite la dérive de stockage.',
    ],
    kpis: [
      {
        label: 'Volume médias orphelins',
        value: 'En baisse continue',
        impact: 'Réduction de la dette de stockage sur le long terme.',
      },
      {
        label: 'Temps de nettoyage manuel',
        value: 'Fortement réduit',
        impact: 'L\'équipe peut se concentrer sur des tâches à plus forte valeur.',
      },
    ],
    objectives: [
      'Identifier les médias non utilisés.',
      'Proposer une suppression maîtrisée et réversible.',
      'Éviter la dérive progressive de la médiathèque.',
    ],
    steps: [
      'Analyse des règles de détection d’orphelins.',
      'Implémentation du moteur de scan.',
      'Ajout des commandes de nettoyage et garde-fous.',
      'Validation sur des jeux de données réels.',
    ],
    stakeholders: [
      'Développeur (moi) pour la logique de détection.',
      'Équipes de contenu pour valider la pertinence des suppressions.',
      'Exploitation pour le suivi des effets de bord.',
    ],
    results: [
      'Réduction du volume de médias inutiles.',
      'Maintenance de contenu plus saine dans le temps.',
      'Approche automatisée qui limite les interventions manuelles.',
    ],
    nextSteps: [
      'Améliorer la granularité des exclusions.',
      'Renforcer les rapports de nettoyage.',
    ],
    criticalView:
      'La valeur opérationnelle est immédiate, mais la qualité dépend de la précision des règles de détection, que je dois continuer à affiner.',
    repository: 'https://github.com/imaurelsan/360-media-auto-cleanup',
    linkedSkills: [
      { title: 'Architecture web mutualisée (WordPress multisite)', path: '/competences/architecture-web-mutualisee' },
      { title: 'Performance web et optimisation front', path: '/competences/performance-front-optimisation' },
      { title: 'Automatisation et amélioration continue', path: '/competences/automatisation-amelioration-continue' },
    ],
  },
  {
    slug: 'project-360tranquilite',
    order: 'Réalisation détaillée 3/5',
    title: '360tranquilité',
    context:
      'Plugin WordPress orienté supervision, sécurité et exploitation pour stabiliser les environnements de production.',
    oralPitch: [
      'J\'ai porté ce projet pour centraliser des besoins de sécurité et d\'exploitation dans un seul plugin.',
      'Le contexte imposait une solution modulaire, évolutive et exploitable au quotidien.',
      'J\'ai avancé par incréments pour sécuriser chaque brique sans casser l\'ensemble.',
      'Le projet apporte une meilleure visibilité opérationnelle et un socle de durcissement durable.',
    ],
    kpis: [
      {
        label: 'Couverture des contrôles',
        value: 'Modules clés centralisés',
        impact: 'Vision unifiée des points de vigilance techniques.',
      },
      {
        label: 'Réactivité incident',
        value: 'Améliorée',
        impact: 'Diagnostic plus rapide grâce aux outils de supervision.',
      },
    ],
    objectives: [
      'Centraliser des fonctionnalités de protection utiles.',
      'Aider à détecter rapidement les incidents.',
      'Fournir un cadre d’exploitation plus serein.',
    ],
    steps: [
      'Découpage en modules fonctionnels.',
      'Implémentation progressive des briques de sécurité.',
      'Ajout d’outils d’exploitation et de suivi.',
      'Tests de non-régression sur usage réel.',
    ],
    stakeholders: [
      'Développeur (moi) pour la conception technique.',
      'Équipe d’exploitation pour l’usage quotidien.',
      'Parties prenantes métier pour les priorités fonctionnelles.',
    ],
    results: [
      'Meilleure visibilité sur l’état opérationnel du site.',
      'Réduction de certains risques liés à la configuration.',
      'Base modulaire évolutive pour futurs besoins.',
    ],
    nextSteps: [
      'Poursuivre l’amélioration de l’ergonomie admin.',
      'Renforcer les scénarios d’alerte et de reporting.',
    ],
    criticalView:
      'Le projet apporte une vraie valeur d’exploitation, mais son ambition large impose une vigilance constante sur la qualité et la cohérence des modules.',
    repository: 'https://github.com/imaurelsan/360tranquilite',
    linkedSkills: [
      { title: 'Architecture web mutualisée (WordPress multisite)', path: '/competences/architecture-web-mutualisee' },
      { title: 'Sécurité applicative', path: '/competences/securite-applicative' },
      { title: 'Automatisation et amélioration continue', path: '/competences/automatisation-amelioration-continue' },
    ],
  },
  {
    slug: 'project-crewai-voyage',
    order: 'Réalisation détaillée 4/5',
    title: 'crewai-projet-agent-voyage',
    context:
      'Projet IA orienté planification de voyage pour produire des scénarios utiles et compréhensibles rapidement.',
    oralPitch: [
      'J\'ai lancé ce projet pour tester un cas d\'usage IA concret et mesurable.',
      'Le défi était de garder des réponses exploitables sans complexifier l\'expérience utilisateur.',
      'J\'ai structuré les cas d\'usage puis itéré sur la qualité des sorties.',
      'Le résultat est un prototype pertinent qui m\'a fait progresser sur le cadrage d\'un produit IA.',
    ],
    kpis: [
      {
        label: 'Pertinence des scénarios',
        value: 'En progression',
        impact: 'Meilleure adéquation entre demande utilisateur et réponse proposée.',
      },
      {
        label: 'Temps de génération',
        value: 'Rapide',
        impact: 'Expérience plus fluide lors des essais utilisateur.',
      },
    ],
    objectives: [
      'Structurer une logique d’assistance utilisateur.',
      'Produire des résultats exploitables sans complexité excessive.',
      'Tester un usage concret de l’IA dans un cadre produit.',
    ],
    steps: [
      'Définition des cas d’usage prioritaires.',
      'Structuration des agents et des prompts.',
      'Tests de cohérence des recommandations.',
      'Ajustements orientés lisibilité des réponses.',
    ],
    stakeholders: [
      'Développeur (moi) pour la conception et le cadrage.',
      'Utilisateurs cibles pour qualifier la pertinence des sorties.',
      'Encadrement projet pour arbitrer valeur/effort.',
    ],
    results: [
      'Prototype fonctionnel orienté usage.',
      'Amélioration de ma capacité à cadrer un projet IA appliqué.',
      'Capitalisation sur la communication de résultats techniques.',
    ],
    nextSteps: [
      'Renforcer la robustesse des scénarios limites.',
      'Travailler la fiabilité et la constance des réponses.',
    ],
    criticalView:
      'Le potentiel est fort, mais la qualité dépend de la précision du cadrage et des garde-fous ; c’est un axe d’amélioration continue.',
    repository: 'https://github.com/imaurelsan/crewai-projet-agent-voyage',
    linkedSkills: [
      { title: 'Analyse critique et prise de décision', path: '/competences/analyse-critique-decision-technique' },
      { title: 'Communication technique', path: '/competences/communication-technique' },
      { title: 'UX/UI orientée usage', path: '/competences/ux-ui-orientee-usage' },
    ],
  },
  {
    slug: 'project-v0-vastrion-mobile-prototype',
    order: 'Réalisation détaillée 5/5',
    title: 'v0-vastrion-mobile-prototype',
    context:
      'Prototype de marketplace B2B/B2C en cours de développement, avec un focus sur l’expérience mobile et la clarté du parcours.',
    oralPitch: [
      'J\'ai conçu ce prototype pour valider rapidement une vision produit de marketplace mobile.',
      'L\'objectif était de prioriser les parcours essentiels avant l\'industrialisation complète.',
      'J\'ai avancé par itérations UX/UI en gardant un cadre de décision pragmatique.',
      'Le prototype sert aujourd\'hui de base de discussion solide pour la feuille de route.',
    ],
    kpis: [
      {
        label: 'Parcours MVP couverts',
        value: 'Principaux parcours validés',
        impact: 'Vision produit clarifiée pour les prochaines étapes.',
      },
      {
        label: 'Lisibilité mobile',
        value: 'Bonne base',
        impact: 'Meilleure compréhension de l\'offre sur petit écran.',
      },
    ],
    objectives: [
      'Poser un socle produit exploitable rapidement.',
      'Valider les parcours principaux côté utilisateur.',
      'Préparer une montée en complexité progressive.',
    ],
    steps: [
      'Cadrage des parcours MVP.',
      'Conception des écrans clés.',
      'Itérations UI/UX sur retours initiaux.',
      'Préparation des prochaines briques fonctionnelles.',
    ],
    stakeholders: [
      'Développeur (moi) pour la réalisation prototype.',
      'Parties prenantes produit pour les priorités métier.',
      'Utilisateurs test pour le retour terrain.',
    ],
    results: [
      'Prototype cohérent pour présenter la vision produit.',
      'Consolidation de mes compétences en conception orientée usage.',
      'Base de discussion solide pour la suite du projet.',
    ],
    nextSteps: [
      'Approfondir les tests utilisateurs.',
      'Structurer la feuille de route technique moyen terme.',
    ],
    criticalView:
      'Le prototype répond à l’objectif de validation, mais je dois encore transformer cette base en architecture pleinement industrialisable.',
    repository: 'https://github.com/imaurelsan/v0-vastrion-mobile-prototype',
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
      @if (realisation; as project) {
        <header class="section-header">
          <p class="section-header__kicker">{{ project.order }}</p>
          <h1>{{ project.title }}</h1>
        </header>

        <article class="panel detail-block">
          <h2>Présentation et contexte</h2>
          <p>{{ project.context }}</p>
        </article>

        <div class="two-columns">
          <article class="panel detail-block">
            <h2>Comment expliquer cette réalisation en 4 phrases</h2>
            <ul class="detail-list">
              @for (line of project.oralPitch; track line) {
                <li>{{ line }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h2>Indicateurs et impacts (KPI)</h2>
            <div class="cards-grid metrics-grid">
              @for (kpi of project.kpis; track kpi.label) {
                <article class="card">
                  <h3>{{ kpi.label }}</h3>
                  <p class="metric-value">{{ kpi.value }}</p>
                  <p>{{ kpi.impact }}</p>
                </article>
              }
            </div>
          </article>
        </div>

        <div class="two-columns">
          <article class="panel detail-block">
            <h2>Objectifs et enjeux</h2>
            <ul class="detail-list">
              @for (item of project.objectives; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h2>Étapes de réalisation</h2>
            <ul class="detail-list">
              @for (item of project.steps; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>
        </div>

        <article class="panel detail-block">
          <h2>Acteurs et interactions</h2>
          <ul class="detail-list">
            @for (item of project.stakeholders; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <article class="panel detail-block">
          <h2>Résultats obtenus</h2>
          <ul class="detail-list">
            @for (item of project.results; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>

        <div class="two-columns">
          <article class="panel detail-block">
            <h2>Suites du projet</h2>
            <ul class="detail-list">
              @for (item of project.nextSteps; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>

          <article class="panel detail-block">
            <h2>Regard critique</h2>
            <p>{{ project.criticalView }}</p>
            <a class="card-link" [href]="project.repository" target="_blank" rel="noopener">Consulter le dépôt GitHub</a>
          </article>
        </div>

        <article class="panel detail-block">
          <h2>Compétences mobilisées</h2>
          <ul class="detail-list detail-list--links">
            @for (skill of project.linkedSkills; track skill.path) {
              <li>
                <a [href]="skill.path">{{ skill.title }}</a>
              </li>
            }
          </ul>
          <a class="card-link" href="/realisations">Retour à la vue des réalisations</a>
        </article>
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

  // Ici je charge la realisation via le slug URL pour garder une structure de pages detail uniforme.
  protected readonly realisation = REALISATIONS.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug')
  );
}
