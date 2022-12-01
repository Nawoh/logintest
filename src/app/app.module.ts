import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-733tzn7ozzp856d3.us.auth0.com',
      clientId: 'M1b7zf5tqDu8dXnZmIWR9J6YN1a33voE',
    }),
  ],
  declarations: [AppComponent, LoginButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
