import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.scss']
})
export class ProductTwoComponent {
  opacitySection2 = 1;
  descriptionH1 = 'PRODUCT.PRODUCT-TWO.H1';
  contentP = 'PRODUCT.PRODUCT-TWO.CONTENT-P';

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
