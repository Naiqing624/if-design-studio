import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flyer-one',
  templateUrl: './flyer-one.component.html',
  styleUrls: ['./flyer-one.component.scss']
})
export class FlyerOneComponent {
  opacitySection2 = 1;
  descriptionH1 = 'FLYER.FLYER-ONE.H1';
  contentP = 'FLYER.FLYER-ONE.CONTENT-P';

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
