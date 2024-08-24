import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    RouterModule,
    FooterComponent,
  ],
})
export class NavbarComponent {
  @ViewChild('drawer') drawer: MatSidenav | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.drawer?.close();
      }
    });
  }

  closeNav() {
    this.drawer?.close();
  }
}
