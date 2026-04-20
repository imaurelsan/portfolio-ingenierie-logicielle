import { Routes } from '@angular/router';
import { CompetenceDetailPage } from './pages/competence-detail.page';
import { CompetencesPage } from './pages/competences.page';
import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';
import { ParcoursPage } from './pages/parcours.page';
import { PresentationPage } from './pages/presentation.page';
import { RealisationDetailPage } from './pages/realisation-detail.page';
import { RealisationsPage } from './pages/realisations.page';

// Ici je centralise toutes les routes pour garder une lecture claire de la navigation du portfolio.
export const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'presentation', component: PresentationPage },
	{ path: 'competences', component: CompetencesPage },
	{ path: 'competences/:slug', component: CompetenceDetailPage },
	{ path: 'realisations', component: RealisationsPage, pathMatch: 'full' },
	{ path: 'realisations/:slug', component: RealisationDetailPage },
	{ path: 'parcours', component: ParcoursPage },
	{ path: 'contact', component: ContactPage },
	// Ici je redirige les URLs inconnues vers l'accueil pour eviter une page vide en production.
	{ path: '**', redirectTo: '' },
];
