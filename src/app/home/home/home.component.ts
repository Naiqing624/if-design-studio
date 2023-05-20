import { Component, HostListener } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  startX: number;
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
    // Défiler horizontalement en ajustant la valeur de défilement (par exemple, utiliser scrollLeft)
    const logoList = document.getElementById('logo-list');
    if (logoList) {
      logoList.scrollLeft -= distanceX;
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
    // Défiler horizontalement en ajustant la valeur de défilement (par exemple, utiliser scrollLeft)
    const logoList = document.getElementById('logo-list');
    if (logoList) {
      logoList.scrollLeft -= distanceX;
    }
    this.startX = touch.clientX;
  };

  onTouchEnd = () => {
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  };
}
