import { Injectable } from '@angular/core';
import { Product, request } from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  requestsAccount: request[] = [
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Exoneracion GMF (4*100)',
      authReq: 'low-auth',
      autResult: ''
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Enviar extracto y/o certificados',
      PM: true,
      authReq: 'mean-auth',
      autResult: ''
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Cancelar cuenta',
      authReq: 'low-auth',
      autResult: ''
    },
    {
      type: 'Solicitud',
      producto: 'Cuenta',
      name: 'Cambio oficina radicacion',
      authReq: 'low-auth',
      autResult: ''
    },
  ] 
  requestLockUnlock: request[] = [
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Bloqueo tarjeta Debito',
      authReq: 'noApply-auth',
      autResult: 'IVR'
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Bloqueo cuenta de ahorros',
      authReq: 'noApply-auth',
      autResult: 'IVR'
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Desbloqueo cuenta monitoreo',
      authReq: 'strong-auth',
      autResult: ''
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Desbloqueo cuenta ATM/Redes',
      authReq: 'strong-auth',
      autResult: ''
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Desbloqueo cuenta Oficina',
      authReq: 'strong-auth',
      autResult: ''
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Tarjeta',
      name: 'Bloqueo tarjeta credito',
      authReq: 'noApply-auth',
      autResult: ''
    },
    {
      type: 'Bloqueo o desbloqueo',
      producto: 'Cuenta',
      name: 'Desbloqueo TC Monitoreo',
      authReq: 'strong-auth',
      autResult: ''
    },
  ]

  accounts: [
    {
      id: '1-1',
      name: 'Cuenta de Ahorros',
      typeProduct: 'Cuentas',
      enabledLock: true
    },
    {
      id: '1-2',
      name: 'Cuenta Corriente',
      typeProduct: 'Cuentas',
      enabledLock: true
    },
    {
      id: '1-3',
      name: 'Cuenta Rentable',
      typeProduct: 'Cuentas',
      enabledLock: true
    },
    {
      id: '1-4',
      name: 'Cuenta AFC',
      typeProduct: 'Cuentas',
      enabledLock: false
    },
    {
      id: '1-5',
      name: 'Cuenta Infantil',
      typeProduct: 'Cuentas',
      enabledLock: true
    },
  ]
  credits:[
    {
      id: '2-1',
      name: 'Credito Libre inversión',
      typeProduct: 'Creditos',
      enabledLock: false
    },
    {
      id: '2-2',
      name: 'Credito Hipotecario / Leasing habitacional',
      typeProduct: 'Creditos',
      enabledLock: false
    },    
    {
      id: '2-3',
      name: 'Credito Vehiculo',
      typeProduct: 'Creditos',
      enabledLock: false
    },
    {
      id: '2-4',
      name: 'Credito Libranza',
      typeProduct: 'Creditos',
      enabledLock: false
    },
    {
      id: '2-5',
      name: 'Credito Rotativo',
      typeProduct: 'Creditos',
      enabledLock: false
    },
    {
      id: '2-6',
      name: 'Credito Compra de cartera',
      typeProduct: 'Creditos',
      enabledLock: false
    },
    {
      id: '2-7',
      name: 'Credito Confinanciera',
      typeProduct: 'Creditos',
      enabledLock: false
    }    
  ]
  cards:[
    {
      id: '3-1',
      name: 'Tarjeta de credito generica',
      typeProduct: 'Tarjeta de credito',
      enabledLock: true
    },
    {
      id: '3-2',
      name: 'Tarjeta de credito Marca compartida',
      typeProduct: 'Tarjeta de credito',
      enabledLock: true
    },
    {
      id: '3-3',
      name: 'eCard',
      typeProduct: 'Tarjeta de credito',
      enabledLock: true
    },
    {
      id: '3-4',
      name: 'Tarjeta Gift',
      typeProduct: 'Tarjeta de credito',
      enabledLock: false
    },
  ]
  

  getAllAccount(){
    return this.accounts
  }
  getAllCards(){
    return this.cards
  }
  getAllCredits(){
    return this.credits
  }
  getAllRequestAccount(){
    return this.requestsAccount
  }
  getAllRequestLockUnlock(){
    return this.requestLockUnlock
  }

  
  constructor() { }

  
}
