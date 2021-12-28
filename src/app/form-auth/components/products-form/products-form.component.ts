import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product, TypeProduct } from '../../../core/models/products.model'

import { CallService } from '../../../core/services/calls/call.service'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  formProduct: FormGroup
  @Input() reason: string

  @Output() receiveProduct = new EventEmitter<FormGroup>()

  constructor(
    private callService: CallService,
    private formBuilder: FormBuilder
  ) { 
      this.buildForm()
    }   

  typeProducts: TypeProduct[] = [
    {
      id: '1',
      name: 'Cuentas',
      enabledLock: true
    },
    {
      id: '2',
      name: 'Creditos'
    },
    {
      id: '3',
      name: 'Tarjetas',
      enabledLock: true
    },
    {
      id: '4',
      name: 'Inversión'
    },
    {
      id: '5',
      name: 'No cliente'
    },    
  ]
  accounts: Product[] = [
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
  cards: Product[] = this.callService.getAllCards()
  credits: Product[] = this.callService.getAllCredits()

  ngOnInit(): void {
  }
  saveOption(){
    console.log(this.typeProducts.values)
  }
  private buildForm(){
    this.formProduct = this.formBuilder.group({
      typeProduct: ['', [Validators.required]],
      product: ['', [Validators.required]]
    })
  }  

  sendProduct(){
    this.receiveProduct.emit(this.formProduct) 
  }

  
  
}
