import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { TranslateModule } from '@ngx-translate/core';
import { GraphicsComponent } from './graphics/graphics.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { ExternalLinkModule } from '../external-link/external-link.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UiUxComponent,
    GraphicsComponent,
    LogoDesignComponent
  ],
  imports: [
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
