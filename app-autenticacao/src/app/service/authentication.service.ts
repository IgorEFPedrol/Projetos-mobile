import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public ngFireAuth: AngularFireAuth
  ) { }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  GoogleAuth(){
    return this.ngFireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
