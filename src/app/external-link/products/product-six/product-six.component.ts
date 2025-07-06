import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-six',
  templateUrl: './product-six.component.html',
  styleUrls: ['./product-six.component.scss']
})
export class ProductSixComponent {
  opacitySection2 = 1;
  descriptionH1 = 'PRODUCT.PRODUCT-SIX.H1';
  contentP = 'PRODUCT.PRODUCT-SIX.CONTENT-P';

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
