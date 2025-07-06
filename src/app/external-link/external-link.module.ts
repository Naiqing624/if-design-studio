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
import { MarketingFlyerSixComponent } from './marketing/marketing-two/flyer/marketing-flyer-six/marketing-flyer-six.component';
import { MarketingFlyerFiveComponent } from './marketing/marketing-two/flyer/marketing-flyer-five/marketing-flyer-five.component';
import { MarketingFlyerFourComponent } from './marketing/marketing-two/flyer/marketing-flyer-four/marketing-flyer-four.component';
import { MarketingFlyerThreeComponent } from './marketing/marketing-two/flyer/marketing-flyer-three/marketing-flyer-three.component';
import { MarketingFlyerTwoComponent } from './marketing/marketing-two/flyer/marketing-flyer-two/marketing-flyer-two.component';
import { MarketingFlyerOneComponent } from './marketing/marketing-two/flyer/marketing-flyer-one/marketing-flyer-one.component';
import { FlyerOneComponent } from './flyer/flyer-one/flyer-one.component';
import { FlyerTwoComponent } from './flyer/flyer-two/flyer-two.component';
import { FlyerThreeComponent } from './flyer/flyer-three/flyer-three.component';
import { FlyerFourComponent } from './flyer/flyer-four/flyer-four.component';
import { FlyerSixComponent } from './flyer/flyer-six/flyer-six.component';
import { FlyerFiveComponent } from './flyer/flyer-five/flyer-five.component';
import { ArtOneComponent } from './art/art-one/art-one.component';
import { ArtTwoComponent } from './art/art-two/art-two.component';
import { ArtThreeComponent } from './art/art-three/art-three.component';
import { ArtFourComponent } from './art/art-four/art-four.component';
import { ArtFiveComponent } from './art/art-five/art-five.component';
import { ArtSixComponent } from './art/art-six/art-six.component';
import { LogoTwoComponent } from './logos/logo-two/logo-two.component';
import { LogoThreeComponent } from './logos/logo-three/logo-three.component';
import { LogoFourComponent } from './logos/logo-four/logo-four.component';
import { LogoFiveComponent } from './logos/logo-five/logo-five.component';
import { CulturalWallOneComponent } from './marketing/marketing-nine/cultural-wall/cultural-wall-one/cultural-wall-one.component';
import { CulturalWallTwoComponent } from './marketing/marketing-nine/cultural-wall/cultural-wall-two/cultural-wall-two.component';
import { CulturalWallThreeComponent } from './marketing/marketing-nine/cultural-wall/cultural-wall-three/cultural-wall-three.component';
import { CulturalWallFourComponent } from './marketing/marketing-nine/cultural-wall/cultural-wall-four/cultural-wall-four.component';
import { CulturalWallFiveComponent } from './marketing/marketing-nine/cultural-wall/cultural-wall-five/cultural-wall-five.component';
import { NewestWorkOneComponent } from './newest-works/newest-work-one/newest-work-one.component';
import { ConfidentialComponent } from './confidential/confidential.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

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
    MarketingFlyerSixComponent,
    MarketingFlyerFiveComponent,
    MarketingFlyerFourComponent,
    MarketingFlyerThreeComponent,
    MarketingFlyerTwoComponent,
    MarketingFlyerOneComponent,
    FlyerOneComponent,
    FlyerTwoComponent,
    FlyerThreeComponent,
    FlyerFourComponent,
    FlyerFiveComponent,
    FlyerSixComponent,
    ArtOneComponent,
    ArtTwoComponent,
    ArtThreeComponent,
    ArtFourComponent,
    ArtFiveComponent,
    ArtSixComponent,
    LogoTwoComponent,
    LogoThreeComponent,
    LogoFourComponent,
    LogoFiveComponent,
    CulturalWallOneComponent,
    CulturalWallTwoComponent,
    CulturalWallThreeComponent,
    CulturalWallFourComponent,
    CulturalWallFiveComponent,
    NewestWorkOneComponent,
    ConfidentialComponent,
    LegalNoticeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class ExternalLinkModule { }
