import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { formCall } from '../../../core/models/call.model'

@Component({
  selector: 'app-stepper-forms',
  templateUrl: './stepper-forms.component.html',
  styleUrls: ['./stepper-forms.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StepperFormsComponent implements OnInit {

  formReason: FormGroup
  formProduct: FormGroup
  isEditable = false;

  form: formCall = {
    cedula: '',
    authIVR: '',
    reason: '',
    typeProduct: '',
    product: '',
    request: '',
    authReq: ''
  } 
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  receiveReason(formReason: FormGroup){
    this.form.cedula = formReason.get('cedula')?.value 
    this.form.authIVR = formReason.get('authIVR')?.value 
    this.form.reason = formReason.get('reason')?.value 
  }
  receivedProduct(formProduct: FormGroup){
    this.form.typeProduct = formProduct.get('typeProduct')?.value
    this.form.product = formProduct.get('product')?.value
    console.log(this.form);    
  }
  receivedRequest(formRequest: FormGroup){
    this.form.request = formRequest.get('request')?.value
    console.log(this.form.request);    
    if(this.form.request === 'Exoneracion GMF (4*100)' && this.form.authIVR == '1'){
      this.form.authReq = 'authOk'
      console.log('IVR OK')
    }else if(this.form.request === 'Exoneracion GMF (4*100)' && this.form.authIVR == '2'){
      this.form.authReq = 'meanIVR'
      console.log('NOIVR OK')
    }
  }

}
