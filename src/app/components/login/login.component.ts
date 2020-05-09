import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '@shared/menu/menu.component';
import { LoginService } from './services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CONFIG } from '@env/config';
import { ToastrService } from 'ngx-toastr';
import { messages } from '@config/messagesToast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  readonly UnSubscribe: Subject<void> = new Subject<void>();
  formLogin: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MenuComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.beforeCreateForm();
  }

  ngOnDestroy() {
    this.UnSubscribe.next();
    this.UnSubscribe.complete();
  }

  private beforeCreateForm() {
    this.formLogin = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.pattern(CONFIG.regexEmail)],
      ],
      password: [null, Validators.required],
    });
  }

  login() {
    const { formLogin, loginService, UnSubscribe } = this;
    const body = Object.assign({}, formLogin.value);
    loginService
      .login(body)
      .pipe(takeUntil(UnSubscribe))
      .subscribe(
        (response) => {
          this.toastr.success(messages.loginSucces);
          this.dialogRef.close();
        },
        () => this.toastr.error(messages.loginError)
      );
  }
}
