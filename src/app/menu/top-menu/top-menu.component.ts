import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/app/home/services/footer.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  sidebarOpen = false;
  linksDisplay = true;
  
  constructor(private readonly router: Router, private readonly footerService: FooterService){}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  //When sidebar is toggle, display or not display the sidebar
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth > 1000) {
      this.linksDisplay = true;
    }else {
      this.linksDisplay = false;
    }
  }

  changeCSS(cssClass: string) {
    this.footerService.cssClass = cssClass;
  }
}
