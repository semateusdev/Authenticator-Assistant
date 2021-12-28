import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { formCall } from '../../../core/models/call.model'
import { request } from '../../../core/models/products.model'

import { CallService } from "../../../core/services/calls/call.service";
import { ELOOP } from 'constants';


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

  requerimientos: request[] 

  form: formCall = {
    cedula: '',
    authIVR: '',
    reason: '',
    typeProduct: '',
    product: '',
    request: '',
    authReq: '',
    resultAuth: ''
  } 
  
  constructor(
    private formBuilder: FormBuilder,
    private callService: CallService
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
    switch (this.form.reason) {
      case 'Requerimiento':
        this.requerimientos = this.callService.getAllRequestAccount()
        break;
      case 'Bloqueo o Desbloqueo':
        this.requerimientos = this.callService.getAllRequestLockUnlock()
        break;
      default:
        break;
    }
    if(this.form.authIVR == '1'){
      for (let i = 0; i < this.requerimientos.length; i++) {
        const element = this.requerimientos[i];        
        if (this.form.request == element.name) {
          this.form.authReq = element.authReq
          console.log(element.authReq);          
          if (element.authReq == 'mean-auth') {
            element.PM ? this.form.resultAuth = 'IVR-SP' : this.form.resultAuth = 'IVR-NP'
          }else{
            this.form.resultAuth = 'IVR'
          }
        }
      }
    }else if (this.form.authIVR == '2') {
      for (let i = 0; i < this.requerimientos.length; i++) {
        const element = this.requerimientos[i];
        if (this.form.request == element.name) {
          this.form.authReq = element.authReq
          console.log(element.authReq);          
          if (element.authReq == 'mean-auth') {
            this.form.authReq = 'mean-auth-NI'
            console.log(this.form.authReq);            
            element.PM ? this.form.resultAuth = 'IVR-SP' : this.form.resultAuth = 'IVR-NP'
          }else{
            this.form.resultAuth = 'NoIVR'
          }
        }
      }
    }
  }

}
