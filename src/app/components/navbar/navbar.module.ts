import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MenuModule } from '@shared/menu/menu.module';
import { ReproModule } from '@shared/repro/repro.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MenuModule, ReproModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
