import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';

@NgModule({
  declarations: [
    TopMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopMenuComponent,
    FooterMenuComponent
  ]
})
export class MenuModule { }
