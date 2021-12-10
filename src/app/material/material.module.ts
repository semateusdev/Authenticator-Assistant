import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatStepperModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
