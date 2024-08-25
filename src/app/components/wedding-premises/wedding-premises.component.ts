import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';

@Component({
  selector: 'app-wedding-premises',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './wedding-premises.component.html',
  styleUrl: './wedding-premises.component.scss',
})
export class WeddingPremisesComponent {}
