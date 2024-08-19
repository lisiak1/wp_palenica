import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    RouterModule,
    WeddingHomeComponent,
  ],
})
export class AppComponent {}
