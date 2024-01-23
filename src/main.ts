/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { loadTranslations } from '@angular/localize';
import { getTranslations } from '@soluling/angular';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es'; 
import en from '@angular/common/locales/en'; 

registerLocaleData(es, 'es'); 
registerLocaleData(en, 'en'); 

getTranslations('assets/i18n').then((translations) => {
  if (translations) loadTranslations(translations);

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});
