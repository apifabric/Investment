import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SubscriptionPlan-card.component.html',
  styleUrls: ['./SubscriptionPlan-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SubscriptionPlan-card]': 'true'
  }
})

export class SubscriptionPlanCardComponent {


}