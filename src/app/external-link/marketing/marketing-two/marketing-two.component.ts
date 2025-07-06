import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-two',
  templateUrl: './marketing-two.component.html',
  styleUrls: ['./marketing-two.component.scss']
})
export class MarketingTwoComponent {
  opacitySection2 = 1;
  descriptionH1 = 'MARKETING.MARKETING-TWO.H1';
  contentP = 'MARKETING.MARKETING-TWO.CONTENT-P';
  isExpanded = false;

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
}
