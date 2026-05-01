import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { COMPETENCES } from './pages/competence-detail.page';
import { REALISATIONS } from './pages/realisation-detail.page';

type NavLink = {
  label: string;
  path: string;
  iconPath: string;
  children?: Array<{ label: string; path: string; queryParams?: Record<string, string> }>;
};

type MobileNavLink = {
  label: string;
  path: string;
  iconPath: string;
  iconViewBox?: string;
  exact?: boolean;
};

type SearchResult = {
  label: string;
  path: string;
  keywords: string[];
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);

  @ViewChild('quicknavpanel') private readonly quickNavPanel?: ElementRef<HTMLElement>;
  @ViewChild('quicknavinput') private readonly quickNavInput?: ElementRef<HTMLInputElement>;
  @ViewChild('searchtogglebtn') private readonly searchToggleBtn?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobilesearchtogglebtn') private readonly mobileSearchToggleBtn?: ElementRef<HTMLButtonElement>;
  @ViewChild('mainnavpanel') private readonly mainNavPanel?: ElementRef<HTMLElement>;
  @ViewChild('navtogglebtn') private readonly navToggleBtn?: ElementRef<HTMLButtonElement>;

  // Ici je centralise la navigation pour garder un menu lisible et facile a maintenir.
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil', path: '/', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { label: 'Qui suis-je ?', path: '/presentation', iconPath: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25S13.24 11.25 12 11.25 9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 16H7v-.75c0-1.66 2.24-3 5-3s5 1.34 5 3V16z' },
    {
      label: 'Compétences',
      path: '/competences',
      iconPath: 'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z',
      children: [
        { label: 'Techniques', path: '/competences', queryParams: { filter: 'Techniques' } },
        { label: 'Humaines', path: '/competences', queryParams: { filter: 'Humaines' } },
      ],
    },
    {
      label: 'Réalisations',
      path: '/realisations',
      iconPath: 'M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5zm8 13H4V9h16v9z',
      children: [
        { label: 'Toutes les réalisations', path: '/realisations' },
        { label: '360 Content Bridge', path: '/realisations/project-360-content-bridge' },
        { label: '360 Media Auto Cleanup', path: '/realisations/project-360-media-auto-cleanup' },
        { label: '360 Tranquillité', path: '/realisations/project-360tranquilite' },
        { label: 'CrewAI Agent de voyage', path: '/realisations/project-crewai-voyage' },
        { label: 'V0 Vastrion Mobile Prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      ],
    },
    { label: 'Parcours', path: '/parcours', iconPath: 'M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 12.36 8 12.18 8 12c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 11.35 19 11.18 19 11c0-1.1.9-2 2-2s2 .9 2 2z' },
  ];

  // Barre mobile: icones explicites par section + acces direct au contact.
  protected readonly mobileNavLinks: MobileNavLink[] = [
    {
      label: 'Accueil',
      path: '/',
      exact: true,
      iconViewBox: '0 -960 960 960',
      iconPath: 'M240-120q-50 0-85-35t-35-85v-240q0-24 9-46t26-39l240-240q17-18 39.5-26.5T480-840q23 0 45 8.5t40 26.5l30 30-315 315v180h400v-180L536-604l115-114 154 153q17 17 26 39t9 46v240q0 50-35 85t-85 35H240Z'
    },
    {
      label: 'Qui suis-je ?',
      path: '/presentation',
      iconViewBox: '0 -960 960 960',
      iconPath: 'M555-435q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35ZM400-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T640-360q56 0 106.5 13.5T842-306q18 11 28 30t10 40v76H400ZM120-400v-80h320v80H120Zm0-320v-80h480v80H120Zm324 160H120v-80h360q-14 17-22.5 37T444-560Z'
    },
    {
      label: 'Compétences',
      path: '/competences',
      iconViewBox: '0 -960 960 960',
      iconPath: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v200H600q-100 0-170 70t-70 170v40H160ZM584-56 440-200l144-144 56 57-87 87 87 87-56 57Zm192 0-56-57 87-87-87-87 56-57 144 144L776-56Z'
    },
    {
      label: 'Réalisations',
      path: '/realisations',
      iconViewBox: '0 -960 960 960',
      iconPath: 'M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z'
    },
    {
      label: 'Parcours',
      path: '/parcours',
      iconViewBox: '0 -960 960 960',
      iconPath: 'M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z'
    },
    {
      label: 'Contact',
      path: '/contact',
      iconViewBox: '0 -960 960 960',
      iconPath: 'M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm160-320h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z'
    },
  ];

  // Ici je pilote l'ouverture du menu mobile (hamburger) sans impacter l'affichage desktop.
  protected isMobileNavOpen = false;

  // J'affiche l'annee courante automatiquement pour eviter les oublis de mise a jour manuelle.
  protected readonly currentYear = new Date().getFullYear();

  protected isLightTheme = false;
  protected currentPath = this.normalizePath(this.router.url);
  protected isQuickNavOpen = false;
  protected quickNavQuery = '';

  // Index de recherche base sur le contenu du site (pages + details competences/realisations).
  protected readonly searchDatabase: SearchResult[] = this.buildSearchDatabase();

  constructor() {
    // A chaque navigation, on synchronise l'etat UI pour repartir d'une base propre.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentPath = this.normalizePath(event.urlAfterRedirects);
        this.closeQuickNav();
        this.closeMobileNav();
      });

    // Le theme persiste en local pour conserver la preference entre deux sessions.
    const savedTheme = localStorage.getItem('portfolio-theme');
    this.isLightTheme = savedTheme !== 'dark';
    this.applyTheme();
  }

  protected get isHomePage(): boolean {
    return this.currentPath === '/';
  }

  protected get isContactPage(): boolean {
    return this.currentPath === '/contact';
  }

  protected isSubmenuParentActive(path: string): boolean {
    if (path === '/') {
      return this.currentPath === '/';
    }
    return this.currentPath === path || this.currentPath.startsWith(path + '/');
  }

  protected get quickNavResults(): SearchResult[] {
    const normalized = this.normalizeText(this.quickNavQuery);
    if (!normalized) {
      return [];
    }

    const tokens = normalized.split(/\s+/).filter((token) => token.length >= 2);
    if (tokens.length === 0) {
      return [];
    }

    return this.searchDatabase
      .map((result) => ({ result, score: this.scoreResult(result, tokens) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ result }) => result);
  }

  protected toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  protected closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }

  protected openQuickNav(): void {
    this.closeMobileNav();
    this.isQuickNavOpen = true;

    // Focus auto du champ apres rendu pour permettre de taper immediatement.
    setTimeout(() => {
      this.quickNavInput?.nativeElement.focus();
    }, 0);
  }

  protected closeQuickNav(): void {
    this.isQuickNavOpen = false;
    this.quickNavQuery = '';
  }

  protected onQuickNavInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.quickNavQuery = input.value;
  }

  protected onQuickNavSelect(): void {
    this.closeQuickNav();
    this.closeMobileNav();
  }

  protected toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    this.applyTheme();
    localStorage.setItem('portfolio-theme', this.isLightTheme ? 'light' : 'dark');
  }

  private applyTheme(): void {
    // Le style est pilote par une classe body afin de laisser le CSS gerer toutes les variantes.
    document.body.classList.toggle('theme-light', this.isLightTheme);
  }

  @HostListener('document:keydown.escape')
  protected onEscapeKey(): void {
    this.closeQuickNav();
    this.closeMobileNav();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;

    if (this.isQuickNavOpen) {
      const isInsideQuickNav = !!this.quickNavPanel?.nativeElement.contains(target);
      const isOnSearchButton = !!this.searchToggleBtn?.nativeElement.contains(target);
      const isOnMobileSearchButton = !!this.mobileSearchToggleBtn?.nativeElement.contains(target);
      if (!isInsideQuickNav && !isOnSearchButton && !isOnMobileSearchButton) {
        this.closeQuickNav();
      }
    }

    if (this.isMobileNavOpen) {
      const isInsideMobileNav = !!this.mainNavPanel?.nativeElement.contains(target);
      const isOnNavButton = !!this.navToggleBtn?.nativeElement.contains(target);
      if (!isInsideMobileNav && !isOnNavButton) {
        this.closeMobileNav();
      }
    }
  }

  private scoreResult(result: SearchResult, tokens: string[]): number {
    // Score simple mais efficace: label prioritaire, puis mots-cles exacts/prefixes/partiels.
    const normalizedLabel = this.normalizeText(result.label);
    const normalizedKeywords = result.keywords.map((keyword) => this.normalizeText(keyword));
    let score = 0;

    for (const token of tokens) {
      if (normalizedLabel.includes(token)) {
        score += 4;
      }

      for (const keyword of normalizedKeywords) {
        if (keyword === token) {
          score += 6;
        } else if (keyword.startsWith(token)) {
          score += 4;
        } else if (keyword.includes(token)) {
          score += 2;
        }
      }
    }

    return score;
  }

  private buildSearchDatabase(): SearchResult[] {
    const staticEntries: SearchResult[] = [
      {
        label: 'Accueil',
        path: '/',
        keywords: this.collectKeywords([
          'accueil', 'hero', 'portfolio', 'ingenierie logicielle', 'projets de reference',
          'angles', 'preuves', 'architecture', 'industrialisation', 'impact', 'aurel yahouedeou',
          'developpeur fullstack junior', 'en savoir plus', 'ma facon d intervenir',
          'projets recents', 'chaque projet illustre un probleme reel et la decision qui l a resolu',
          'je ne cherche pas a impressionner par la complexite', 'je cherche a convaincre par la clarte',
          'entrer en relation', 'voir mon parcours',
        ]),
      },
      {
        label: 'Qui suis-je ?',
        path: '/presentation',
        keywords: this.collectKeywords([
          'presentation', 'qui suis je', 'profil', 'valeurs', 'positionnement', 'parcours',
          'forces', 'interets', 'ui ux', 'design', 'photographie',
          'mon positionnement professionnel', 'en quelques mots', 'mes valeurs', 'mon projet',
          'mes qualites humaines', 'mes centres d interet', 'recherche et developpement',
          'veille technologique', 'ia appliquee', 'optimisation web', 'cyber securite',
          'je recherche un environnement', 'produits utiles lisibles et maintenables',
        ]),
      },
      {
        label: 'Parcours',
        path: '/parcours',
        keywords: this.collectKeywords([
          'parcours', 'experiences', 'formations', 'certifications', 'iscod', 'educatel',
          'esmt', 'master soft', 'aski da', 'empowher',
          'evolution professionnelle et academique', 'experiences en entreprise',
          'tests et certifications', 'developpeur web fullstack', 'chef de projets web',
          'administrateur systeme de tracking', 'agence yele', 'ay studio',
        ]),
      },
      {
        label: 'Contact',
        path: '/contact',
        keywords: this.collectKeywords([
          'contact', 'formulaire', 'email', 'telephone', 'linkedin', 'instagram', 'github', 'cv',
          'entrons en relation', 'coordonnees principales', 'formulaire rapide',
          'envoyer le message', 'site principal', 'localisation', 'portfolio artiste', 'portfolio designer',
        ]),
      },
    ];

    const competenceIndex: SearchResult[] = COMPETENCES.map((competence) => {
      const texts = [
        competence.title,
        ...competence.definition,
        ...competence.selfReview,
        ...competence.evolution,
        ...competence.anecdotes.flatMap((anecdote) => [
          anecdote.title,
          anecdote.situation,
          anecdote.result,
          anecdote.valueAdded,
          anecdote.linkedProject.title,
        ]),
        ...competence.projects.map((project) => project.title),
      ];

      return {
        label: `Compétence — ${competence.title}`,
        path: `/competences/${competence.slug}`,
        keywords: this.collectKeywords(['competences', 'skills', ...texts]),
      };
    });

    const realisationIndex: SearchResult[] = REALISATIONS.map((realisation) => {
      const texts = [
        realisation.title,
        realisation.presentation,
        ...realisation.objectivesContextRisks,
        ...realisation.steps,
        ...realisation.stakeholders,
        ...realisation.resultsForMe,
        ...realisation.resultsForCompany,
        realisation.futureImmediate,
        realisation.futureDistance,
        realisation.futureToday,
        realisation.criticalView,
        ...realisation.techStack.map((tech) => tech.name),
        ...realisation.linkedSkills.map((skill) => skill.title),
      ];

      return {
        label: `Réalisation — ${realisation.title}`,
        path: `/realisations/${realisation.slug}`,
        keywords: this.collectKeywords(['realisations', 'projets', ...texts]),
      };
    });

    return [
      ...staticEntries,
      {
        label: 'Compétences',
        path: '/competences',
        keywords: this.collectKeywords([
          'competences', 'techniques', 'humaines',
          ...COMPETENCES.map((competence) => competence.title),
        ]),
      },
      {
        label: 'Réalisations',
        path: '/realisations',
        keywords: this.collectKeywords([
          'realisations', 'technologies utilisees',
          ...REALISATIONS.map((realisation) => realisation.title),
          ...REALISATIONS.flatMap((realisation) => realisation.techStack.map((tech) => tech.name)),
        ]),
      },
      ...competenceIndex,
      ...realisationIndex,
    ];
  }

  private collectKeywords(texts: string[]): string[] {
    const unique = new Set<string>();

    for (const source of texts) {
      const normalized = this.normalizeText(source)
        .replaceAll(/[^a-z0-9\s]/g, ' ')
        .replaceAll(/\s+/g, ' ')
        .trim();

      if (!normalized) {
        continue;
      }

      unique.add(normalized);
      for (const token of normalized.split(' ')) {
        if (token.length >= 3) {
          unique.add(token);
        }
      }
    }

    return Array.from(unique);
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
        .replaceAll(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private normalizePath(url: string): string {
    const path = url.split('?')[0].split('#')[0].trim();
    if (!path || path === '/') {
      return '/';
    }

    return path.endsWith('/') ? path.slice(0, -1) : path;
  }
}
