import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cultural-wall-five',
  templateUrl: './cultural-wall-five.component.html',
  styleUrls: ['./cultural-wall-five.component.scss']
})
export class CulturalWallFiveComponent {
  opacitySection2 = 1;

  descriptionH1 = 'CULTURAL-WALL.CULTURAL-WALL-FIVE.H1';
  contentP = 'CULTURAL-WALL.CULTURAL-WALL-FIVE.CONTENT-P';

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
