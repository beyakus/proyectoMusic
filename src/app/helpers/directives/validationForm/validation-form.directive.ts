import {
  Directive,
  OnInit,
  OnDestroy,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { messagesErrorForm } from './configMessages/messagesError';

/***
 * Directive for validate form
 * Import module ValidationFormModule to its component
 *
 * Example use
 * <input type="text" formControName="myField" appValidationForm>
 *
 * If required add more validation. Add do your messages in the file messagesError.ts
 */
@Directive({
  selector: '[appValidationForm]',
})
export class ValidationFormDirective implements OnInit, OnDestroy {
  readonly UnSubscribe: Subject<void> = new Subject<void>();
  @Input('formControlName'.toString()) formControlName: string;
  errorSpandId = '';

  constructor(private control: NgControl, private ref: ElementRef) {}

  ngOnInit() {
    this.errorSpandId = String(this.formControlName + '-error').trim();
    this.control.statusChanges
      .pipe(takeUntil(this.UnSubscribe))
      .subscribe((status) => {
        if (status === 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      });
  }

  ngOnDestroy() {
    this.UnSubscribe.next();
    this.UnSubscribe.complete();
  }

  @HostListener('blur', ['$event'])
  handleBlurEvent(event) {
    if (this.control.errors) {
      this.showError();
    } else {
      this.removeError();
    }
  }

  private showError() {
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors;
    const firstKey = Object.keys(valErrors)[0];
    const messagesError = messagesErrorForm[firstKey];
    const errorSpan = `<span class="showError" id='${this.errorSpandId}'>${messagesError}</span>`;
    this.ref.nativeElement.parentElement.insertAdjacentHTML(
      'beforeend',
      errorSpan
    );
    this.ref.nativeElement.classList.add('showError');
  }

  private removeError() {
    const errorElement = document.getElementById(this.errorSpandId);
    if (errorElement) {
      this.ref.nativeElement.classList.remove('showError');
      errorElement.remove();
    }
  }
}
