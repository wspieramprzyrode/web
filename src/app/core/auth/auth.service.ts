import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public me(): Observable<CognitoUser> {
    return from(Auth.currentAuthenticatedUser());
  }
  isLogged(): boolean {
    let logged = false;
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user)
        logged = true;
      })
      .catch(err => { logged = false; });
    return logged;
  }
}
