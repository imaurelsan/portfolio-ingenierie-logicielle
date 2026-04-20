import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type SectionCard = {
  title: string;
  detail: string;
};

type EvolutionItem = {
  horizon: string;
  target: string;
  action: string;
};

type LinkedProject = {
  slug: string;
  title: string;
  why: string;
};

type CompetenceDetail = {
  slug: string;
  order: string;
  title: string;
  definition: string[];
  evidences: SectionCard[];
  results: SectionCard[];
  selfReview: string[];
  evolution: EvolutionItem[];
  projects: LinkedProject[];
};

const COMPETENCES: CompetenceDetail[] = [
  {
    slug: 'architecture-web-mutualisee',
    order: 'Compétence détaillée 1/10',
    title: 'Architecture web mutualisée (WordPress multisite)',
    definition: [
      'Je conçois une architecture où plusieurs sites partagent un socle technique commun avec une gouvernance claire.',
      "Dans mon contexte, ce choix répond à un besoin multi-projets : livrer plus vite sans augmenter la charge de maintenance.",
    ],
    evidences: [
      { title: 'Socle multisite', detail: 'Mise en place d’un cadre mutualisé pour standardiser les interventions.' },
      { title: 'Composants réutilisables', detail: 'Plugins et structures activables selon les besoins de chaque site.' },
    ],
    results: [
      { title: 'Maintenance', detail: 'Interventions transverses simplifiées sur plusieurs projets.' },
      { title: 'Cohérence', detail: 'Standards techniques plus stables entre les sites.' },
    ],
    selfReview: [
      'Mon niveau est avancé sur la structuration multisite et la réutilisabilité.',
      'Je dois encore automatiser davantage les contrôles avant production.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Renforcer la validation en CI/CD', action: 'Ajouter des contrôles qualité et sécurité systématiques.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Améliorer la résilience', action: 'Mettre en place rollback versionné et supervision centralisée.' },
    ],
    projects: [
      { slug: 'project-360-content-bridge', title: '360-content-bridge', why: 'Cas concret de maintenance mutualisée.' },
      { slug: 'project-360tranquilite', title: '360tranquilité', why: 'Renforcement de l’exploitation dans la durée.' },
    ],
  },
  {
    slug: 'developpement-plugins-wordpress',
    order: 'Compétence détaillée 2/10',
    title: 'Développement de plugins WordPress',
    definition: [
      'Je développe des plugins modulaires pour isoler la logique métier hors thème.',
      'Cette approche permet de réutiliser des fonctionnalités entre plusieurs projets.',
    ],
    evidences: [
      { title: '360-content-bridge', detail: 'Plugin d’import/export orienté fiabilité opérationnelle.' },
      { title: '360-media-auto-cleanup', detail: 'Plugin d’automatisation de maintenance médias.' },
    ],
    results: [
      { title: 'Réutilisation', detail: 'Développement accéléré grâce à des briques communes.' },
      { title: 'Maintenabilité', detail: 'Évolutions isolées sans impacter toute l’application.' },
    ],
    selfReview: [
      'Je suis autonome sur la structure d’un plugin et son cycle de vie.',
      'Je veux renforcer la couverture de tests et la documentation développeur.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Améliorer la qualité logicielle', action: 'Ajouter des tests sur les cas critiques.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Standardiser la maintenance', action: 'Documenter un template technique commun.' },
    ],
    projects: [
      { slug: 'project-360-content-bridge', title: '360-content-bridge', why: 'Exemple direct de plugin métier.' },
      { slug: 'project-360-media-auto-cleanup', title: '360-media-auto-cleanup', why: 'Automatisation orientée exploitation.' },
      { slug: 'project-360tranquilite', title: '360tranquilité', why: 'Plugin multi-modules de supervision.' },
    ],
  },
  {
    slug: 'integrations-api-rest',
    order: 'Compétence détaillée 3/10',
    title: 'Intégrations API REST et interconnexion services',
    definition: [
      'Je structure les échanges de données entre le front et les services back.',
      'Je m’appuie sur des contrats de données clairs pour limiter le couplage.',
    ],
    evidences: [
      { title: 'Architecture front/back', detail: 'Préparation d’un flux Angular vers WordPress via API REST.' },
      { title: 'Normalisation des données', detail: 'Définition de champs exploitables par plusieurs vues.' },
    ],
    results: [
      { title: 'Évolutivité', detail: 'Front et back peuvent évoluer plus indépendamment.' },
      { title: 'Interopérabilité', detail: 'Réutilisation des données sur différents écrans.' },
    ],
    selfReview: [
      'Je maîtrise les intégrations REST classiques en contexte applicatif.',
      'Je dois progresser sur le versionning d’API et la traçabilité des erreurs.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Renforcer la robustesse des appels', action: 'Ajouter une gestion d’erreurs et de repli plus explicite.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Stabiliser les contrats', action: 'Documenter les endpoints et conventions de version.' },
    ],
    projects: [
      { slug: 'project-360-content-bridge', title: '360-content-bridge', why: 'Échanges structurés entre composants.' },
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Interopérabilité attendue sur une marketplace.' },
    ],
  },
  {
    slug: 'performance-front-optimisation',
    order: 'Compétence détaillée 4/10',
    title: 'Performance web et optimisation front',
    definition: [
      'J’optimise le front pour améliorer le chargement et la fluidité.',
      'La performance est traitée comme un critère produit, pas uniquement technique.',
    ],
    evidences: [
      { title: 'Build production', detail: 'Pipeline Angular orientée bundle optimisé.' },
      { title: 'Composants homogènes', detail: 'Réutilisation de structures UI pour limiter la complexité.' },
    ],
    results: [
      { title: 'Expérience utilisateur', detail: 'Navigation plus fluide sur desktop et mobile.' },
      { title: 'Stabilité de livraison', detail: 'Optimisations déployées de façon reproductible.' },
    ],
    selfReview: [
      'Je suis opérationnel sur les optimisations front les plus utiles en production.',
      'Je dois systématiser les seuils de performance dans la CI.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Mesurer régulièrement les performances', action: 'Ajouter une checklist Lighthouse avant release.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Réduire les régressions', action: 'Introduire des garde-fous automatiques dans la pipeline.' },
    ],
    projects: [
      { slug: 'project-360-media-auto-cleanup', title: '360-media-auto-cleanup', why: 'Réduction du poids inutile côté médias.' },
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Prototype mobile orienté rapidité.' },
    ],
  },
  {
    slug: 'securite-applicative',
    order: 'Compétence détaillée 5/10',
    title: 'Sécurité applicative et durcissement WordPress',
    definition: [
      'Je mets en place des mécanismes de protection, détection et contrôle adaptés au contexte.',
      'Je privilégie une approche progressive et réversible en production.',
    ],
    evidences: [
      { title: '360tranquilité', detail: 'Modules de sécurité et supervision orientés exploitation.' },
      { title: 'Hygiène de release', detail: 'Contrôles de base intégrés au cycle de livraison.' },
    ],
    results: [
      { title: 'Réduction des risques', detail: 'Moins d’exposition aux erreurs de configuration.' },
      { title: 'Réactivité', detail: 'Meilleure capacité de diagnostic en cas d’incident.' },
    ],
    selfReview: [
      'Je maîtrise les fondamentaux de sécurité applicative sur WordPress.',
      'Je veux renforcer la formalisation des scénarios de réponse incident.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Mieux standardiser les vérifications', action: 'Définir une checklist sécurité par release.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Monter en détection proactive', action: 'Améliorer la supervision et les alertes exploitables.' },
    ],
    projects: [
      { slug: 'project-360tranquilite', title: '360tranquilité', why: 'Projet principal lié à cette compétence.' },
    ],
  },
  {
    slug: 'gestion-projet-agile',
    order: 'Compétence détaillée 6/10',
    title: 'Gestion de projet agile et priorisation',
    definition: [
      'Je pilote le projet en itérations courtes avec des priorités orientées valeur.',
      'Je garde une trajectoire claire malgré les imprévus techniques.',
    ],
    evidences: [
      { title: 'Découpage par jalons', detail: 'Planification progressive design, pages, CI/CD, stabilisation.' },
      { title: 'Arbitrage pragmatique', detail: 'Priorisation des éléments indispensables à la soutenance.' },
    ],
    results: [
      { title: 'Visibilité', detail: 'Roadmap plus lisible pour suivre l’avancement.' },
      { title: 'Livraison incrémentale', detail: 'Chaque phase produit une valeur présentable.' },
    ],
    selfReview: [
      'Je tiens bien les priorités quand le contexte bouge rapidement.',
      'Je dois mieux formaliser les rétrospectives pour capitaliser.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Mieux tracer les décisions', action: 'Journaliser les arbitrages fonctionnels et techniques.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Améliorer la prédictibilité', action: 'Suivre des indicateurs de charge et de vélocité.' },
    ],
    projects: [
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Projet en cours à pilotage adaptatif.' },
      { slug: 'project-360tranquilite', title: '360tranquilité', why: 'Évolutions progressives par incréments.' },
    ],
  },
  {
    slug: 'communication-technique',
    order: 'Compétence détaillée 7/10',
    title: 'Communication technique avec parties prenantes',
    definition: [
      'Je transforme les choix techniques en messages compréhensibles pour des profils non techniques.',
      'Cela facilite l’alignement entre contraintes métier et implémentation.',
    ],
    evidences: [
      { title: 'Documentation structurée', detail: 'Rédaction de plans et guides orientés décision.' },
      { title: 'Argumentaire oral', detail: 'Explication simple de l’architecture en 5 phrases.' },
    ],
    results: [
      { title: 'Alignement', detail: 'Décisions techniques mieux comprises et mieux acceptées.' },
      { title: 'Moins d’ambiguïtés', detail: 'Réduction des allers-retours sur les attentes.' },
    ],
    selfReview: [
      'Je suis à l’aise sur la vulgarisation technique sans perdre la rigueur.',
      'Je dois encore standardiser mes supports de communication.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Uniformiser les supports', action: 'Créer un format type pour enjeux, risques et décisions.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Renforcer la coordination', action: 'Mettre en place des points techniques réguliers.' },
    ],
    projects: [
      { slug: 'project-360-content-bridge', title: '360-content-bridge', why: 'Nécessite cadrage et pédagogie technique.' },
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Contexte d’arbitrages fréquents.' },
    ],
  },
  {
    slug: 'ux-ui-orientee-usage',
    order: 'Compétence détaillée 8/10',
    title: 'UX/UI orientée usage et accessibilité',
    definition: [
      'Je conçois des interfaces lisibles, cohérentes et orientées objectifs utilisateur.',
      'Je veille à l’accessibilité de base et à la clarté du parcours.',
    ],
    evidences: [
      { title: 'Design system portfolio', detail: 'Mise en place de styles cohérents et composants réutilisables.' },
      { title: 'Navigation explicite', detail: 'Liens croisés compétences et réalisations pour guider la lecture.' },
    ],
    results: [
      { title: 'Lisibilité', detail: 'Contenu plus facile à comprendre pour le jury.' },
      { title: 'Cohérence', detail: 'Expérience homogène sur toutes les pages.' },
    ],
    selfReview: [
      'Je produis des interfaces propres et structurées.',
      'Je dois approfondir les tests utilisateurs et l’accessibilité avancée.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Renforcer l’accessibilité', action: 'Contrôler systématiquement clavier, aria et contrastes.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Valider davantage par l’usage', action: 'Recueillir des retours et itérer sur les pages clés.' },
    ],
    projects: [
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Prototype très orienté expérience utilisateur.' },
      { slug: 'project-crewai-voyage', title: 'crewai-projet-agent-voyage', why: 'Nécessité de simplifier des parcours complexes.' },
    ],
  },
  {
    slug: 'automatisation-amelioration-continue',
    order: 'Compétence détaillée 9/10',
    title: 'Automatisation et amélioration continue',
    definition: [
      'J’automatise les tâches répétitives pour réduire les erreurs manuelles.',
      'Je transforme les incidents en améliorations concrètes du process.',
    ],
    evidences: [
      { title: 'CI/CD Hostinger', detail: 'Build et déploiement automatisés depuis GitHub Actions.' },
      { title: 'Stabilisation workflow', detail: 'Ajustements successifs pour rendre le pipeline plus robuste.' },
    ],
    results: [
      { title: 'Fiabilité', detail: 'Mises en ligne plus reproductibles.' },
      { title: 'Productivité', detail: 'Moins de temps perdu sur les opérations manuelles.' },
    ],
    selfReview: [
      'Je suis efficace sur l’automatisation utile en contexte projet.',
      'Je dois encore améliorer les vérifications post-déploiement.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Stabiliser totalement la chaîne', action: 'Conserver des checks robustes et explicites.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Mesurer la qualité opérationnelle', action: 'Ajouter des indicateurs de suivi de release.' },
    ],
    projects: [
      { slug: 'project-360tranquilite', title: '360tranquilité', why: 'Automatisation orientée exploitation.' },
      { slug: 'project-360-media-auto-cleanup', title: '360-media-auto-cleanup', why: 'Automatisation de tâches récurrentes.' },
    ],
  },
  {
    slug: 'analyse-critique-decision-technique',
    order: 'Compétence détaillée 10/10',
    title: 'Analyse critique et prise de décision technique',
    definition: [
      'J’évalue les options selon coûts, délais, risques et maintenabilité.',
      'Je privilégie des choix défendables à l’oral et viables en production.',
    ],
    evidences: [
      { title: 'Choix d’architecture', detail: 'Décision Angular + WordPress + Hostinger argumentée par la problématique.' },
      { title: 'Arbitrage CI/CD', detail: 'Simplification du workflow pour renforcer la robustesse réelle.' },
    ],
    results: [
      { title: 'Décisions traçables', detail: 'Chaque arbitrage est justifiable devant le jury.' },
      { title: 'Risque maîtrisé', detail: 'Compromis explicites avant implémentation.' },
    ],
    selfReview: [
      'Je tranche vite sans perdre la vision d’ensemble.',
      'Je dois renforcer l’usage d’indicateurs chiffrés dans mes décisions.',
    ],
    evolution: [
      { horizon: 'Court terme (3 mois)', target: 'Mieux mesurer les choix', action: 'Associer un KPI à chaque décision structurante.' },
      { horizon: 'Moyen terme (6-12 mois)', target: 'Capitaliser davantage', action: 'Constituer un historique de décisions et impacts.' },
    ],
    projects: [
      { slug: 'project-crewai-voyage', title: 'crewai-projet-agent-voyage', why: 'Arbitrages entre valeur, effort et expérience.' },
      { slug: 'project-v0-vastrion-mobile-prototype', title: 'v0-vastrion-mobile-prototype', why: 'Décisions progressives dans un contexte de prototype.' },
    ],
  },
];

@Component({
  selector: 'app-competence-detail-page',
  template: `
    <section class="page-section">
      @if (competence; as skill) {
        <header class="section-header">
          <p class="section-header__kicker">{{ skill.order }}</p>
          <h1>{{ skill.title }}</h1>
        </header>

        <article class="panel detail-block">
          <h2>Définition contextualisée et actualité</h2>
          @for (paragraph of skill.definition; track paragraph) {
            <p>{{ paragraph }}</p>
          }
        </article>

        <article class="panel detail-block">
          <h2>Preuves concrètes</h2>
          <div class="cards-grid">
            @for (item of skill.evidences; track item.title) {
              <article class="card">
                <h3>{{ item.title }}</h3>
                <p>{{ item.detail }}</p>
              </article>
            }
          </div>
        </article>

        <article class="panel detail-block">
          <h2>Résultats mesurables et valeur ajoutée</h2>
          <div class="cards-grid metrics-grid">
            @for (item of skill.results; track item.title) {
              <article class="card">
                <h3>{{ item.title }}</h3>
                <p class="metric-value">{{ item.detail }}</p>
              </article>
            }
          </div>
        </article>

        <div class="two-columns">
          <article class="panel detail-block">
            <h2>Autocritique</h2>
            @for (paragraph of skill.selfReview; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </article>

          <article class="panel detail-block">
            <h2>Évolution cible</h2>
            <ul class="detail-list">
              @for (item of skill.evolution; track item.horizon) {
                <li>
                  <strong>{{ item.horizon }}</strong>
                  <p>{{ item.target }}</p>
                  <p>{{ item.action }}</p>
                </li>
              }
            </ul>
          </article>
        </div>

        <article class="panel detail-block">
          <h2>Réalisations liées</h2>
          <ul class="detail-list detail-list--links">
            @for (project of skill.projects; track project.slug) {
              <li>
                <a [href]="'/realisations/' + project.slug">{{ project.title }}</a>
                <p>{{ project.why }}</p>
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

  // Ici je charge la competence depuis le slug URL pour eviter de maintenir 10 composants distincts.
  protected readonly competence = COMPETENCES.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug')
  );
}
