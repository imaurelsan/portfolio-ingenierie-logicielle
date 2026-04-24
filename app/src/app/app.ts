import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavLink = {
  label: string;
  path: string;
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
    { label: 'Accueil', path: '/' },
    { label: 'Présentation', path: '/presentation' },
    { label: 'Compétences', path: '/competences' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Parcours', path: '/parcours' },
    { label: 'Contact', path: '/contact' },
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
