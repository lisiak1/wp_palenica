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
  },
  {
    path: 'svadby/domov',
    redirectTo: 'svadby',
    pathMatch: 'full',
  },
  {
    path: 'svadby',
    component: WeddingHomeComponent,
  },
  {
    path: 'svadby/priestory',
    component: WeddingPremisesComponent,
  },
  {
    path: 'svadby/obhliadka',
    component: WeddingTourComponent,
  },
  {
    path: 'svadby/kalendar',
    component: GoogleCalendarComponent,
  },
  {
    path: 'svadby/blog',
    component: BlogComponent,
  },
  {
    path: 'svadby/priestory/kryta-terasa',
    component: CoveredTerraceComponent,
  },
];
