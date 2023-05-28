import { Component, HostListener } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  startX: number;
  opacitySection1 = 1;
  opacitySection2 = 1;
  opacityLogos = 1;

  logos: Logo[] = [
    { src: '../../../assets/images/logos/apple.png', alt: 'apple' },
    { src: '../../../assets/images/logos/bk.png', alt: 'burger king' },
    { src: '../../../assets/images/logos/bmw.png', alt: 'bmw' },
    { src: '../../../assets/images/logos/cc.png', alt: 'coco chanel' },
    { src: '../../../assets/images/logos/dior.png', alt: 'dior' },
    { src: '../../../assets/images/logos/kfc.png', alt: 'kfc' },
    { src: '../../../assets/images/logos/pepsi.png', alt: 'pepsi' },
    { src: '../../../assets/images/logos/total.png', alt: 'total' }
  ];

  constructor() {
    setInterval(() => {
      this.removeLogo();
    }, 5000);
  }
  
  removeLogo() {
    if (this.logos.length > 0) {
      const logo = this.logos[0];
      this.logos.splice(0, 1);
      this.logos.push(logo);
    }
  }  

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    const distanceX = event.clientX - this.startX;
    const logoList = document.getElementById('logo-list');
    if (logoList) {
      const logoListRect = logoList.getBoundingClientRect();
      if (event.clientY >= logoListRect.top && event.clientY <= logoListRect.bottom) {
        logoList.scrollLeft -= distanceX;
      }
    }
    this.startX = event.clientX;
  };  

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    this.startX = touch.clientX;
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
  }

  onTouchMove = (event: TouchEvent) => {
    const touch = event.touches[0];
    const distanceX = touch.clientX - this.startX;
    const logoList = document.getElementById('logo-list');
    if (logoList) {
      const logoListRect = logoList.getBoundingClientRect();
      if (touch.clientY >= logoListRect.top && touch.clientY <= logoListRect.bottom) {
        logoList.scrollLeft -= distanceX;
      }
    }
    this.startX = touch.clientX;
  };
  

  onTouchEnd = () => {
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  };

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const tuiles = document.querySelector('.tuiles');
    const tuilesSection2 = document.querySelector('.tuilesSection2');
    const logos = document.querySelector('.logo-list');

    if (tuiles && tuiles.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection1 = 1;
    }else{
      this.opacitySection1 = 0;
    }

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }

    if (logos && logos.getBoundingClientRect().top <= window.innerHeight) {
      this.opacityLogos = 1;
    }else{
      this.opacityLogos = 0;
    }
  }
}
