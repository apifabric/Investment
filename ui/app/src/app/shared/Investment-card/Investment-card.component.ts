import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Investment-card.component.html',
  styleUrls: ['./Investment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Investment-card]': 'true'
  }
})

export class InvestmentCardComponent {


}