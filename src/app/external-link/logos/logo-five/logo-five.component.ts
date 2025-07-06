import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo-five',
  templateUrl: './logo-five.component.html',
  styleUrls: ['./logo-five.component.scss']
})
export class LogoFiveComponent {
  opacitySection2 = 1;
  descriptionH1 = 'LOGO.LOGO-FIVE.H1';
  contentP = 'LOGO.LOGO-FIVE.CONTENT-P';

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
