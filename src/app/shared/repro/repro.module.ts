import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReproComponent } from './repro.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ReproComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ReproComponent],
})
export class ReproModule {}
