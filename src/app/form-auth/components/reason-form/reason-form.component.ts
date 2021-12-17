import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reason-form',
  templateUrl: './reason-form.component.html',
  styleUrls: ['./reason-form.component.scss']
})
export class ReasonFormComponent implements OnInit {

  form: FormGroup
  reason: string

  @Output() send = new EventEmitter<FormGroup>()
  constructor(
    private formBuilder: FormBuilder

  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }
  next(){
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(5)]],
      authIVR: [false, [Validators.required]],
      reason: ['', [Validators.required]]
    })
  }

  sendReason(){
    this.send.emit(this.form)
  }
  

}
