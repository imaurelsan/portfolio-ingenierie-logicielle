import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavLink = {
  label: string;
  path: string;
  iconPath: string;
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
    { label: 'Présentation', path: '/presentation', iconPath: 'M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z' },
    { label: 'Compétences', path: '/competences', iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z' },
    { label: 'Réalisations', path: '/realisations', iconPath: 'M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.54 15.72.5 13 .5c-1.36 0-2.5.56-3.35 1.44L8 3.67 6.35 1.94C5.5 1.06 4.36.5 3 .5.48.5-1.5 2.36-1.5 4.67c0 .45.11.89.18 1.33H-2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6zm-9 13H5V8h6v11zm8 0h-6V8h6v11zM8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' },
    { label: 'Parcours', path: '/parcours', iconPath: 'M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 0V4h4v2h-4z' },
    { label: 'Contact', path: '/contact', iconPath: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' },
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
    this.isLightTheme = savedTheme === 'light';
    this.applyTheme();
  }

  protected get isHomePage(): boolean {
    return this.currentPath === '/';
  }

  protected get brandImageSrc(): string {
    if (!this.isHomePage) {
      return 'assets/images/photo-identite.jpg';
    }

    return '/favicon.svg';
  }

  protected get brandImageAlt(): string {
    return this.isHomePage ? 'Symbole du site' : 'Aurel YAHOUEDEOU';
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
