import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-row',
  templateUrl: './gallery-row.component.html',
  styleUrls: ['./gallery-row.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GalleryComponent {
  sections = [
    {
      background: 'assets/img/kryta_terasa/01.jpg',
      text: 'Section 1 Text',
    },
    {
      background: 'assets/img/kryta_terasa/02.jpg',
      text: 'Section 2 Text',
    },
    {
      background: 'assets/img/kryta_terasa/03.jpg',
      text: 'Section 3 Text',
    },
  ];

  currentIndex = 0;

  get currentSection() {
    return this.sections[this.currentIndex];
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.sections.length) % this.sections.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sections.length;
  }
}
