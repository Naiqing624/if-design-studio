import { Component } from '@angular/core';
import { FooterService } from 'src/app/home/services/footer.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent {
  currentUrl: string;

  selectedLanguage = 'FR';

  constructor(public readonly footerService: FooterService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });
  }

}
