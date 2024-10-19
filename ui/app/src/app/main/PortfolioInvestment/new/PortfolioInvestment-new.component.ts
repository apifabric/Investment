import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PortfolioInvestment-new',
  templateUrl: './PortfolioInvestment-new.component.html',
  styleUrls: ['./PortfolioInvestment-new.component.scss']
})
export class PortfolioInvestmentNewComponent {
  @ViewChild("PortfolioInvestmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}