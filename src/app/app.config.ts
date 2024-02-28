import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import {  HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'
import { TranslocoHttpLoader } from './data/services/transloco-loader'
import { provideTransloco } from '@ngneat/transloco'
import { LangHttpInerceptorService } from './data/services/lang-http-inerceptor.service'

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
    multiple: true,
},
]

export const appConfig: ApplicationConfig = {
  providers: providers,
}
