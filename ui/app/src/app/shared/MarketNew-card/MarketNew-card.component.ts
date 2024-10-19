import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MarketNew-card.component.html',
  styleUrls: ['./MarketNew-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MarketNew-card]': 'true'
  }
})

export class MarketNewCardComponent {


}