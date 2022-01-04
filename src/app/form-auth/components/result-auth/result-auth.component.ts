import { Component, Input, OnInit, Inject, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formCall } from 'src/app/core/models/call.model';

@Component({
  selector: 'app-result-auth',
  templateUrl: './result-auth.component.html',
  styleUrls: ['./result-auth.component.scss']
})
export class ResultAuthComponent implements OnInit, OnChanges {

  @Input() AuthForm: formCall 
  @Input() AuthResult: string 
  isValidAuth: boolean
  @Output() ValidAuth = new EventEmitter<boolean>()
  
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
  }

  openDialog(){
    const dialogRef = this.dialog.open(ResultDialogOk, {
      width: '450px',
      data: this.isValidAuth
    })   
    dialogRef.afterClosed().subscribe(res =>{
      console.log('Dialog exitoso')
    })   
  }

  recivedLowAuthNI(OTPValid: string){    
    OTPValid === '1' ? this.isValidAuth = true : this.isValidAuth = false
  }
  recivedStrongAuthNI(OTPValid: string){    
    console.log('recibido');
        
    OTPValid === '1' ? this.isValidAuth = true : this.isValidAuth = false
  }

  getIsValidAuth(){
    this.ValidAuth.emit(this.isValidAuth)
  }

}
@Component({
  selector: 'result-dialog-ok',
  templateUrl: 'result-dialog.html',
  styleUrls: ['./result-auth.component.scss']
})
export class ResultDialogOk {

  constructor(
    public dialogRef: MatDialogRef<ResultDialogOk>,
    @Inject(MAT_DIALOG_DATA) public data: boolean){    
  }

  onClickClose(): void {
    this.dialogRef.close();
  }
}
