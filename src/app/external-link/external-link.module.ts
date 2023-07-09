import { NgModule } from '@angular/core';
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
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductFiveComponent } from './products/product-five/product-five.component';
import { ProductSixComponent } from './products/product-six/product-six.component';
import { ProductSevenComponent } from './products/product-seven/product-seven.component';
import { ProductEightComponent } from './products/product-eight/product-eight.component';
import { ProductNineComponent } from './products/product-nine/product-nine.component';
import { MarketingFourComponent } from './marketing/marketing-four/marketing-four.component';
import { MarketingFiveComponent } from './marketing/marketing-five/marketing-five.component';
import { MarketingSixComponent } from './marketing/marketing-six/marketing-six.component';
import { MarketingSevenComponent } from './marketing/marketing-seven/marketing-seven.component';
import { MarketingEightComponent } from './marketing/marketing-eight/marketing-eight.component';
import { MarketingNineComponent } from './marketing/marketing-nine/marketing-nine.component';
import { ECommerceOneComponent } from './e-commerce/e-commerce-one/e-commerce-one.component';
import { ECommerceTwoComponent } from './e-commerce/e-commerce-two/e-commerce-two.component';
import { ECommerceThreeComponent } from './e-commerce/e-commerce-three/e-commerce-three.component';
import { ECommerceFourComponent } from './e-commerce/e-commerce-four/e-commerce-four.component';
import { ECommerceFiveComponent } from './e-commerce/e-commerce-five/e-commerce-five.component';
import { ECommerceSixComponent } from './e-commerce/e-commerce-six/e-commerce-six.component';

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
    LogoOneComponent,
    ProductFiveComponent,
    ProductSixComponent,
    ProductSevenComponent,
    ProductEightComponent,
    ProductNineComponent,
    MarketingFourComponent,
    MarketingFiveComponent,
    MarketingSixComponent,
    MarketingSevenComponent,
    MarketingEightComponent,
    MarketingNineComponent,
    ECommerceOneComponent,
    ECommerceTwoComponent,
    ECommerceThreeComponent,
    ECommerceFourComponent,
    ECommerceFiveComponent,
    ECommerceSixComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class ExternalLinkModule { }
