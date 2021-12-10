import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

import { FormsRoutingModule } from './forms-routing.module';

import { StepperFormsComponent } from './components/stepper-forms/stepper-forms.component'
import { MaterialModule } from '../material/material.module';
import { ReasonFormComponent } from './components/reason-form/reason-form.component';

@NgModule({
  declarations: [
    StepperFormsComponent,
    ReasonFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
