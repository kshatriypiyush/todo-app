import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers : [
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    provideZoneChangeDetection({eventCoalescing:true}),
    provideAnimations()
  ]
})
  .catch((err) => console.error(err));
