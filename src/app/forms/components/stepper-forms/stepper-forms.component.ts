import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper-forms',
  templateUrl: './stepper-forms.component.html',
  styleUrls: ['./stepper-forms.component.scss'],
})
export class StepperFormsComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
