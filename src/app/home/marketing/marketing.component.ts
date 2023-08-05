import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  isExpanded = false;
  opacitySection2 = 1;

  content = 'MARKETING-PAGE.CONTENT';

  items = [
  {
    image: "../../../assets/images/marketing/1.png",
    text: 'MARKETING-PAGE.CARD-ONE',
    link: "marketing-one"
  },{
    image: "../../../assets/images/marketing/2.png",
    text: "MARKETING-PAGE.CARD-TWO",
    link: "marketing-two"
  },
  {
    image: "../../../assets/images/marketing/3.png",
    text: "MARKETING-PAGE.CARD-THREE",
    link: "marketing-three"
  },{
    image: "../../../assets/images/marketing/4.png",
    text: "MARKETING-PAGE.CARD-FOUR",
    link: "marketing-four"
  },
  {
    image: "../../../assets/images/marketing/5.png",
    text: "MARKETING-PAGE.CARD-FIVE",
    link: "marketing-five"
  },{
    image: "../../../assets/images/marketing/6.png",
    text: "MARKETING-PAGE.CARD-SIX",
    link: "marketing-six"
  },
  {
    image: "../../../assets/images/marketing/7.png",
    text: "MARKETING-PAGE.CARD-SEVEN",
    link: "marketing-seven"
  },{
    image: "../../../assets/images/marketing/8.png",
    text: "MARKETING-PAGE.CARD-EIGHT",
    link: "marketing-eight"
  },
  {
    image: "../../../assets/images/marketing/9.png",
    text: "MARKETING-PAGE.CARD-NINE",
    link: "marketing-nine"
  }
];

  ngOnInit(): void {
    this.checkScreenSize();
  }

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
    if (window.innerWidth < 900) {
      this.isExpanded = true;
    }else {
      this.isExpanded = false;
    }
  }
}
