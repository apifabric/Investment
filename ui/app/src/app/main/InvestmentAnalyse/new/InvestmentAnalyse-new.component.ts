import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'InvestmentAnalyse-new',
  templateUrl: './InvestmentAnalyse-new.component.html',
  styleUrls: ['./InvestmentAnalyse-new.component.scss']
})
export class InvestmentAnalyseNewComponent {
  @ViewChild("InvestmentAnalyseForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}