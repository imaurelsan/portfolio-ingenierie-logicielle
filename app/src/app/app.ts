import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavLink = {
  label: string;
  path: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);

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

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentPath = this.normalizePath(event.urlAfterRedirects);
      });

    const savedTheme = localStorage.getItem('portfolio-theme');
    this.isLightTheme = savedTheme === 'light';
    document.body.classList.toggle('theme-light', this.isLightTheme);
  }

  protected get isHomePage(): boolean {
    return this.currentPath === '/';
  }

  protected get brandImageSrc(): string {
    return this.isHomePage ? '/favicon.svg' : 'assets/images/photo-identite.jpg';
  }

  protected get brandImageAlt(): string {
    return this.isHomePage ? 'Symbole du site' : "Photo d'Aurel YAHOUEDEOU";
  }

  protected toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  protected closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }

  protected toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('theme-light', this.isLightTheme);
    localStorage.setItem('portfolio-theme', this.isLightTheme ? 'light' : 'dark');
  }

  private normalizePath(url: string): string {
    const path = url.split('?')[0].split('#')[0].trim();
    if (!path || path === '/') {
      return '/';
    }

    return path.endsWith('/') ? path.slice(0, -1) : path;
  }
}
