import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-art-six',
  templateUrl: './art-six.component.html',
  styleUrls: ['./art-six.component.scss']
})
export class ArtSixComponent {
  opacitySection2 = 1;
  contentP = 'ART.ART-SIX.SECTION1-DESCRIPTION-P';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const section2 = document.querySelector('.section2');

    if (section2 && section2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }
}
