import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cultural-wall-three',
  templateUrl: './cultural-wall-three.component.html',
  styleUrls: ['./cultural-wall-three.component.scss']
})
export class CulturalWallThreeComponent {
  opacitySection2 = 1;

  descriptionH1 = 'CULTURAL-WALL.CULTURAL-WALL-THREE.H1';
  contentP = 'CULTURAL-WALL.CULTURAL-WALL-THREE.CONTENT-P';

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
