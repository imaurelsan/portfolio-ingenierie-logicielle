import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  // Ici je centralise la navigation pour garder un menu lisible et facile a maintenir.
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Présentation', path: '/presentation' },
    { label: 'Compétences', path: '/competences' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Parcours', path: '/parcours' },
    { label: 'Contact', path: '/contact' },
  ];

  // J'affiche l'annee courante automatiquement pour eviter les oublis de mise a jour manuelle.
  protected readonly currentYear = new Date().getFullYear();
}
