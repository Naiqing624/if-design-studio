import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-flyer-four',
  templateUrl: './marketing-flyer-four.component.html',
  styleUrls: ['./marketing-flyer-four.component.scss']
})
export class MarketingFlyerFourComponent {
  opacitySection1 = 1;
  opacitySection2 = 1;

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
