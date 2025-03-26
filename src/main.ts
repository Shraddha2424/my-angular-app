import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // ✅ Use full path to app folder
import { appConfig } from './app/app.config'; // ✅ Use full path to app folder

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
