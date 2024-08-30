import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';

@Component({
  selector: 'app-accomodation',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.scss',
})
export class AccomodationComponent {
  gallerySections = [
    {
      background: 'assets/img/accomodation/01.jpg',
      text: 'Section 1 Text',
    },
    {
      background: 'assets/img/accomodation/02.jpg',
      text: 'Section 2 Text',
    },
    {
      background: 'assets/img/accomodation/03.jpg',
      text: 'Section 3 Text',
    },
    {
      background: 'assets/img/accomodation/04.jpg',
      text: 'Section 4 Text',
    },
  ];
}
