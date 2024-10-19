import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserFeedback-new',
  templateUrl: './UserFeedback-new.component.html',
  styleUrls: ['./UserFeedback-new.component.scss']
})
export class UserFeedbackNewComponent {
  @ViewChild("UserFeedbackForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}