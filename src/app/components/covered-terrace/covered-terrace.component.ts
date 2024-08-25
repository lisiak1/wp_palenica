import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';

@Component({
  selector: 'app-covered-terrace',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './covered-terrace.component.html',
  styleUrl: './covered-terrace.component.scss',
})
export class CoveredTerraceComponent {}
