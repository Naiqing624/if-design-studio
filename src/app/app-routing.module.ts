import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { UiUxComponent } from './home/ui-ux/ui-ux.component';
import { GraphicsComponent } from './home/graphics/graphics.component';
import { LogoDesignComponent } from './home/logo-design/logo-design.component';
import { YuqinshanComponent } from './external-link/yuqinshan/yuqinshan.component';
import { MarketingComponent } from './home/marketing/marketing.component';
import { PackagingWorkComponent } from './external-link/packaging-work/packaging-work.component';
import { ProductOneComponent } from './external-link/products/product-one/product-one.component';
import { ProductTwoComponent } from './external-link/products/product-two/product-two.component';
import { ProductThreeComponent } from './external-link/products/product-three/product-three.component';
import { ProductFourComponent } from './external-link/products/product-four/product-four.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "关于我们", component: AboutComponent},
  {path: "联系我们", component: ContactComponent},
  {path: "UI/UX", component: UiUxComponent},
  {path: "graphics", component: GraphicsComponent},
  {path: "logo-design", component: LogoDesignComponent},
  {path: "marketing", component: MarketingComponent},
  {path: "yuqinshan", component: YuqinshanComponent},
  {path: "packaging-work", component: PackagingWorkComponent},
  {path: "product-one", component: ProductOneComponent},
  {path: "product-two", component: ProductTwoComponent},
  {path: "product-three", component: ProductThreeComponent},
  {path: "product-four", component: ProductFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
