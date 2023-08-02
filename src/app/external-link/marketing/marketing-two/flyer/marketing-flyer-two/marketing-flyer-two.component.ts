import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-flyer-two',
  templateUrl: './marketing-flyer-two.component.html',
  styleUrls: ['./marketing-flyer-two.component.scss']
})
export class MarketingFlyerTwoComponent {
  opacitySection1 = 1;
  opacitySection2 = 1;

  descriptionH1 = 'MARKETING-FLYER.FLYER-TWO.H1';
  contentP = 'MARKETING-FLYER.FLYER-TWO.CONTENT-P';
  descriptionH1Two = 'MARKETING-FLYER.FLYER-TWO.H1-TWO';
  contentPTwo = 'MARKETING-FLYER.FLYER-TWO.CONTENT-P-TWO';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const section1 = document.querySelector('.section1');

    if (section1 && section1.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection1 = 1;
    }else{
      this.opacitySection1 = 0;
    }

    const tuilesSection2 = document.querySelector('.tuilesSection2');

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }
}
