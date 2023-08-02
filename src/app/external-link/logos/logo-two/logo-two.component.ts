import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo-two',
  templateUrl: './logo-two.component.html',
  styleUrls: ['./logo-two.component.scss']
})
export class LogoTwoComponent {
  opacitySection2 = 1;
  descriptionH1 = 'LOGO.LOGO-TWO.H1';
  contentP = 'LOGO.LOGO-TWO.CONTENT-P';

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
