import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { request, Product } from '../../../core/models/products.model'

import { CallService } from "../../../core/services/calls/call.service";

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  @Input() typeProduct: string
  @Input() reason: string

  formRequest: FormGroup

  @Output() receiveRequest = new EventEmitter<FormGroup>()

  constructor(
    private formBuilder: FormBuilder,
    private callService: CallService
  ) { 
    this.buildForm()
  }
  requestsAccount: request[] = this.callService.getAllRequestAccount()

  lockUnlocks: request[] = this.callService.getAllRequestLockUnlock()


  private buildForm(){
    this.formRequest = this.formBuilder.group({
      request: ['', [Validators.required]],
    })
  }  


  ngOnInit(): void {
  }

  sendRequest(){
    this.receiveRequest.emit(this.formRequest)
  }

}
