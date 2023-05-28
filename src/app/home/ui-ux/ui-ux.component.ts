import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent {
  isExpanded = false;

  cards = [
    {
      image: 'path/to/image1.jpg',
      title: 'Card 1',
      description: 'Description 1'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Card 2',
      description: 'Description 2'
    },
    {
      image: 'path/to/image3.jpg',
      title: 'Card 3',
      description: 'Description 3'
    }
  ];

  activeIndex: number = 1;

  slideLeft() {
    this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
    this.updateCardsOrder();
  }

  slideRight() {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
    this.updateCardsOrder();
  }

  updateCardsOrder() {
    const shiftedCards = [
      this.cards[(this.activeIndex + 2) % this.cards.length],
      this.cards[this.activeIndex],
      this.cards[(this.activeIndex + 1) % this.cards.length]
    ];
    this.cards = shiftedCards;
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
