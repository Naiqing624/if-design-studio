import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-flyer-five',
  templateUrl: './marketing-flyer-five.component.html',
  styleUrls: ['./marketing-flyer-five.component.scss']
})
export class MarketingFlyerFiveComponent {
  opacitySection1 = 1;
  opacitySection2 = 1;

  descriptionH1 = 'MARKETING-FLYER.FLYER-FIVE.H1';
  contentP = 'MARKETING-FLYER.FLYER-FIVE.CONTENT-P';
  descriptionH1Two = 'MARKETING-FLYER.FLYER-FIVE.H1-TWO';
  contentPTwo = 'MARKETING-FLYER.FLYER-FIVE.CONTENT-P-TWO';
  descriptionH1Three = 'MARKETING-FLYER.FLYER-FIVE.H1-THREE';
  contentPThree = 'MARKETING-FLYER.FLYER-FIVE.CONTENT-P-THREE';
  descriptionH1Four = 'MARKETING-FLYER.FLYER-FIVE.H1-FOUR';
  contentPFour = 'MARKETING-FLYER.FLYER-FIVE.CONTENT-P-FOUR';

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
