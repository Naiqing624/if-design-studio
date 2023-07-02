import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-yuqinshan',
  templateUrl: './yuqinshan.component.html',
  styleUrls: ['./yuqinshan.component.scss']
})
export class YuqinshanComponent {

  images: string[] = ['../../../assets/images/t-shirts/models/1.png', '../../../assets/images/t-shirts/models/2.png', '../../../assets/images/t-shirts/models/3.png', '../../../assets/images/t-shirts/models/4.png', '../../../assets/images/t-shirts/models/5.png']; 

  logos: Logo[] = [
    { src: '../../../assets/images/slideshow/4.png', alt: '1' },
    { src: '../../../assets/images/slideshow/2.png', alt: '2' },
    { src: '../../../assets/images/slideshow/1.png', alt: '3' },
    { src: '../../../assets/images/slideshow/3.png', alt: '4' }
  ];
  opacityLogos = 1;
  currentIndex = 0;
  @ViewChild('sliderMain') sliderMain: ElementRef;

  constructor(private el: ElementRef) {
    setInterval(() => {
      this.removeLogo();
    }, 5000);
  }

  removeLogo(): void {
    if (this.logos.length > 0) {
      const logo = this.logos[0];
      this.logos.splice(0, 1);
      this.logos.push(logo);
    }
  }  

 prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
