import { Component, ViewChildren, QueryList, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/language.service';

interface Card {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
}

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  position = false;
  isExpanded = false;
  cardNumber = 1;
  cards: Card[] = [
    {
      title1: 'CARD1.TITLE1',
      title2: 'CARD1.TITLE2',
      title3: 'CARD1.TITLE3',
      title4: 'CARD1.TITLE4',
      title5: '',
      title6: ''
    },
    {
      title1: 'CARD2.TITLE1',
      title2: 'CARD2.TITLE2',
      title3: 'CARD2.TITLE3',
      title4: 'CARD2.TITLE4',
      title5: '',
      title6: ''
    },
    {
      title1: 'CARD3.TITLE1',
      title2: 'CARD3.TITLE2',
      title3: 'CARD3.TITLE3',
      title4: 'CARD3.TITLE4',
      title5: 'CARD3.TITLE5',
      title6: 'CARD3.TITLE6'
    }
  ];

  @ViewChildren('item')
  items!: QueryList<HTMLElement>;

  selectedLanguage = 'EN';

  constructor(public translate: TranslateService, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });
    this.checkScreenSize();
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  onItemClicked(position: number) {
    const items = document.querySelectorAll('.item');
    const item = items[position] as HTMLElement;
    const startPosition = item.getAttribute('data-position');

    if(parseInt(startPosition!) === 1){
      this.rightButtonClick();
    }

    if(parseInt(startPosition!) === 3){
      this.leftButtonClick();
    }
  }

  roll(direction: 'left' | 'right') {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const items = document.querySelectorAll('.item');
    carousel.classList.add(`moving-${direction}`);

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      const startPosition = item.getAttribute('data-position');
      let endPosition: number;

      if (direction === 'right') {
        endPosition = parseInt(startPosition!) + 1;
      } else if (direction === 'left') {
        endPosition = parseInt(startPosition!) - 1;
      } else {
        endPosition = parseInt(startPosition!);
      }

      if (endPosition > 3) {
        endPosition = 1;
        item.style.zIndex = '';
      } else if (endPosition < 1) {
        endPosition = 3;
        item.style.zIndex = '';
      } else {
        item.style.zIndex = '';
      }

      item.setAttribute('data-position', endPosition.toString());
      item.addEventListener('transitionend', () => {
        carousel.classList.remove(`moving-${direction}`);
      });
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      if(item.getAttribute('data-position') === '2'){
        this.cardNumber = i;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth < 750) {
      this.position = true;
    }else {
      this.position = false;
    }
  }

  leftButtonClick() {
    this.roll('left');
  }

  rightButtonClick() {
    this.roll('right');
  }
}
