import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product, TypeProduct } from '../../../models/products.model'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  productControl = new FormControl('', Validators.required)
  accountControl = new FormControl('', Validators.required)

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
      name: 'Credito Hipotecario',
      typeProduct: 'Creditos'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
  saveOption(){
    console.log(this.typeProducts.values)
  }

}
