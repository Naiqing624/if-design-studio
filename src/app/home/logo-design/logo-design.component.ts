import { Component, HostListener } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-logo-design',
  templateUrl: './logo-design.component.html',
  styleUrls: ['./logo-design.component.scss']
})
export class LogoDesignComponent {
  logos: Logo[] = [
    { src: '../../../assets/images/logos/hairsalon.png', alt: 'hairsalon' },
    { src: '../../../assets/images/logos/lemon.png', alt: 'lemon' },
    { src: '../../../assets/images/logos/baiweiyixuan.png', alt: 'baiweiyixuan' },
    { src: '../../../assets/images/logos/bajiajiu.png', alt: 'bajiajiu' },
    { src: '../../../assets/images/logos/elephant.png', alt: 'elephant' }
  ];

  opacitySection2 = 1;

  contentOne = 'LOGO-DESIGN.CONTENT-ONE';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const tuilesSection2 = document.querySelector('.tuilesSection2');

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }
}
