import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MarketNew-new',
  templateUrl: './MarketNew-new.component.html',
  styleUrls: ['./MarketNew-new.component.scss']
})
export class MarketNewNewComponent {
  @ViewChild("MarketNewForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}