import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() imageDesktop: string | undefined;
  @Input() imageMobileSmall: string | undefined;
  @Input() imageMobileMedium: string | undefined;

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
