import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason-form',
  templateUrl: './reason-form.component.html',
  styleUrls: ['./reason-form.component.scss']
})
export class ReasonFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  next(){
    console.log('Todo Correcto')
  }

}
