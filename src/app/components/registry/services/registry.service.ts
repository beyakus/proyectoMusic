import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { BodyForm } from '../interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  constructor(private af: AngularFireAuth) {}

  registryUser(data: BodyForm) {
    return from(
      this.af.createUserWithEmailAndPassword(data.email, data.password)
    );
  }
}
