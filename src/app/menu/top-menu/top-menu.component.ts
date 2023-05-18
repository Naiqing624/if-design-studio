import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  sidebarOpen = false;
  linksDisplay = true;
  
  constructor(private readonly router: Router){}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  //When sidebar is toggle, display or not display the sidebar
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(): void{
    if (window.innerWidth > 900) {
      this.linksDisplay = true;
    }else {
      this.linksDisplay = false;
    }
  }
}
