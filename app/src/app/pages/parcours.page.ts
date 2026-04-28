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
        <h1>Mon évolution professionnelle et académique</h1>
      </header>

      <article class="detail-block detail-block--experience">
        <h2>Expériences en entreprise</h2>
        <ol class="journey-list">
          @for (item of experiences; track item.role + item.company) {
            <li class="journey-item">
              <div class="journey-item__logo">
                <p class="timeline__period">{{ item.period }}</p>
                @if (item.website) {
                  <a class="logo-chip" [href]="item.website" target="_blank" rel="noopener" [attr.aria-label]="'Site de ' + item.company">
                    <img [src]="item.logo" [alt]="'Logo ' + item.company" />
                  </a>
                } @else {
                  <div class="logo-chip">
                    <img [src]="item.logo" [alt]="'Logo ' + item.company" />
                  </div>
                }
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
                  <summary>Voir le détail <span class="journey-toggle-arrow" aria-hidden="true">→</span></summary>
                  <p class="card-meta-title">Responsabilité</p>
                  <p>{{ item.responsibility }}</p>
                  <p class="card-meta-title">Statut</p>
                  <p>{{ item.status }}</p>
                  <p class="card-meta-title">Détail des missions</p>
                  <ul class="detail-list">
                    @for (line of item.details; track line) {
                      <li [innerHTML]="line"></li>
                    }
                  </ul>
                  <p class="card-meta-title">Réalisations clés liées</p>
                  <ul class="detail-list detail-list--links">
                    @for (project of item.linkedProjects; track project.path) {
                      <li>
                        <a [href]="project.path">
                          {{ project.title }} <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    }
                  </ul>
                  <p class="card-meta-title">Compétences clés liées</p>
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

      <article class="detail-block detail-block--formation">
        <h2>Formations</h2>
        <ol class="journey-list">
          @for (item of formations; track item.degree + item.school) {
            <li class="journey-item journey-item--formation">
              <div class="journey-item__logo">
                <p class="timeline__period">{{ item.period }}</p>
                <a class="logo-chip" [href]="item.website" target="_blank" rel="noopener" [attr.aria-label]="'Site de ' + item.school">
                  <img [src]="item.logo" [alt]="'Logo ' + item.school" />
                </a>
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
                  <summary>Voir le détail <span class="journey-toggle-arrow" aria-hidden="true">→</span></summary>
                  @for (line of item.details; track line) {
                    <p>{{ line }}</p>
                  }
                </details>
              </div>
            </li>
          }
        </ol>
      </article>

      <article class="detail-block detail-block--certification">
        <h2>Tests et certifications</h2>
        <ul class="detail-list">
          @for (item of certificationsForDisplay; track item.title) {
            <li class="certification-item" [class.certification-item--single]="certificationsForDisplay.length === 1">
              <p class="certification-line certification-line--date">{{ item.date }}</p>
              <p class="certification-line certification-line--summary"><strong>{{ item.school }}</strong> — {{ item.title }}</p>
              @if (item.link) {
                <p class="certification-line certification-line--proof"><a [href]="item.link" target="_blank" rel="noopener">Voir la preuve →</a></p>
              } @else {
                <p class="certification-line certification-line--proof">Voir la preuve</p>
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
        'Développement fullstack d’un écosystème multisite : refonte complète du site <a href="https://formation.askida.fr/" target="_blank" rel="noopener">Aski-da Formation ↗</a>, conception de A à Z du site <a href="https://synergies.askida.fr/" target="_blank" rel="noopener">Aski-da Synergies ↗</a>, intégration API, création de plugins et de widgets WordPress sur mesure.',
        'Structuration technique du réseau WordPress du groupe, optimisation des workflows et conception de mini plugins open source pour automatiser les tâches récurrentes.',
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
        'Développement et lancement de plateformes LMS de A à Z : <a href="https://fon.empow-her.com/" target="_blank" rel="noopener">FON x Empow\'Her ↗</a> et <a href="https://fameproject.org/fr/" target="_blank" rel="noopener">FAME ↗</a>, avec pilotage des évolutions produit et coordination des parties prenantes.',
        'Optimisation des flux Airtable (SSO, API, automatisations), réduisant les temps de traitement de 25 % et améliorant la fiabilité des données.',
        'Pilotage du backlog digital et résolution de plus de 90 % des tickets confiés.',
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
        'Conception et développement de plus de 10 sites web responsifs, création d’identités visuelles complètes et accompagnement client sur leurs besoins digitaux.',
        'Production de maquettes, interfaces et supports graphiques <a href="https://yaurel.com/wp-content/uploads/2026/04/Design-Portfolio-Aurel-Yahouedeou.pdf" target="_blank" rel="noopener">sur mesure ↗</a>, avec une exigence forte de cohérence visuelle et d’expérience utilisateur.',
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
        'Réalisation de sites web, supports visuels et expériences UI pour des clients variés, avec une approche orientée usage et contraintes réelles.',
        'Prestations en audits sécurité, infographie et accompagnement digital, en autonomie complète sur la relation client et la livraison.',
      ],
      linkedProjects: [
        { title: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
        { title: 'Portfolio design AY Studio', path: 'https://yaurel.com/wp-content/uploads/2026/04/Design-Portfolio-Aurel-Yahouedeou.pdf' },
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
        'Configuration, supervision et maintenance d’un système de tracking GPS pour flottes de véhicules, avec gestion de la base clients.',
        'Optimisation des processus de suivi et résolution d’incidents techniques pour garantir la continuité de service.',
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
        'Participation à l’enrôlement national pour le Fichier Électoral, gestion des équipements et supervision du réseau sur les sites d’opération.',
        'Production et impression sécurisée des cartes électorales, avec contrôle qualité et gestion des flux de données.',
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
        'Collecte, consolidation et intégration des données électorales manquantes pour la mise à jour du Fichier Électoral National.',
        'Contribution à la préparation technique des législatives 2019, avec contrôle des données et support opérationnel.',
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
        'Installation et supervision du réseau physique et logique du centre, avec mise en place d’un système de sauvegardes fiable et incrémentiel.',
        'Support technique quotidien et optimisation de l’infrastructure pour améliorer la stabilité et la sécurité du réseau.',
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
        'L’ISCOD propose une pédagogie 100 % en ligne, très orientée projets et progression concrète. Cette approche "learning by doing" m’aide à relier chaque notion à une application directe.',
        'J’y renforce surtout l’autonomie, la rigueur et la discipline, des qualités essentielles pour progresser durablement en ingénierie logicielle.',
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
        'L’école adopte une pédagogie très pratique, basée sur des travaux dirigés et des mises en situation réelles. C’est cette approche qui m’a fait aimer la sécurité des réseaux et des SI.',
        'Ce cursus m’a aussi donné de la polyvalence technique et m’a poussé vers des sujets exigeants, comme la télégestion et la domotique autour d’un premier prototype autonome sous Arduino UNO.',
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
        'L’ESMT est une école spécialisée télécom et réseaux, avec une pédagogie exigeante et structurée. La Licence Pro m’a permis de consolider les fondamentaux : protocoles, services et administration d’infrastructures.',
        'J’y ai appris à travailler avec méthode sur des environnements techniques concrets, et à poser mes premières bases solides en développement.',
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
        'Le DTS en Téléinformatique à l’ESMT pose les bases de la communication numérique : câblage, protocoles, systèmes et interconnexions.',
        'Cette formation m’a donné le réflexe de comprendre comment cela fonctionne en dessous, réflexe que je conserve aujourd’hui en développement.',
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

  protected get certificationsForDisplay(): CertificationItem[] {
    return this.certifications.filter((item) => {
      const text = `${item.title} ${item.school ?? ''} ${item.date}`.toLowerCase();
      const hasRequiredFields = Boolean(item.date?.trim() && item.school?.trim() && item.title?.trim());
      const hasPlaceholder = /oblitel|placeholder|lorem ipsum|test\s*cert/i.test(text);
      return hasRequiredFields && !hasPlaceholder;
    });
  }
}
