import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flyer-three',
  templateUrl: './flyer-three.component.html',
  styleUrls: ['./flyer-three.component.scss']
})
export class FlyerThreeComponent {
  opacitySection2 = 1;
  descriptionH1 = 'FLYER.FLYER-THREE.H1';
  contentP = 'FLYER.FLYER-THREE.CONTENT-P';

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
