import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-four',
  templateUrl: './product-four.component.html',
  styleUrls: ['./product-four.component.scss']
})
export class ProductFourComponent {
  opacitySection2 = 1;

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
