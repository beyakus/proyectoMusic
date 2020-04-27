import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginModule } from 'src/app/components/login/login.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegistryModule } from 'src/app/components/registry/registry.module';
import { RegistryComponent } from 'src/app/components/registry/registry.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LoginModule,
    MatDialogModule,
    RegistryModule,
  ],
  entryComponents: [LoginComponent, RegistryComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
