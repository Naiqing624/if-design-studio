import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from 'src/app/home/services/footer.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  sidebarOpen = false;
  linksDisplay = true;
  selectedLanguage = 'FR';
  
  constructor(private readonly router: Router, private readonly footerService: FooterService, private readonly translateService: TranslateService, private languageService: LanguageService){}

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

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang);
    this.translateService.currentLang = this.selectedLanguage;
    this.translateService.use(this.translateService.currentLang);
    this.translateService.setDefaultLang(this.translateService.currentLang);
    this.translateService.reloadLang(this.selectedLanguage);
  }
}
