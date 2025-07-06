import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cultural-wall-two',
  templateUrl: './cultural-wall-two.component.html',
  styleUrls: ['./cultural-wall-two.component.scss']
})
export class CulturalWallTwoComponent {
  opacitySection2 = 1;

  descriptionH1 = 'CULTURAL-WALL.CULTURAL-WALL-TWO.H1';
  contentP = 'CULTURAL-WALL.CULTURAL-WALL-TWO.CONTENT-P';

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
