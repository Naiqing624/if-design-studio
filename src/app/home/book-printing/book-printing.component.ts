import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-book-printing',
  templateUrl: './book-printing.component.html',
  styleUrls: ['./book-printing.component.scss']
})
export class BookPrintingComponent implements OnInit{

  selectedLanguage = 'EN';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.selectedLanguage = language;
    });
  }
}
