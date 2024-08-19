import { SectionModel } from '../section/section.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './wedding-home.component.html',
  styleUrl: './wedding-home.component.scss',
  imports: [CommonModule, SectionComponent],
})
export class WeddingHomeComponent implements OnInit {
  sections: SectionModel[] = [
    {
      title: 'Section 1 Title',
      text: 'Section 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_01.jpg',
      imageMobileSmall: 'assets/img/mobile/wedding_01.jpg',
      imageMobileMedium: 'assets/img/mobile/wedding_01.jpg',
    },
    {
      title: 'Section 2 Title',
      text: 'Section 2 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_02.jpg',
      imageMobileSmall: 'assets/img/mobile/wedding_02.jpg',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
    },
    {
      title: 'Section 3 Title',
      text: 'Section 3 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_02.jpg',
      imageMobileSmall: 'assets/img/mobile/wedding_02.jpg',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
    },
    {
      title: 'Section 4 Title',
      text: 'Section 4 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_02.jpg',
      imageMobileSmall: 'assets/img/mobile/wedding_02.jpg',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll(): void {}
}
