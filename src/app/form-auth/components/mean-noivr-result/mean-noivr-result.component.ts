import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mean-noivr-result',
  templateUrl: './mean-noivr-result.component.html',
  styleUrls: ['./mean-noivr-result.component.scss']
})
export class MeanNoivrResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resultAuth: string

}
