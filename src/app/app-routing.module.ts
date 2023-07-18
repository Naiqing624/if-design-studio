import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { UiUxComponent } from './home/ui-ux/ui-ux.component';
import { GraphicsComponent } from './home/graphics/graphics.component';
import { LogoDesignComponent } from './home/logo-design/logo-design.component';
import { MarketingComponent } from './home/marketing/marketing.component';
import { ProductOneComponent } from './external-link/products/product-one/product-one.component';
import { ProductTwoComponent } from './external-link/products/product-two/product-two.component';
import { ProductThreeComponent } from './external-link/products/product-three/product-three.component';
import { ProductFourComponent } from './external-link/products/product-four/product-four.component';
import { LogoOneComponent } from './external-link/logos/logo-one/logo-one.component';
import { MarketingThreeComponent } from './external-link/marketing/marketing-three/marketing-three.component';
import { MarketingOneComponent } from './external-link/marketing/marketing-one/marketing-one.component';
import { MarketingTwoComponent } from './external-link/marketing/marketing-two/marketing-two.component';
import { ProductEightComponent } from './external-link/products/product-eight/product-eight.component';
import { ProductFiveComponent } from './external-link/products/product-five/product-five.component';
import { ProductNineComponent } from './external-link/products/product-nine/product-nine.component';
import { ProductSevenComponent } from './external-link/products/product-seven/product-seven.component';
import { ProductSixComponent } from './external-link/products/product-six/product-six.component';
import { MarketingEightComponent } from './external-link/marketing/marketing-eight/marketing-eight.component';
import { MarketingFiveComponent } from './external-link/marketing/marketing-five/marketing-five.component';
import { MarketingFourComponent } from './external-link/marketing/marketing-four/marketing-four.component';
import { MarketingNineComponent } from './external-link/marketing/marketing-nine/marketing-nine.component';
import { MarketingSevenComponent } from './external-link/marketing/marketing-seven/marketing-seven.component';
import { MarketingSixComponent } from './external-link/marketing/marketing-six/marketing-six.component';
import { ECommerceOneComponent } from './external-link/e-commerce/e-commerce-one/e-commerce-one.component';
import { ECommerceFiveComponent } from './external-link/e-commerce/e-commerce-five/e-commerce-five.component';
import { ECommerceFourComponent } from './external-link/e-commerce/e-commerce-four/e-commerce-four.component';
import { ECommerceThreeComponent } from './external-link/e-commerce/e-commerce-three/e-commerce-three.component';
import { ECommerceTwoComponent } from './external-link/e-commerce/e-commerce-two/e-commerce-two.component';
import { FlyerOneComponent } from './external-link/flyer/flyer-one/flyer-one.component';
import { FlyerFiveComponent } from './external-link/flyer/flyer-five/flyer-five.component';
import { FlyerFourComponent } from './external-link/flyer/flyer-four/flyer-four.component';
import { FlyerSixComponent } from './external-link/flyer/flyer-six/flyer-six.component';
import { FlyerThreeComponent } from './external-link/flyer/flyer-three/flyer-three.component';
import { FlyerTwoComponent } from './external-link/flyer/flyer-two/flyer-two.component';
import { MarketingFlyerSixComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-six/marketing-flyer-six.component';
import { MarketingFlyerFiveComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-five/marketing-flyer-five.component';
import { MarketingFlyerFourComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-four/marketing-flyer-four.component';
import { MarketingFlyerOneComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-one/marketing-flyer-one.component';
import { MarketingFlyerThreeComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-three/marketing-flyer-three.component';
import { MarketingFlyerTwoComponent } from './external-link/marketing/marketing-two/flyer/marketing-flyer-two/marketing-flyer-two.component';
import { ArtComponent } from './home/art/art.component';
import { ArtOneComponent } from './external-link/art/art-one/art-one.component';
import { ArtFiveComponent } from './external-link/art/art-five/art-five.component';
import { ArtFourComponent } from './external-link/art/art-four/art-four.component';
import { ArtSixComponent } from './external-link/art/art-six/art-six.component';
import { ArtThreeComponent } from './external-link/art/art-three/art-three.component';
import { ArtTwoComponent } from './external-link/art/art-two/art-two.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "UI/UX", component: UiUxComponent},
  {path: "art", component: ArtComponent},
  {path: "graphics", component: GraphicsComponent},
  {path: "logo-design", component: LogoDesignComponent},
  {path: "marketing", component: MarketingComponent},
  {path: "logo-one", component: LogoOneComponent},
  {path: "marketing-one", component: MarketingOneComponent},
  {path: "marketing-two", component: MarketingTwoComponent},
  {path: "marketing-three", component: MarketingThreeComponent},
  {path: "marketing-four", component: MarketingFourComponent},
  {path: "marketing-five", component: MarketingFiveComponent},
  {path: "marketing-six", component: MarketingSixComponent},
  {path: "marketing-seven", component: MarketingSevenComponent},
  {path: "marketing-eight", component: MarketingEightComponent},
  {path: "marketing-nine", component: MarketingNineComponent},
  {path: "product-one", component: ProductOneComponent},
  {path: "product-two", component: ProductTwoComponent},
  {path: "product-three", component: ProductThreeComponent},
  {path: "product-four", component: ProductFourComponent},
  {path: "product-five", component: ProductFiveComponent},
  {path: "product-six", component: ProductSixComponent},
  {path: "product-seven", component: ProductSevenComponent},
  {path: "product-eight", component: ProductEightComponent},
  {path: "product-nine", component: ProductNineComponent},
  {path: "e-commerce-one", component: ECommerceOneComponent},
  {path: "e-commerce-two", component: ECommerceTwoComponent},
  {path: "e-commerce-three", component: ECommerceThreeComponent},
  {path: "e-commerce-four", component: ECommerceFourComponent},
  {path: "e-commerce-five", component: ECommerceFiveComponent},
  {path: "flyer-one", component: FlyerOneComponent},
  {path: "flyer-two", component: FlyerTwoComponent},
  {path: "flyer-three", component: FlyerThreeComponent},
  {path: "flyer-four", component: FlyerFourComponent},
  {path: "flyer-five", component: FlyerFiveComponent},
  {path: "flyer-six", component: FlyerSixComponent},
  {path: "marketing-flyer-one", component: MarketingFlyerOneComponent},
  {path: "marketing-flyer-two", component: MarketingFlyerTwoComponent},
  {path: "marketing-flyer-three", component: MarketingFlyerThreeComponent},
  {path: "marketing-flyer-four", component: MarketingFlyerFourComponent},
  {path: "marketing-flyer-five", component: MarketingFlyerFiveComponent},
  {path: "marketing-flyer-six", component: MarketingFlyerSixComponent},
  {path: "art-one", component: ArtOneComponent},
  {path: "art-two", component: ArtTwoComponent},
  {path: "art-three", component: ArtThreeComponent},
  {path: "art-four", component: ArtFourComponent},
  {path: "art-five", component: ArtFiveComponent},
  {path: "art-six", component: ArtSixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
