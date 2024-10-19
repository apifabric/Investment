import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'InvestmentRiskAssessment-new',
  templateUrl: './InvestmentRiskAssessment-new.component.html',
  styleUrls: ['./InvestmentRiskAssessment-new.component.scss']
})
export class InvestmentRiskAssessmentNewComponent {
  @ViewChild("InvestmentRiskAssessmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}