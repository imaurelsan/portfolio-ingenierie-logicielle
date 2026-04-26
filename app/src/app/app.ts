import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavLink = {
  label: string;
  path: string;
  iconPath: string;
  children?: Array<{ label: string; path: string }>;
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
  @ViewChild('searchtogglebtn') private readonly searchToggleBtn?: ElementRef<HTMLButtonElement>;
  @ViewChild('mainnavpanel') private readonly mainNavPanel?: ElementRef<HTMLElement>;
  @ViewChild('navtogglebtn') private readonly navToggleBtn?: ElementRef<HTMLButtonElement>;

  // Ici je centralise la navigation pour garder un menu lisible et facile a maintenir.
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil', path: '/', iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { label: 'Présentation', path: '/presentation', iconPath: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25S13.24 11.25 12 11.25 9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 16H7v-.75c0-1.66 2.24-3 5-3s5 1.34 5 3V16z' },
    {
      label: 'Compétences',
      path: '/competences',
      iconPath: 'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z',
      children: [
        { label: 'Vue comparative', path: '/competences' },
        { label: 'Architecture web mutualisée', path: '/competences/architecture-web-mutualisee' },
        { label: 'Développement plugins WordPress', path: '/competences/developpement-plugins-wordpress' },
        { label: 'Sécurité applicative', path: '/competences/securite-applicative' },
      ],
    },
    {
      label: 'Réalisations',
      path: '/realisations',
      iconPath: 'M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5zm8 13H4V9h16v9z',
      children: [
        { label: 'Toutes les réalisations', path: '/realisations' },
        { label: '360-content-bridge', path: '/realisations/project-360-content-bridge' },
        { label: '360-media-auto-cleanup', path: '/realisations/project-360-media-auto-cleanup' },
        { label: '360tranquilité', path: '/realisations/project-360tranquilite' },
        { label: 'crewai-projet-agent-voyage', path: '/realisations/project-crewai-voyage' },
        { label: 'v0-vastrion-mobile-prototype', path: '/realisations/project-v0-vastrion-mobile-prototype' },
      ],
    },
    { label: 'Parcours', path: '/parcours', iconPath: 'M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 12.36 8 12.18 8 12c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 11.35 19 11.18 19 11c0-1.1.9-2 2-2s2 .9 2 2z' },
  ];

  // Ici je pilote l'ouverture du menu mobile (hamburger) sans impacter l'affichage desktop.
  protected isMobileNavOpen = false;

  // J'affiche l'annee courante automatiquement pour eviter les oublis de mise a jour manuelle.
  protected readonly currentYear = new Date().getFullYear();

  protected isLightTheme = false;
  protected currentPath = this.normalizePath(this.router.url);
  protected isQuickNavOpen = false;
  protected quickNavQuery = '';

  // Système de recherche par mots-clés pour une meilleure expérience utilisateur.
  protected readonly searchDatabase: SearchResult[] = [
    {
      label: 'Accueil',
      path: '/',
      keywords: [
        'accueil', 'hero', 'portfolio', 'axes', 'preuves', 'architecture', 'industrialisation', 'impact',
      ],
    },
    {
      label: 'Présentation',
      path: '/presentation',
      keywords: [
        'presentation', 'profil', 'valeurs', 'positionnement', 'aurel', 'yahouedeou', 'bio', 'parcours global',
      ],
    },
    {
      label: 'Compétences',
      path: '/competences',
      keywords: [
        'competences', 'niveau', 'avance', 'intermediaire', 'debutant', 'jauge', 'skills', 'wordpress', 'api',
        'securite', 'communication', 'ux', 'ui', 'automatisation', 'agile',
      ],
    },
    {
      label: 'Réalisations',
      path: '/realisations',
      keywords: [
        'realisations', 'projets', 'github', 'plugin', '360tranquilite', 'content bridge', 'media auto cleanup',
      ],
    },
    {
      label: 'Parcours',
      path: '/parcours',
      keywords: [
        'parcours', 'experiences', 'formations', 'certifications', 'tests', 'educatel', 'iscod', 'esmt',
        'master soft', 'aski da', 'empowher',
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      keywords: [
        'contact', 'formulaire', 'email', 'telephone', 'linkedin', 'instagram', 'github', 'cv',
      ],
    },
  ];

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentPath = this.normalizePath(event.urlAfterRedirects);
        this.closeQuickNav();
        this.closeMobileNav();
      });

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
      if (!isInsideQuickNav && !isOnSearchButton) {
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
