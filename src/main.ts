import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()), // Enable hash-based routing
    { provide: BrowserAnimationsModule, useValue: BrowserAnimationsModule },
  ],
}).catch((err) => console.error(err));
