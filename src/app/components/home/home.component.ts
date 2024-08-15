import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Section {
  title: string;
  text: string;
  imageDesktop: string;
  imageMobileSmall: string;
  imageMobileMedium: string;
  state: 'inView' | 'outOfView';
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('inView', style({ opacity: 1, transform: 'translateY(0)' })),
  //     state('outOfView', style({ opacity: 0, transform: 'translateY(100px)' })),
  //     transition('outOfView => inView', [animate('0.5s ease-in-out')]),
  //     transition('inView => outOfView', [animate('0.5s ease-in-out')]),
  //   ]),
  // ],
})
export class HomeComponent implements OnInit {
  section1: Section = {
    title: 'Section 1 Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageDesktop: 'assets/image1-large.jpg',
    imageMobileSmall: 'assets/image1-small.jpg',
    imageMobileMedium: 'assets/image1-medium.jpg',
    state: 'outOfView',
  };

  section2: Section = {
    title: 'Section 2 Title',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageDesktop: 'assets/image2-large.jpg',
    imageMobileSmall: 'assets/image2-small.jpg',
    imageMobileMedium: 'assets/image2-medium.jpg',
    state: 'outOfView',
  };

  constructor() {}

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll(): void {
    // const sections = document.querySelectorAll('.section');
    // sections.forEach((section, index) => {
    //   const rect = section.getBoundingClientRect();
    //   if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //     this.sections[index].state = 'inView';
    //   } else {
    //     this.sections[index].state = 'outOfView';
    //   }
    // });
  }
}
