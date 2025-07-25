import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguageSubject = new BehaviorSubject<string>('EN');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
  }
}
