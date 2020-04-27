import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidFormDirective } from './valid-form.directive';

@NgModule({
  declarations: [ValidFormDirective],
  imports: [CommonModule],
  exports: [ValidFormDirective],
})
export class ValidFormModule {}
