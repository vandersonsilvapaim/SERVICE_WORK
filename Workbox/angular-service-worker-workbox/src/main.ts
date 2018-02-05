import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if ('serviceWorker' in this.navigator) {
  this.window.addEventListener('load', () => {
    this.navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
      this.registration.pushManager.subscribe({userVisibleOnly: true});
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
