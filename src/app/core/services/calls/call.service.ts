import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  callsType: object[] = [
    {
      reasons: [
        {
          id: '1',
          name: 'Consulta'
        },
        {
          id: '2',
          name: 'Requerimiento'
        },
        {
          id: '3',
          name: 'Bloqueo o Desbloqueo'
        }
      ],
      products: [{        
        typeProduct: [
          {          
            id: '1',
            name: 'Cuentas',
            listProducts: [
              {
                id: '1-1',
                name: 'Cuenta de Ahorros',
                typeProduct: 'Cuentas'
              },
              {
                id: '1-2',
                name: 'Cuenta Corriente',
                typeProduct: 'Cuentas'
              },
              {
                id: '1-3',
                name: 'Cuenta Rentable',
                typeProduct: 'Cuentas'
              },
              {
                id: '1-4',
                name: 'Cuenta AFC',
                typeProduct: 'Cuentas'
              },
              {
                id: '1-5',
                name: 'Cuenta Infantil',
                typeProduct: 'Cuentas'
              }
            ]
          },
          {
            id: '2',
            name: 'Creditos',
            listProducts: [
              {
                id: '2-1',
                name: 'Credito Libre inversión',
                typeProduct: 'Creditos'
              },
              {
                id: '2-2',
                name: 'Credito Hipotecario',
                typeProduct: 'Creditos'
              },
              {
                id: '2-3',
                name: 'Credito Vehiculo',
                typeProduct: 'Creditos'
              },
              {
                id: '2-4',
                name: 'Credito Libranza',
                typeProduct: 'Creditos'
              },
            ]
          },
          {
            id: '3',
            name: 'Tarjetas'
          },
          {
            id: '4',
            name: 'Inversión'
          },
          {
            id: '5',
            name: 'No cliente'
          }
        ]
      }],
      requirements: [
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
        }
      ]
    }
  ]

  constructor() { }

  get(){
    return this.callsType
  }
}
