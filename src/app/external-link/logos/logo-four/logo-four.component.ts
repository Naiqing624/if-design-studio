import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo-four',
  templateUrl: './logo-four.component.html',
  styleUrls: ['./logo-four.component.scss']
})
export class LogoFourComponent {
  opacitySection2 = 1;
  descriptionH1 = 'LOGO.LOGO-FOUR.H1';
  contentP = 'LOGO.LOGO-FOUR.CONTENT-P';

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
