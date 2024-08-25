import { Routes } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { WeddingPremisesComponent } from './components/wedding-premises/wedding-premises.component';
import { WeddingTourComponent } from './components/wedding-tour/wedding-tour.component';
import { GoogleCalendarComponent } from './components/google-calendar/google-calendar.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoveredTerraceComponent } from './components/covered-terrace/covered-terrace.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'svadby',
    pathMatch: 'full',
    data: { breadcrumb: 'Domov' },
  },
  {
    path: 'svadby/domov',
    redirectTo: 'svadby',
    pathMatch: 'full',
    data: { breadcrumb: 'Domov' },
  },
  {
    path: 'svadby',
    component: WeddingHomeComponent,
    data: { breadcrumb: 'Svadby' },
  },
  {
    path: 'svadby/priestory',
    component: WeddingPremisesComponent,
    data: { breadcrumb: 'Priestory' },
  },
  {
    path: 'svadby/obhliadka',
    component: WeddingTourComponent,
    data: { breadcrumb: 'Obhliadka' },
  },
  {
    path: 'svadby/kalendar',
    component: GoogleCalendarComponent,
    data: { breadcrumb: 'Kalendár' },
  },
  {
    path: 'svadby/blog',
    component: BlogComponent,
    data: { breadcrumb: 'Blog' },
  },
  {
    path: 'svadby/priestory/kryta-terasa',
    component: CoveredTerraceComponent,
    data: { breadcrumb: 'Krytá terasa' },
  },
];
