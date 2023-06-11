import { Component, ViewChildren, QueryList } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent {
  isExpanded = false;
  cardNumber = 2;

  @ViewChildren('item')
  items!: QueryList<HTMLElement>;

  constructor(public translate: TranslateService) {}

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

  leftButtonClick() {
    this.roll('left');
  }

  rightButtonClick() {
    this.roll('right');
  }
}
