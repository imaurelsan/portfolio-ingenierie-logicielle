import { Routes } from '@angular/router';
import { CompetencesPage } from './pages/competences.page';
import { ContactPage } from './pages/contact.page';
import { HomePage } from './pages/home.page';
import { ParcoursPage } from './pages/parcours.page';
import { PresentationPage } from './pages/presentation.page';
import { RealisationsPage } from './pages/realisations.page';

export const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'presentation', component: PresentationPage },
	{ path: 'competences', component: CompetencesPage },
	{ path: 'realisations', component: RealisationsPage },
	{ path: 'parcours', component: ParcoursPage },
	{ path: 'contact', component: ContactPage },
	{ path: '**', redirectTo: '' },
];
