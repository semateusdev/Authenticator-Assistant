import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product, TypeProduct } from '../../../core/models/products.model'

import { CallService } from '../../../core/services/calls/call.service'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit, OnChanges {
  
  formProduct: FormGroup
  @Input() reason: string
  
  @Output() receiveProduct = new EventEmitter<FormGroup>()
  
  @Input() resetForm: boolean = false
  
  constructor(
    private callService: CallService,
    private formBuilder: FormBuilder
    ) { 
      this.buildForm()
    }   
    
    accounts: Product[] = this.callService.getAllAccount()
    cards: Product[] = this.callService.getAllCards()
    credits: Product[] = this.callService.getAllCredits()
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

  ngOnInit(): void {
    console.log(this.accounts.values);    
    // for (let i = 0; i < this.accounts.length; i++) {
    //   const element = this.accounts[i];
    //   console.log(element);
      
    // }
  }

  ngOnChanges(): void{
        
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
  
  resetform(){    
    this.formProduct.reset()
  }
}
