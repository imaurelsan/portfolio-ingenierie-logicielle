import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type NavLink = {
  label: string;
  path: string;
};

type BuildInfo = {
  shortCommit?: string;
  date?: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // J'ai centralisé la navigation pour garder un menu lisible et facile à maintenir.
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Présentation', path: '/presentation' },
    { label: 'Compétences', path: '/competences' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Parcours', path: '/parcours' },
    { label: 'Contact', path: '/contact' },
  ];

  protected readonly currentYear = new Date().getFullYear();
  protected buildLabel = '';

  constructor() {
    // Cette lecture du metadata de build permet de prouver rapidement la version servie en production.
    fetch(`assets/build-info.json?t=${Date.now()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('build-info unavailable');
        }

        return response.json() as Promise<BuildInfo>;
      })
      .then((buildInfo) => {
        const commit = buildInfo.shortCommit ? `commit ${buildInfo.shortCommit}` : '';
        const date = buildInfo.date ? `deployed ${new Date(buildInfo.date).toLocaleString('fr-FR')}` : '';
        this.buildLabel = [commit, date].filter(Boolean).join(' - ');
      })
      .catch(() => {
        this.buildLabel = '';
      });
  }
}
