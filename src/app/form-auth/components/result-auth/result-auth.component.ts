import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-result-auth',
  templateUrl: './result-auth.component.html',
  styleUrls: ['./result-auth.component.scss']
})
export class ResultAuthComponent implements OnInit {

  @Input() AuthReq: string 
  @Input() AuthResult: string 

  isValidAuth: boolean
  
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
  }

  openDialog(){
    if (this.isValidAuth) {
      this.dialog.open(ResultDialogOk)      
    }else{
      alert('Autenticacion no exitosa')
    }
  }

  recivedLowAuthNI(OTPValid: string){
    OTPValid === '1' ? this.isValidAuth = true : this.isValidAuth = false
    console.log(this.isValidAuth);    
  }

}
@Component({
  selector: 'result-dialog',
  templateUrl: 'result-dialog.html',
})
export class ResultDialogOk {}
