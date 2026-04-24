import { Component } from '@angular/core';

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  city: string;
  website?: string;
  logo: string;
  responsibility: string;
  status: string;
  details: string[];
  linkedProjects: Array<{ title: string; path: string }>;
  linkedSkills: Array<{ title: string; path: string }>;
};

type FormationItem = {
  period: string;
  degree: string;
  school: string;
  city: string;
  website: string;
  logo: string;
  details: string[];
};

type CertificationItem = {
  date: string;
  title: string;
  link?: string;
  school?: string;
  logo?: string;
};

@Component({
  selector: 'app-parcours-page',
  template: `
    <section class="page-section">
      <header class="section-header">
        <p class="section-header__kicker">Parcours</p>
        <h1>Frise anti-chronologique de mon évolution</h1>
      </header>

      <article class="panel detail-block detail-block--experience">
        <h2>Expériences en entreprise</h2>
        <ol class="journey-list">
          @for (item of experiences; track item.role + item.company) {
            <li class="journey-item">
              <div class="journey-item__logo">
                <div class="logo-chip">
                  <img [src]="item.logo" [alt]="'Logo ' + item.company" />
                </div>
                <p class="timeline__period">{{ item.period }}</p>
              </div>

              <div class="journey-item__content">
                <div class="journey-item__summary">
                  <h3>{{ item.role }}</h3>
                  <div class="journey-item__place">
                    @if (item.website) {
                      <a [href]="item.website" target="_blank" rel="noopener">{{ item.company }}</a>
                    } @else {
                      <span>{{ item.company }}</span>
                    }
                    <span>{{ item.city }}</span>
                  </div>
                </div>

                <details class="journey-item__details">
                  <summary>Voir le détail de l'expérience</summary>
                  <p><strong>Responsabilité :</strong> {{ item.responsibility }}</p>
                  <p><strong>Statut :</strong> {{ item.status }}</p>
                  <ul class="detail-list">
                    @for (line of item.details; track line) {
                      <li>{{ line }}</li>
                    }
                  </ul>
                  <p class="card-meta-title">Réalisations liées</p>
                  <ul class="detail-list detail-list--links">
                    @for (project of item.linkedProjects; track project.path) {
                      <li>
                        <a [href]="project.path">{{ project.title }}</a>
                      </li>
                    }
                  </ul>
                  <p class="card-meta-title">Compétences liées</p>
                  <ul class="detail-list detail-list--links">
                    @for (skill of item.linkedSkills; track skill.path) {
                      <li>
                        <a [href]="skill.path">{{ skill.title }}</a>
                      </li>
                    }
                  </ul>
                </details>
              </div>
            </li>
          }
        </ol>
      </article>

      <article class="panel detail-block detail-block--formation">
        <h2>Formations</h2>
        <ol class="journey-list">
          @for (item of formations; track item.degree + item.school) {
            <li class="journey-item">
              <div class="journey-item__logo">
                <div class="logo-chip">
                  <img [src]="item.logo" [alt]="'Logo ' + item.school" />
                </div>
                <p class="timeline__period">{{ item.period }}</p>
              </div>

              <div class="journey-item__content">
                <div class="journey-item__summary">
                  <h3>{{ item.degree }}</h3>
                  <div class="journey-item__place">
                    <a [href]="item.website" target="_blank" rel="noopener">{{ item.school }}</a>
                    <span>{{ item.city }}</span>
                  </div>
                </div>

                <details class="journey-item__details">
                  <summary>Voir le détail de la formation</summary>
                  <ul class="detail-list">
                    @for (line of item.details; track line) {
                      <li>{{ line }}</li>
                    }
                  </ul>
                </details>
              </div>
            </li>
          }
        </ol>
      </article>

      <article class="panel detail-block detail-block--certification">
        <h2>Tests et certifications</h2>
        <ul class="detail-list">
          @for (item of certifications; track item.title) {
            <li class="certification-item">
              <strong>{{ item.date }}</strong>
              @if (item.link) {
                <p><a [href]="item.link" target="_blank" rel="noopener">{{ item.title }}</a></p>
              } @else {
                <p>{{ item.title }}</p>
              }
              @if (item.school) {
                <p class="certification-school">{{ item.school }}</p>
              }
              @if (item.logo) {
                <div class="certification-logo">
                  <img [src]="item.logo" [alt]="'Logo ' + (item.school || 'Établissement')" />
                </div>
              }
            </li>
          }
        </ul>
      </article>
    </section>
  `,
})
export class ParcoursPage {
  protected readonly experiences: ExperienceItem[] = [
    {
      period: 'Août 2025 - Août 2026',
      role: 'Alternance : Développeur Web Fullstack',
      company: 'ASKI-DA Group',
      city: 'Paris / Issy-les-Moulineaux, France',
      website: 'https://askida.fr/',
      logo: 'assets/images/entreprises/1-logo-askida-group.png',
      responsibility: 'Développement fullstack et structuration de l’écosystème web.',
      status: 'Alternant',
      details: [
        'Architecture et administration d’un réseau WordPress multisite.',
        'Refonte de plateformes et intégrations API.',
        'Développement de plugins et widgets WordPress sur mesure.',
      ],
      linkedProjects: [
        { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
        { title: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
        { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      ],
      linkedSkills: [
        { title: 'Architecture web mutualisée', path: '/competences/architecture-web-mutualisee' },
        { title: 'Développement de plugins WordPress', path: '/competences/developpement-plugins-wordpress' },
      ],
    },
    {
      period: 'Mai 2024 - Juillet 2025',
      role: 'Alternance : Chef de projets Web',
      company: "Empow'Her Global",
      city: 'Paris, France',
      website: 'https://empow-her.com/',
      logo: 'assets/images/entreprises/2-logo-empowher-global.png',
      responsibility: 'Pilotage de plateformes web et coordination fonctionnelle.',
      status: 'Alternant',
      details: [
        'Développement et lancement de plateformes à partir de zéro.',
        'Co-pilotage de nouvelles évolutions produit.',
        'Optimisation de process et réduction des délais de traitement.',
      ],
      linkedProjects: [
        { title: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
      ],
      linkedSkills: [
        { title: 'Gestion de projet agile', path: '/competences/gestion-projet-agile' },
        { title: 'Communication technique', path: '/competences/communication-technique' },
      ],
    },
    {
      period: 'Septembre 2021 - Mai 2023',
      role: 'CDD : Concepteur développeur web & designer UI/UX',
      company: 'Agence YELE',
      city: 'Dakar, Sénégal',
      website: 'http://agenceyele.com/',
      logo: 'assets/images/entreprises/3-logo-agence-yele.png',
      responsibility: 'Conception web, identité visuelle et delivery client.',
      status: 'CDD',
      details: [
        'Développement de sites web responsifs.',
        'Conception d’identités visuelles complètes.',
        'Livraison de sites et supports digitaux sur mesure.',
      ],
      linkedProjects: [
        { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      ],
      linkedSkills: [
        { title: 'UX/UI orientée usage', path: '/competences/ux-ui-orientee-usage' },
      ],
    },
    {
      period: 'Août 2020 - 2023',
      role: 'Entreprise individuelle digitale',
      company: 'AY Studio',
      city: 'Dakar, Sénégal',
      website: 'https://yaurel.com/',
      logo: 'assets/images/entreprises/4-logo-ay-studio.png',
      responsibility: 'Conception de solutions web et production de contenus digitaux.',
      status: 'Indépendant',
      details: [
        'Création de sites, supports visuels et expériences UI.',
        'Conseil technique et accompagnement client.',
        'Développement de solutions adaptées aux contraintes réelles.',
      ],
      linkedProjects: [
        { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      ],
      linkedSkills: [
        { title: 'Communication technique', path: '/competences/communication-technique' },
        { title: 'Analyse critique et prise de décision', path: '/competences/analyse-critique-decision-technique' },
      ],
    },
    {
      period: 'Août 2019 - Juillet 2021',
      role: 'CDI : Administrateur système de tracking',
      company: 'Master Soft',
      city: 'Cotonou, Bénin',
      website: 'http://mastertrackers.fr/',
      logo: 'assets/images/entreprises/5-logo-master-soft.png',
      responsibility: 'Administration réseau/système et supervision de la donnée.',
      status: 'CDI',
      details: [
        'Configuration de balises GPS pour véhicules.',
        'Supervision de bases de données client.',
        'Maintenance de la disponibilité des services.',
      ],
      linkedProjects: [
        { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      ],
      linkedSkills: [
        { title: 'Sécurité applicative', path: '/competences/securite-applicative' },
      ],
    },
    {
      period: 'Octobre 2018 - Mai 2019',
      role: 'CDD : Ingénieur réseaux et systèmes',
      company: 'A.N.T Bénin',
      city: 'Cotonou, Bénin',
      logo: 'assets/images/entreprises/6-logo-ant-benin.png',
      responsibility: 'Appui technique sur des opérations nationales à forte exigence.',
      status: 'CDD',
      details: [
        'Enrôlement des populations dans un fichier électoral national.',
        'Conception et impression des cartes électorales.',
        'Contribution aux opérations de sécurisation des données.',
      ],
      linkedProjects: [
        { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      ],
      linkedSkills: [
        { title: 'Sécurité applicative', path: '/competences/securite-applicative' },
      ],
    },
    {
      period: 'Juillet 2018 - Janvier 2019',
      role: 'CDD : Ingénieur réseaux et systèmes',
      company: 'COS LEPI',
      city: 'Cotonou, Bénin',
      website: 'https://anip.bj/',
      logo: 'assets/images/entreprises/7-logo-cos-lepi.png',
      responsibility: 'Exploitation réseau/système et consolidation de données électorales.',
      status: 'CDD',
      details: [
        'Collecte et consolidation de données électorales.',
        'Actualisation des informations F.E.N selon les évolutions législatives.',
        'Contribution à la fiabilité du traitement opérationnel.',
      ],
      linkedProjects: [
        { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      ],
      linkedSkills: [
        { title: 'Analyse critique et prise de décision', path: '/competences/analyse-critique-decision-technique' },
      ],
    },
    {
      period: 'Juin 2018 - Août 2018',
      role: 'Stage pro : Assistant ingénieur réseaux',
      company: 'AGORA CENTER',
      city: 'Dakar, Sénégal',
      website: 'https://agora-center.com/',
      logo: 'assets/images/entreprises/8-logo-agora-center.png',
      responsibility: 'Mise en œuvre de règles de sécurité physique et logique.',
      status: 'Stagiaire',
      details: [
        'Définition et application de règles de sécurité.',
        'Installation et supervision des serveurs.',
        'Support opérationnel aux équipes techniques.',
      ],
      linkedProjects: [
        { title: '360tranquilité', path: '/realisations/project-360tranquilite' },
      ],
      linkedSkills: [
        { title: 'Sécurité applicative', path: '/competences/securite-applicative' },
      ],
    },
  ];

  protected readonly formations: FormationItem[] = [
    {
      period: '2024 - 2026',
      degree: 'Mastère : Expert en Ingénierie du Logiciel',
      school: 'ISCOD',
      city: 'Paris, France',
      website: 'https://www.iscod.fr/',
      logo: 'assets/images/formations/1-logo-iscod.png',
      details: [
        'Montée en compétences sur architecture logicielle, industrialisation et pilotage projet.',
        'Approche orientée pratique: cas réels, argumentation, soutenance, amélioration continue.',
      ],
    },
    {
      period: '2015 - 2017',
      degree: 'Master : Ingénierie Réseaux, Systèmes et Sécurité',
      school: 'SUP-DE-CO',
      city: 'Dakar, Sénégal',
      website: 'https://supdeco.sn/',
      logo: 'assets/images/formations/2-logo-supdeco-dakar.png',
      details: [
        'Socle solide en sécurité avancée, systèmes, réseaux et administration.',
        'Formation déterminante pour mon orientation actuelle en ingénierie logicielle fiable.',
      ],
    },
    {
      period: '2014 - 2015',
      degree: 'Licence Pro : Réseaux et Services',
      school: 'E.S.M.T',
      city: 'Dakar, Sénégal',
      website: 'https://www.esmt.sn/',
      logo: 'assets/images/formations/3-logo-esmt-dakar.png',
      details: [
        'Approche technique polyvalente: réseaux, sécurité, bases de données et systèmes.',
        'Consolidation d’une culture opérationnelle directement utile en entreprise.',
      ],
    },
    {
      period: '2013 - 2014',
      degree: 'DTS : Téléinformatique',
      school: 'E.S.M.T',
      city: 'Dakar, Sénégal',
      website: 'https://www.esmt.sn/',
      logo: 'assets/images/formations/3-logo-esmt-dakar.png',
      details: [
        'Fondamentaux techniques en informatique, algorithmique, réseaux et électronique.',
        'Base structurante de ma discipline technique et de ma méthode de travail.',
      ],
    },
  ];

  protected readonly certifications: CertificationItem[] = [
    {
      date: '2023',
      title: 'Certification : Développement Web et Web Mobile (RNCP37674).',
      school: 'EDUCATEL',
      logo: 'assets/images/formations/4-logo-educatel.png',
      link: 'https://www.educatel.fr/formation/web-informatique/developpeur-web',
    },
  ];
}
