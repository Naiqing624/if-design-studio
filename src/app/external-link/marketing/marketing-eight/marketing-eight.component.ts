import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marketing-eight',
  templateUrl: './marketing-eight.component.html',
  styleUrls: ['./marketing-eight.component.scss']
})
export class MarketingEightComponent {
  isExpanded = false;
  opacitySection2 = 1;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const tuilesSection2 = document.querySelector('.tuilesSection2');

    if (tuilesSection2 && tuilesSection2.getBoundingClientRect().top <= window.innerHeight) {
      this.opacitySection2 = 1;
    }else{
      this.opacitySection2 = 0;
    }
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth < 700) {
      this.isExpanded = true;
    }else {
      this.isExpanded = false;
    }
  }
}
