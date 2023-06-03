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
      image: '../../../assets/images/市场方案.png',
      title: '市场方案',
      description: '市场方案市场方案市场方案',
      animationClass: ''
    },
    {
      image: '../../../assets/images/品牌方案.png',
      title: '品牌方案',
      description: '品牌方案品牌方案品牌方案',
      animationClass: ''
    },
    {
      image: '../../../assets/images/推广方案.png',
      title: '推广方案',
      description: '推广方案推广方案推广方案',
      animationClass: ''
    }
  ];

  activeIndex: number = 1;

  slideLeft() {
    // Ajouter la classe d'animation
    this.cards[0].animationClass = 'slide-left';
    this.cards[1].animationClass = '';
    this.cards[2].animationClass = 'slide-right';

    const tempCard = this.cards[0];
    this.cards[0] = this.cards[2];
    this.cards[2] = this.cards[1];
    this.cards[1] = tempCard;
    this.activeIndex = 2;
  
   
  }
  
  slideRight() {
    // Ajouter la classe d'animation
    this.cards[0].animationClass = 'slide-right';
    this.cards[1].animationClass = '';
    this.cards[2].animationClass = 'slide-left';

    const tempCard = this.cards[2];
    this.cards[2] = this.cards[0];
    this.cards[0] = this.cards[1];
    this.cards[1] = tempCard;
    this.activeIndex = 0;
  }
  

  cardClick(index: number) {
    if (index < 1) {
      this.slideLeft();
    } else if (index > 1) {
      this.slideRight();
    }
  }  

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
