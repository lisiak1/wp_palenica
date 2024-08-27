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
      background: 'assets/img/obhliadka/01.webp',
      text: 'Section 1 Text',
    },
    {
      background: 'assets/img/obhliadka/02.webp',
      text: 'Section 2 Text',
    },
    {
      background: 'assets/img/obhliadka/03.webp',
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
