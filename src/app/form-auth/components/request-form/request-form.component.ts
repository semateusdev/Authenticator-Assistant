import { Component, OnInit } from '@angular/core';
import { request } from '../../../models/products.model'
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
