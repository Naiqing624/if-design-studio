import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-art-four',
  templateUrl: './art-four.component.html',
  styleUrls: ['./art-four.component.scss']
})
export class ArtFourComponent {
  opacitySection2 = 1;
  contentP = 'ART.ART-FOUR.SECTION1-DESCRIPTION-P';

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
