import { Component, HostListener, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { LanguageService } from 'src/app/language.service';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startX: number;
  opacitySection1 = 1;
  opacitySection2 = 1;
  opacityLogos = 1;

  logos: Logo[] = [
    { src: '../../../assets/images/home/logos/1.png', alt: '1' },
    { src: '../../../assets/images/home/logos/2.png', alt: '2' },
    { src: '../../../assets/images/home/logos/3.png', alt: '3' },
    { src: '../../../assets/images/home/logos/4.png', alt: '4' },
    { src: '../../../assets/images/home/logos/5.png', alt: '5' },
    { src: '../../../assets/images/home/logos/6.png', alt: '6' },
    { src: '../../../assets/images/home/logos/7.png', alt: '7' },
    { src: '../../../assets/images/home/logos/8.png', alt: '8' },
    { src: '../../../assets/images/home/logos/9.png', alt: '9' },
    { src: '../../../assets/images/home/logos/10.png', alt: '10' }
  ];

  selectedLanguage = 'EN';

  constructor(private readonly footerService: FooterService, private languageService: LanguageService) {
    setInterval(() => {
      this.removeLogo();
    }, 5000);
  }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });
    this.footerService.setCssClass('footer');
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
