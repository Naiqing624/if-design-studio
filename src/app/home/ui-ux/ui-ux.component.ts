import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent {
  isExpanded = false;

  @ViewChildren('item')
  items!: QueryList<HTMLElement>;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
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
        item.style.zIndex = '-1';
      } else if (endPosition < 1) {
        endPosition = 3;
        item.style.zIndex = '-1';
      } else {
        item.style.zIndex = '';
      }

      item.setAttribute('data-position', endPosition.toString());

      item.addEventListener('transitionend', () => {
        carousel.classList.remove(`moving-${direction}`);
      });
    }

    const activeItem = document.querySelector('[data-position="2"]');
    console.log(activeItem);
  }

  leftButtonClick() {
    this.roll('left');
  }

  rightButtonClick() {
    this.roll('right');
  }
}
