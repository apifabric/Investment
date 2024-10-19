import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InvestmentAnalyse-card.component.html',
  styleUrls: ['./InvestmentAnalyse-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InvestmentAnalyse-card]': 'true'
  }
})

export class InvestmentAnalyseCardComponent {


}