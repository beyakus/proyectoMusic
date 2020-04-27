import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { CardModule } from '@shared/card/card.module';
import { SanitizerModule } from '@helpers/pipes/sanitizer/sanitizer.module';

@NgModule({
  declarations: [MapsComponent],
  imports: [CommonModule, CardModule, SanitizerModule],
  exports: [MapsComponent],
})
export class MapsModule {}
