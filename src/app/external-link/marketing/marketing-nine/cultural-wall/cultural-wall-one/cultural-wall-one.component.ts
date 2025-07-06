import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cultural-wall-one',
  templateUrl: './cultural-wall-one.component.html',
  styleUrls: ['./cultural-wall-one.component.scss']
})
export class CulturalWallOneComponent {
  opacitySection2 = 1;

  descriptionH1 = 'CULTURAL-WALL.CULTURAL-WALL-ONE.H1';
  contentP = 'CULTURAL-WALL.CULTURAL-WALL-ONE.CONTENT-P';

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
