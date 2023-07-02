import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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

  opacitySection1 = 1;
  opacitySection2 = 1;
  opacitySection3 = 1;
  opacitySection4 = 1;

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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const section3 = document.querySelector('.section3');
    const section4 = document.querySelector('.section4');

    if (section1 && section1.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection1 = 1;
    }else{
      this.opacitySection1 = 0;
    }

    if (section2 && section2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }

    if (section3 && section3.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection3 = 1;
    }else{
      this.opacitySection3 = 0;
    }

    if (section4 && section4.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection4 = 1;
    }else{
      this.opacitySection4 = 0;
    }
  }
}
