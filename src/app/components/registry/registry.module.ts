import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryComponent } from './registry.component';
import { CardModule } from '@shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FirebaseModule } from '@shared/firebase/firebase.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistryService } from './services/registry.service';
import { ValidationFormModule } from '@helpers/directives/validationForm/validation-form.module';
import { NotificationsModule } from '@shared/notifications/notifications.module';

@NgModule({
  declarations: [RegistryComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    FirebaseModule,
    HttpClientModule,
    ValidationFormModule,
    NotificationsModule,
  ],
  providers: [RegistryService],
})
export class RegistryModule {}
