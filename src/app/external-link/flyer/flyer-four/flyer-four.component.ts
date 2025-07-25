import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flyer-four',
  templateUrl: './flyer-four.component.html',
  styleUrls: ['./flyer-four.component.scss']
})
export class FlyerFourComponent {
  opacitySection2 = 1;
  descriptionH1 = 'FLYER.FLYER-FOUR.H1';
  contentP = 'FLYER.FLYER-FOUR.CONTENT-P';

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
