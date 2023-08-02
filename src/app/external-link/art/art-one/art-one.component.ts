import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-art-one',
  templateUrl: './art-one.component.html',
  styleUrls: ['./art-one.component.scss']
})
export class ArtOneComponent {
  opacitySection2 = 1;
  contentP = 'ART.ART-ONE.SECTION1-DESCRIPTION-P';

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
