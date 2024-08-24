import { Routes } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { WeddingPremisesComponent } from './components/wedding-premises/wedding-premises.component';
import { WeddingTourComponent } from './components/wedding-tour/wedding-tour.component';
import { GoogleCalendarComponent } from './components/google-calendar/google-calendar.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'wedding-home', pathMatch: 'full' },
  { path: 'wedding-home', component: WeddingHomeComponent },
  { path: 'wedding-premises', component: WeddingPremisesComponent },
  { path: 'wedding-tour', component: WeddingTourComponent },
  { path: 'calendar', component: GoogleCalendarComponent },
  { path: 'blog', component: BlogComponent },
];
