import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedLanguage = "";

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
        this.selectedLanguage = language;
    });
  }
}
