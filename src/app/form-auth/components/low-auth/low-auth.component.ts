import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-low-auth',
  templateUrl: './low-auth.component.html',
  styleUrls: ['./low-auth.component.scss']
})
export class LowAuthComponent implements OnInit {

  @Input() resultAuth: string
  @Output() validOTP = new EventEmitter<string>()
  OTPControl: FormControl

  constructor() {
    this.OTPControl = new FormControl()
   }

  ngOnInit(): void {
  }

  sendResult(){
    this.validOTP.emit(this.OTPControl.value)    
  }

}
