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
	{ path: '', component: HomePage, title: 'Accueil | Aurel YAHOUEDEOU' },
	{ path: 'presentation', component: PresentationPage, title: 'Présentation | Aurel YAHOUEDEOU' },
	{ path: 'competences', component: CompetencesPage, title: 'Compétences | Aurel YAHOUEDEOU' },
	{ path: 'competences/:slug', component: CompetenceDetailPage, title: 'Détail compétence | Aurel YAHOUEDEOU' },
	{ path: 'realisations', component: RealisationsPage, title: 'Réalisations | Aurel YAHOUEDEOU', pathMatch: 'full' },
	{ path: 'realisations/:slug', component: RealisationDetailPage, title: 'Détail réalisation | Aurel YAHOUEDEOU' },
	{ path: 'parcours', component: ParcoursPage, title: 'Parcours | Aurel YAHOUEDEOU' },
	{ path: 'contact', component: ContactPage, title: 'Contact | Aurel YAHOUEDEOU' },
	// Ici je redirige les URLs inconnues vers l'accueil pour eviter une page vide en production.
	{ path: '**', redirectTo: '' },
];
