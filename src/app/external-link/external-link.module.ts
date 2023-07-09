import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevDirective } from './logos/logo-one/prev.directive';
import { NextDirective } from './logos/logo-one/next.directive';
import { ProductOneComponent } from './products/product-one/product-one.component';
import { ProductTwoComponent } from './products/product-two/product-two.component';
import { ProductThreeComponent } from './products/product-three/product-three.component';
import { ProductFourComponent } from './products/product-four/product-four.component';
import { MarketingOneComponent } from './marketing/marketing-one/marketing-one.component';
import { MarketingTwoComponent } from './marketing/marketing-two/marketing-two.component';
import { MarketingThreeComponent } from './marketing/marketing-three/marketing-three.component';
import { LogoOneComponent } from './logos/logo-one/logo-one.component';

@NgModule({
  declarations: [
    PrevDirective,
    NextDirective,
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductFourComponent,
    MarketingOneComponent,
    MarketingTwoComponent,
    MarketingThreeComponent,
    LogoOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExternalLinkModule { }
