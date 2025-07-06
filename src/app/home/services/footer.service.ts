// shared.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  cssClass: string;

  constructor() {
    this.cssClass = localStorage.getItem('cssClass') || 'footer';
  }

  setCssClass(value: string) {
    this.cssClass = value;
    localStorage.setItem('cssClass', value);
  }
}
