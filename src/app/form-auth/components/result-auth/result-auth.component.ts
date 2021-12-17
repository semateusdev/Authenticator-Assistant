import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-result-auth',
  templateUrl: './result-auth.component.html',
  styleUrls: ['./result-auth.component.scss']
})
export class ResultAuthComponent implements OnInit {

  @Input() AuthResult: string 
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(ResultDialog)
  }

}
@Component({
  selector: 'result-dialog.html',
  templateUrl: 'result-dialog.html',
})
export class ResultDialog {}
