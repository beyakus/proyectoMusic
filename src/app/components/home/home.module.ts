import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from '@shared/card/card.module';
import { MapsModule } from '@shared/maps/maps.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule, MapsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
