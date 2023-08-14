import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-five',
  templateUrl: './marketing-five.component.html',
  styleUrls: ['./marketing-five.component.scss']
})
export class MarketingFiveComponent implements OnInit{
  isExpanded = false;
  opacitySection2 = 1;

  descriptionH1 = 'MARKETING.MARKETING-FIVE.H1';
  contentP = 'MARKETING.MARKETING-FIVE.CONTENT-P';

  ngOnInit(): void {
    this.checkScreenSize();
  }

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
