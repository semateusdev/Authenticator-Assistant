import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormAuthRoutingModule } from './form-auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { StepperFormsComponent } from './components/stepper-forms/stepper-forms.component'
import { ReasonFormComponent } from './components/reason-form/reason-form.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ResultAuthComponent } from './components/result-auth/result-auth.component';
import { StrongAuthResultComponent } from './components/strong-auth-result/strong-auth-result.component';
import { AuthOkResultComponent } from './components/auth-ok-result/auth-ok-result.component';
import { MeanIvrResultComponent } from './components/mean-ivr-result/mean-ivr-result.component';
import { LowAuthComponent } from './components/low-auth/low-auth.component';
import { MeanNoivrResultComponent } from './components/mean-noivr-result/mean-noivr-result.component';
import { NoApplyAuthComponent } from './components/no-apply-auth/no-apply-auth.component';

@NgModule({
  declarations: [
    StepperFormsComponent,
    ReasonFormComponent,
    ProductsFormComponent,
    RequestFormComponent,
    ResultAuthComponent,
    StrongAuthResultComponent,
    AuthOkResultComponent,
    MeanIvrResultComponent,
    LowAuthComponent,
    MeanNoivrResultComponent,
    NoApplyAuthComponent
  ],
  imports: [
    CommonModule,
    FormAuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormAuthModule { }
