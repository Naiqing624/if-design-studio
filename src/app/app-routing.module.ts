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

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "关于我们", component: AboutComponent},
  {path: "联系我们", component: ContactComponent},
  {path: "UI/UX", component: UiUxComponent},
  {path: "graphics", component: GraphicsComponent},
  {path: "logo-design", component: LogoDesignComponent},
  {path: "marketing", component: MarketingComponent},
  {path: "logo-one", component: LogoOneComponent},
  {path: "marketing-one", component: MarketingOneComponent},
  {path: "marketing-two", component: MarketingTwoComponent},
  {path: "marketing-three", component: MarketingThreeComponent},
  {path: "product-one", component: ProductOneComponent},
  {path: "product-two", component: ProductTwoComponent},
  {path: "product-three", component: ProductThreeComponent},
  {path: "product-four", component: ProductFourComponent},
  {path: "product-five", component: ProductFiveComponent},
  {path: "product-six", component: ProductSixComponent},
  {path: "product-seven", component: ProductSevenComponent},
  {path: "product-eight", component: ProductEightComponent},
  {path: "product-nine", component: ProductNineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
