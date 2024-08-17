import { SectionModel } from './../section/section.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, SectionComponent],
})
export class HomeComponent implements OnInit {
  sections: SectionModel[] = [
    {
      title: 'Section 1 Title',
      text: 'Section 1 text content goes here.',
      imageDesktop: 'assets/home-desktop1.jpg',
      imageMobileSmall: 'assets/mobile01.jpg',
      imageMobileMedium: 'assets/home-desktop1.jpg',
    },
    {
      title: 'Section 2 Title',
      text: 'Section 2 text content goes here.',
      imageDesktop: 'assets/home-desktop2.jpg',
      imageMobileSmall: 'assets/mobile02.jpg',
      imageMobileMedium: 'assets/home-desktop2.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll(): void {}
}
