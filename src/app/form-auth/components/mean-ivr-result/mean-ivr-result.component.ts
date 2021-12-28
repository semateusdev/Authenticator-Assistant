import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mean-ivr-result',
  templateUrl: './mean-ivr-result.component.html',
  styleUrls: ['./mean-ivr-result.component.scss']
})
export class MeanIvrResultComponent implements OnInit {

  @Input() resultAuth: string
  
  constructor() { }

  ngOnInit(): void {
  }

}
