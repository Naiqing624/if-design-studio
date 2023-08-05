import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-three',
  templateUrl: './product-three.component.html',
  styleUrls: ['./product-three.component.scss']
})
export class ProductThreeComponent {
  opacitySection2 = 1;
  descriptionH1 = 'PRODUCT.PRODUCT-THREE.H1';
  contentP = 'PRODUCT.PRODUCT-THREE.CONTENT-P';

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
