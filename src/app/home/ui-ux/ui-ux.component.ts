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
    const tempCard = this.cards[0];
    this.cards[0] = this.cards[2];
    this.cards[2] = this.cards[1];
    this.cards[1] = tempCard;
    this.activeIndex = 2;
  }

  slideRight() {
    const tempCard = this.cards[2];
    this.cards[2] = this.cards[0];
    this.cards[0] = this.cards[1];
    this.cards[1] = tempCard;
    this.activeIndex = 0;
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
