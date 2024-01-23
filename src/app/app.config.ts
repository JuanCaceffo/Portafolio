import { LOCALE_ID, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LocaleService } from '@soluling/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    LocaleService,
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (service: LocaleService) => service.localeId,
    },
  ],
};
