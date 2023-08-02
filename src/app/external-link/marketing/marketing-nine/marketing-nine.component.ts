import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-nine',
  templateUrl: './marketing-nine.component.html',
  styleUrls: ['./marketing-nine.component.scss']
})
export class MarketingNineComponent {
  isExpanded = false;
  opacitySection2 = 1;

  descriptionH1 = 'MARKETING.MARKETING-NINE.H1';
  contentP = 'MARKETING.MARKETING-NINE.CONTENT-P';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const tuilesSection2 = document.querySelector('.tuilesSection2');

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
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
