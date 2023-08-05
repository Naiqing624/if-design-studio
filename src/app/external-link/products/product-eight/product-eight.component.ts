import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-eight',
  templateUrl: './product-eight.component.html',
  styleUrls: ['./product-eight.component.scss']
})
export class ProductEightComponent {
  opacitySection2 = 1;
  descriptionH1 = 'PRODUCT.PRODUCT-EIGHT.H1';
  contentP = 'PRODUCT.PRODUCT-EIGHT.CONTENT-P';

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
