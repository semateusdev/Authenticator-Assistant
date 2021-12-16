import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reason-form',
  templateUrl: './reason-form.component.html',
  styleUrls: ['./reason-form.component.scss']
})
export class ReasonFormComponent implements OnInit {

  form: FormGroup
  constructor(
    private formBuilder: FormBuilder

  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }
  next(){
    console.log('Todo Correcto')
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

}
