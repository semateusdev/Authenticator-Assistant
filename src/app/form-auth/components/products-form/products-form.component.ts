import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      name: 'Cuentas'
    },
    {
      id: '2',
      name: 'Creditos'
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
    },    
  ]
  accounts: Product[] = [
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
    },
  ]
  credits: Product[] = [
    {
      id: '2-1',
      name: 'Credito Libre inversión',
      typeProduct: 'Creditos'
    },
    {
      id: '2-2',
      name: 'Credito Hipotecario / Leasing habitacional',
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
    {
      id: '2-5',
      name: 'Credito Rotativo',
      typeProduct: 'Creditos'
    },
    {
      id: '2-6',
      name: 'Credito Compra de cartera',
      typeProduct: 'Creditos'
    },
    {
      id: '2-7',
      name: 'Credito Confinanciera',
      typeProduct: 'Creditos'
    }    
  ]
  cards: Product[] = [
    {
      id: '3-1',
      name: 'Tarjeta de credito generica',
      typeProduct: 'Tarjeta de credito'
    },
    {
      id: '3-2',
      name: 'Tarjeta de credito Marca compartida',
      typeProduct: 'Tarjeta de credito'
    },
    {
      id: '3-3',
      name: 'eCard',
      typeProduct: 'Tarjeta de credito'
    },
    {
      id: '3-4',
      name: 'Tarjeta Gift',
      typeProduct: 'Tarjeta de credito'
    },
  ]
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
