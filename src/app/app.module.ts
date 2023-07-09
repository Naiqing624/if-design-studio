import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { ExternalLinkModule } from './external-link/external-link.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    HomeModule,
    HttpClientModule,
    InternationalizationModule,
    ExternalLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
