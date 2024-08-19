import { Routes } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { WeddingPremisesComponent } from './components/wedding-premises/wedding-premises.component';
import { WeddingTourComponent } from './components/wedding-tour/wedding-tour.component';

export const routes: Routes = [
  { path: '', component: WeddingHomeComponent },
  { path: 'wedding-premises', component: WeddingPremisesComponent },
  { path: 'wedding-tour', component: WeddingTourComponent },
];
