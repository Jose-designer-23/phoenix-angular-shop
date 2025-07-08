import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './shared/interceptors/logging.interceptor';
import { authInterceptor } from '@auth/interceptors/auth.interceptor';

registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([
      // loggingInterceptor,
      authInterceptor
    ])),
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
};
