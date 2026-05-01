import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Capture globale des erreurs runtime Angular pour eviter les silences en production.
    provideBrowserGlobalErrorListeners(),
    // Regroupe certains evenements pour limiter les cycles de rendu inutiles.
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Le routing est configure ici pour garder un point d'entree unique.
    provideRouter(routes)
  ]
};
