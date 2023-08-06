import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-newest-work-one',
  templateUrl: './newest-work-one.component.html',
  styleUrls: ['./newest-work-one.component.scss']
})
export class NewestWorkOneComponent {
  opacitySection2 = 1;

  pOne = 'NEWEST-WORK-ONE.P-ONE';
  overlayFour = 'NEWEST-WORK-ONE.OVERLAY-FOUR';
  overlayTwelve = 'NEWEST-WORK-ONE.OVERLAY-TWELVE';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const tuilesSection2 = document.querySelector('.tuilesSection2');

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }
}
