import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import {  HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'
import { TranslocoHttpLoader } from './data/services/transloco-loader'
import { provideTransloco } from '@ngneat/transloco'
import { LangHttpInerceptorService } from './data/services/lang-http-inerceptor.service'
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { TimeoutHttpInterceptorService } from './data/services/timeout-http-interceptor.service'


export type langAvilableTypes = 'en'|'es' 
const langs = ['en', 'es']

export const providers = [
  provideRouter(routes),
  provideTransloco({
    config: {
      availableLangs: langs,
      defaultLang: 'es',
      // Remove this option if your application doesn't support changing language in runtime.
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    },
    loader: TranslocoHttpLoader,
  }),
  provideHttpClient(
    withInterceptorsFromDi()
  ),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LangHttpInerceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimeoutHttpInterceptorService,
    multi: true,
  },
  provideAnimations(),
  {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500, verticalPosition:'top'}}
]

export const appConfig: ApplicationConfig = {
  providers: providers,
}
