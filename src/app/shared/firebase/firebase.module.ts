import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONFIG } from '@env/config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(CONFIG.configFirebase),
  ],
})
export class FirebaseModule {}
