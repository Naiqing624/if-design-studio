import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-seven',
  templateUrl: './product-seven.component.html',
  styleUrls: ['./product-seven.component.scss']
})
export class ProductSevenComponent {
  opacitySection2 = 1;
  descriptionH1 = 'PRODUCT.PRODUCT-SEVEN.H1';
  contentP = 'PRODUCT.PRODUCT-SEVEN.CONTENT-P';

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
