import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegistryComponent } from 'src/app/components/registry/registry.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  ngOnDestroy() {}

  private openDialog(nameComponent, configModal) {
    this.dialog.open(nameComponent, configModal);
  }

  login() {
    const configModal = {
      width: '400px',
      height: '350px',
    };
    this.openDialog(LoginComponent, configModal);
  }

  registry() {
    const configModal = {
      width: '400px',
      height: '400px',
    };
    this.openDialog(RegistryComponent, configModal);
  }
}
