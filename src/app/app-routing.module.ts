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

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "关于我们", component: AboutComponent},
  {path: "联系我们", component: ContactComponent},
  {path: "UI/UX", component: UiUxComponent},
  {path: "graphics", component: GraphicsComponent},
  {path: "logo-design", component: LogoDesignComponent},
  {path: "yuqinshan", component: YuqinshanComponent},
  {path: "marketing", component: MarketingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
