import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*

  Module    =>  this contain declaration
  component => This contaion all HTML logics css
  Pipe => help to do runtime manupulation
  Service => do third party connection
  Router=> Use for routing
  */
