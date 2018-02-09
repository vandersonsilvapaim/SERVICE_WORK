import { enableProdMode } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  registerSw();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

function registerSw(): void {
  if ('serviceWorker' in navigator) {
           navigator.serviceWorker.register('/sw.js', {scope: './'}).then(
        
        registration => {
        console.log('SW registered: ', registration);
        registration.pushManager.subscribe({ userVisibleOnly: true });
      }
    
    ).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    
  }
}