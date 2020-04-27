import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '@shared/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MenuComponent>
  ) {}

  ngOnInit() {
    this.beforeCreateForm();
  }

  private beforeCreateForm() {
    this.formLogin = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    const { formLogin } = this;
    const body = Object.assign({}, formLogin.value);
    console.log('login sesion...');
    console.log(body);
    this.dialogRef.close();
  }
}
