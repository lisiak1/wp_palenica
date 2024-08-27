import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeddingHomeComponent } from './components/wedding/wedding-home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    RouterModule,
    WeddingHomeComponent,
  ],
})
export class AppComponent implements OnInit {
  isDesktop: boolean = false;
  showScrollToTop: boolean = true;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 450; // Adjust the width as needed
  }
}
