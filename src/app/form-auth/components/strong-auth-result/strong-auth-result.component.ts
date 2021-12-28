import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strong-auth-result',
  templateUrl: './strong-auth-result.component.html',
  styleUrls: ['./strong-auth-result.component.scss']
})
export class StrongAuthResultComponent implements OnInit {

  constructor() { }

  @Input() resultAuth: string
  
  ngOnInit(): void {
  }

}
