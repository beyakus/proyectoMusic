import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '@shared/menu/menu.component';
import { RegistryService } from './services/registry.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CONFIG } from '@env/config';
import { ToastrService } from 'ngx-toastr';
import { messages } from '@config/messagesToast';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit, OnDestroy {
  readonly UnSubscribe: Subject<void> = new Subject<void>();
  registryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MenuComponent>,
    private registryService: RegistryService,
    private toastr: ToastrService
  ) {}

  private beforeCreateForm() {
    this.registryForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.pattern(CONFIG.regexEmail)],
      ],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.beforeCreateForm();
  }

  ngOnDestroy() {
    this.UnSubscribe.next();
    this.UnSubscribe.complete();
  }

  registry() {
    const { registryForm, UnSubscribe } = this;
    const body = Object.assign({}, registryForm.value);
    this.registryService
      .registryUser(body)
      .pipe(takeUntil(UnSubscribe))
      .subscribe(
        (response) => {
          if (response) {
            this.toastr.success(messages.registrySuccess);
            this.dialogRef.close();
          }
        },
        () => this.toastr.error(messages.regisrtryError)
      );
  }
}
