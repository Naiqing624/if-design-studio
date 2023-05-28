import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UiUxComponent
  ],
  imports: [
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
