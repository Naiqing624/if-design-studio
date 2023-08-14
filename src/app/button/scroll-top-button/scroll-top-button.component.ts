import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent implements OnInit {

  opacitySection1 = 1;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  checkScreenSize(): void {
    if (window.scrollY > 1000) {
      this.opacitySection1 = 1;
    }else{
      this.opacitySection1 = 0;
    }
  }
}
