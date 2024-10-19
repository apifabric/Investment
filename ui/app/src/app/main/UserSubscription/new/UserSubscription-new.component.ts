import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserSubscription-new',
  templateUrl: './UserSubscription-new.component.html',
  styleUrls: ['./UserSubscription-new.component.scss']
})
export class UserSubscriptionNewComponent {
  @ViewChild("UserSubscriptionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}