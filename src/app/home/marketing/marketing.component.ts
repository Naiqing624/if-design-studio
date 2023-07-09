import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {
  isExpanded = false;
  opacitySection2 = 1;

  items = [
  {
    image: "../../../assets/images/marketing/1.png",
    text: "名片",
    link: ""
  },{
    image: "../../../assets/images/marketing/2.png",
    text: "海报",
    link: ""
  },
  {
    image: "../../../assets/images/marketing/3.png",
    text: "包装",
    link: "packaging-work"
  },{
    image: "../../../assets/images/marketing/4.png",
    text: "双/三折页",
    link: ""
  },
  {
    image: "../../../assets/images/marketing/5.png",
    text: "淘宝电商",
    link: ""
  },{
    image: "../../../assets/images/marketing/6.png",
    text: "展板、展厅",
    link: ""
  },
  {
    image: "../../../assets/images/marketing/7.png",
    text: "PPT",
    link: ""
  },{
    image: "../../../assets/images/marketing/8.png",
    text: "门头",
    link: ""
  },
  {
    image: "../../../assets/images/marketing/9.png",
    text: "文化墙",
    link: ""
  }
];

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const cardContainer = document.querySelector('.card-container');

    if (cardContainer && cardContainer.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth < 700) {
      this.isExpanded = true;
    }else {
      this.isExpanded = false;
    }
  }
}
