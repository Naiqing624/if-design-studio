import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo-three',
  templateUrl: './logo-three.component.html',
  styleUrls: ['./logo-three.component.scss']
})
export class LogoThreeComponent {
  opacitySection2 = 1;
  descriptionH1 = 'LOGO.LOGO-THREE.H1';
  contentP = 'LOGO.LOGO-THREE.CONTENT-P';

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
