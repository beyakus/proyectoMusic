import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '@shared/menu/menu.component';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  registryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MenuComponent>
  ) {}

  private beforeCreateForm() {
    this.registryForm = this.fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.beforeCreateForm();
  }

  registry() {
    const { registryForm } = this;
    const body = Object.assign({}, registryForm.value);
    console.log('save api....');
    console.log(body);
    this.dialogRef.close();
  }
}
