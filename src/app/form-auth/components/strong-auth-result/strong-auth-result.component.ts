import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-strong-auth-result',
  templateUrl: './strong-auth-result.component.html',
  styleUrls: ['./strong-auth-result.component.scss']
})
export class StrongAuthResultComponent implements OnInit, OnChanges {

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
   }

  @Input() resultAuth: string
  @Output() validOTP = new EventEmitter<string>()
  OTPControl: FormControl
  formAuthStrong: FormGroup 
  resultForm: string

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log('Cambio');
  }

  sendResult(){
    if ( this.formAuthStrong.valid) {
      if (
        this.formAuthStrong.get('OTP')?.value === '1' && 
        this.formAuthStrong.get('Question1')?.value === '1' && 
        this.formAuthStrong.get('Question2')?.value === '1' && 
        this.formAuthStrong.get('Question3')?.value === '1' && 
        this.formAuthStrong.get('NegativeNote')?.value === '2' ) {
          this.resultForm = '1'
          console.log('Autenticacion exitosa', this.resultForm);          
          this.validOTP.emit(this.resultForm)
      }else{
        this.resultForm = '2'
        this.validOTP.emit(this.resultForm)
      }
    }else{
      console.log(this.formAuthStrong.value);
      
      console.log('Faltan campos por completar', this.formAuthStrong.valid);
    }    
    // this.formAuthStrong.valid ? this.resultForm = '1' : this.resultForm = '2'
    // console.log('result form strong',this.resultForm);    
    // this.validOTP.emit(this.resultForm)
  }

  private buildForm(){
    this.formAuthStrong = this.formBuilder.group({
      OTP: ['', [Validators.required]],
      Question1: ['', [Validators.required]],
      Question2: ['', [Validators.required]],
      Question3: ['', [Validators.required]],
      NegativeNote: ['', [Validators.required]]
    })
  }

}
