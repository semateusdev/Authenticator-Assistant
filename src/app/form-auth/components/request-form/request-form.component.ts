import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { request, Product } from '../../../core/models/products.model'

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

  requestsAccount: request[] = [
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Exoneracion GMF (4*100)'
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Enviar extracto y/o certificados'
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Cancelar cuenta'
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Cambio oficina radicacion'
    },
  ] 

  lockUnlocks: string[] = [
    'Bloquear',
    'Desbloqueo ATM / Redes',
    'Desbloqueo Oficina',
    'Desbloqueo Monitoreo',

  ]

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm()
  }

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
