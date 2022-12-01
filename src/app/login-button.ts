//Button not rendered and Error

/*+
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button (click)="login()">Log in</button>'
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) { }

  login() {
    this.auth.loginWithRedirect();
  }
}
*/

//Button rendered without Error

import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button (click)="login()">Log in</button>',
})
export class LoginButtonComponent {
  constructor() {}

  //Maybe the constructor here is the problem.
  //AuthService is a singleton in app.module and we try to built a new instance of it with
  //private auth: AuthService here ......   maybe ???
  //if so i still dont know how to fix it

  login() {
    console.log('The button itself is not the problem');
    //this.auth.loginWithRedirect();
  }
}
