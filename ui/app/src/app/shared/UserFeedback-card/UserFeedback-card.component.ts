import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserFeedback-card.component.html',
  styleUrls: ['./UserFeedback-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserFeedback-card]': 'true'
  }
})

export class UserFeedbackCardComponent {


}