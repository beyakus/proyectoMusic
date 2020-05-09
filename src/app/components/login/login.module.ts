import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CardModule } from '@shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FirebaseModule } from '@shared/firebase/firebase.module';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidationFormModule } from '@helpers/directives/validationForm/validation-form.module';
import { NotificationsModule } from '@shared/notifications/notifications.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FirebaseModule,
    HttpClientModule,
    ValidationFormModule,
    NotificationsModule,
  ],
  exports: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
