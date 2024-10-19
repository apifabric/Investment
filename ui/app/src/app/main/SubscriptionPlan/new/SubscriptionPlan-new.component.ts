import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SubscriptionPlan-new',
  templateUrl: './SubscriptionPlan-new.component.html',
  styleUrls: ['./SubscriptionPlan-new.component.scss']
})
export class SubscriptionPlanNewComponent {
  @ViewChild("SubscriptionPlanForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}