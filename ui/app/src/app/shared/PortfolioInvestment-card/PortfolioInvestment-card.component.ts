import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PortfolioInvestment-card.component.html',
  styleUrls: ['./PortfolioInvestment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PortfolioInvestment-card]': 'true'
  }
})

export class PortfolioInvestmentCardComponent {


}