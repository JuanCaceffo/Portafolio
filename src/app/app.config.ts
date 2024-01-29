import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { TranslocoHttpLoader } from './data/services/transloco-loader'
import { provideTransloco } from '@ngneat/transloco'

export type langAvilableTypes = 'en'|'es' 
const langs = ['en', 'es']
export const providers = [
  provideRouter(routes),
  provideHttpClient(),
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
]

export const appConfig: ApplicationConfig = {
  providers: providers,
}
