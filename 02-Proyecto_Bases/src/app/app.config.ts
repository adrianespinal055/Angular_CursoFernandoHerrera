import { ApplicationConfig, Component, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar';
import { routes } from './app.routes';
import { LocalizedString } from '@angular/compiler';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    //HashStrategy
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy,
    }
  ]
};
