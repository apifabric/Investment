import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserSubscription-card.component.html',
  styleUrls: ['./UserSubscription-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserSubscription-card]': 'true'
  }
})

export class UserSubscriptionCardComponent {


}