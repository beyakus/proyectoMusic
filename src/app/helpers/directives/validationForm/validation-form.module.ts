import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormDirective } from './validation-form.directive';

@NgModule({
  declarations: [ValidationFormDirective],
  imports: [CommonModule],
  exports: [ValidationFormDirective],
})
export class ValidationFormModule {}
