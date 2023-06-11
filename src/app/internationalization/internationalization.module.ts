import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

/**
 * AoT requires an exported function for factories.
 * @param httpClient the service used to perform HTTP requests.
 */
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [TranslateService],
  exports: [TranslateModule]
})
export class InternationalizationModule {
  /**
   * We set up the language of the website here.
   * @param translate used to manage the translation of the webapp.
   */
  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(["en", "fr", "cn"]);
    this.translate.setDefaultLang("cn");
    this.translate.use("cn");
  }
}
