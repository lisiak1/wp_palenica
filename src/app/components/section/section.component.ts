import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { LazyLoadBackgroundDirective } from 'src/app/directives/lazy-load-background-directive.directive';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, LazyLoadBackgroundDirective],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  animations: [
    trigger('titleAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('textAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate(
          '700ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('buttonAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition(':enter', [
        animate('900ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class SectionComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() imageDesktop: string | undefined;
  @Input() imageMobileSmall: string | undefined;
  @Input() imageMobileMedium: string | undefined;
  @Input() dimBackground: boolean | undefined = false;
  titleVisible = false;
  textVisible = false;
  buttonVisible: unknown;

  backgroundImage: string | undefined;

  isDesktop = false;
  isMobileSmall = false;
  isMobileMedium = false;

  @HostBinding('class.section-aaa') sectionClass = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setBackgroundImage();
  }

  ngOnInit() {
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    const width = window.innerWidth;
    if (width <= 480) {
      this.backgroundImage = this.imageMobileSmall;
    } else if (width <= 768) {
      this.backgroundImage = this.imageMobileMedium;
    } else {
      this.backgroundImage = this.imageDesktop;
    }
  }
}
