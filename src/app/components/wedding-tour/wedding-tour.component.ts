import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-wedding-tour',
  templateUrl: './wedding-tour.component.html',
  styleUrls: ['./wedding-tour.component.scss'],
  animations: [
    trigger('slideIn', [
      state(
        'hidden',
        style({
          left: '100%',
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'visible',
        style({
          left: '50%',
          transform: 'translateX(-50%)',
        })
      ),
      transition('hidden => visible', [animate('1s')]), // Adjusted duration for better mobile experience
    ]),
  ],
})
export class WeddingTourComponent {
  photoStates = ['hidden', 'hidden', 'hidden'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.photo-background');
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        this.photoStates[index] = 'visible';
      }
    });
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.onWindowScroll(); // Recalculate visibility on resize
  }
}
