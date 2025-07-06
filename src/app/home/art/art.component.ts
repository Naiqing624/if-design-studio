import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  opacitySection2 = 1;

  overlayFive = 'ART.OVERLAY-FIVE';
  overlayFour = 'ART.OVERLAY-FOUR';

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
