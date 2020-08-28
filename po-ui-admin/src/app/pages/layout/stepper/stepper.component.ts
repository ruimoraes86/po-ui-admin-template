import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModalComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { tap, delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  
  input1: string;
  input2: string;
  input3: string;

  nextLabelWidget: string = 'Next';
  previousLabelWidget: string = 'Prev';
  confirmLabelWidget: string = 'Confirm';

  isLoading: boolean = false;

  @ViewChild('firstForm', { static: true }) firstForm: NgForm;
  @ViewChild('secondForm', { static: true }) secondForm: NgForm;
  @ViewChild('thirdForm', { static: true }) thirdForm: NgForm;
  
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  constructor() { }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  private resetForms(): void {
    this.firstForm.reset();
    this.secondForm.reset();
    this.thirdForm.reset();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoading = true)),
      delay(2000),
      finalize(() => (this.isLoading = false))
    );
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    stepper.first();
  }
}
