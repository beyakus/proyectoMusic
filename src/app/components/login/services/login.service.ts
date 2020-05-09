import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private af: AngularFireAuth) {}

  login(body) {
    return from(this.af.signInWithEmailAndPassword(body.email, body.password));
  }
}
