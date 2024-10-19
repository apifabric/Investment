import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Admin-card.component.html',
  styleUrls: ['./Admin-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Admin-card]': 'true'
  }
})

export class AdminCardComponent {


}