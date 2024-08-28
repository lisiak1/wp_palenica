import { SectionModel } from '../section/section.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './wedding-home.component.html',
  styleUrls: ['./wedding-home.component.scss'],
  imports: [
    CommonModule,
    SectionComponent,
    MatExpansionModule,
    MatButtonModule,
  ],
})
export class WeddingHomeComponent {
  sections: SectionModel[] = [
    {
      title: 'Svadobné priestory',
      subTitle: 'Section 1 Subtitle',
      text: 'Text some text here here here some text content goes here.',
      textBottom:
        'Text bottom fksjfsj jsafjsl sjfjsjlf 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_01.jpg',
      imageMobileSmall: 'assets/img/mobile/01.webp',
      imageMobileMedium: 'assets/img/mobile/wedding_01.jpg',
      dimBackground: true,
      buttonText: 'Prezrieť si priestory',
    },
    {
      title: 'Section 2 Title',
      subTitle: 'Section 2 Subtitle',
      text: 'Section 2 text content goes here.',
      textBottom: 'Section 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_03.jpg',
      imageMobileSmall: 'assets/img/mobile/03.webp',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
      dimBackground: true,
      buttonText: 'Obhliadka priestorov',
      buttonLink: '/svadby/obhliadka',
    },
    {
      title: 'Section 2 Title',
      subTitle: 'Section 2 Subtitle',
      text: 'Section 2 text content goes here.',
      textBottom: 'Section 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_02.jpg',
      imageMobileSmall: 'assets/img/mobile/02.webp',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
      dimBackground: true,
    },
    {
      title: 'Section 2 Title',
      subTitle: 'Section 2 Subtitle',
      text: 'Section 2 text content goes here.',
      textBottom: 'Section 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_04.jpg',
      imageMobileSmall: 'assets/img/mobile/04.webp',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
      dimBackground: true,
    },
    {
      title: 'Section 2 Title',
      subTitle: 'Section 2 Subtitle',
      text: 'Section 2 text content goes here.',
      textBottom: 'Section 1 text content goes here.',
      imageDesktop: 'assets/img/desktop/wedding_02.jpg',
      imageMobileSmall: 'assets/img/mobile/05.webp',
      imageMobileMedium: 'assets/img/mobile/wedding_02.jpg',
      dimBackground: true,
    },
  ];

  faqs = [
    {
      question: 'Kedy je najlepší čas na rezerváciu miesta?',
      answer: 'Najlepší čas na rezerváciu miesta je aspoň 6 mesiacov vopred.',
    },
    {
      question: 'Môžeme si priniesť vlastného cateringového dodávateľa?',
      answer:
        'Áno, môžete si priniesť vlastného cateringového dodávateľa, ale musí dodržiavať naše pravidlá miesta.',
    },
    {
      question: 'Je k dispozícii parkovanie?',
      answer: 'Áno, máme dostatok parkovacích miest pre všetkých vašich hostí.',
    },
    {
      question: 'Poskytujete dekoračné služby?',
      answer: 'Áno, ponúkame rôzne dekoračné služby podľa vašich potrieb.',
    },
    {
      question: 'Máte záložný plán pre nepriaznivé počasie?',
      answer:
        'Áno, máme k dispozícii vnútorné priestory ako záložný plán v prípade nepriaznivého počasia.',
    },
    {
      question: 'Môžeme mať živú kapelu alebo DJ?',
      answer:
        'Áno, môžete mať živú kapelu alebo DJ, ale musia dodržiavať naše hlukové predpisy.',
    },
    {
      question: 'Existujú nejaké obmedzenia na fotografovanie?',
      answer:
        'Nie, neexistujú žiadne obmedzenia na fotografovanie. Môžete zachytiť svoje špeciálne momenty.',
    },
    {
      question: 'Aká je politika zrušenia?',
      answer:
        'Naša politika zrušenia umožňuje plnú refundáciu, ak je zrušenie vykonané aspoň 3 mesiace vopred.',
    },
    {
      question: 'Ponúkate cateringové balíčky?',
      answer:
        'Áno, ponúkame rôzne cateringové balíčky, ktoré vyhovujú rôznym chutiam a rozpočtom.',
    },
  ];

  constructor() {}
}
