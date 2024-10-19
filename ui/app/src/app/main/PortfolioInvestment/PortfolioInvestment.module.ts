import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PORTFOLIOINVESTMENT_MODULE_DECLARATIONS, PortfolioInvestmentRoutingModule} from  './PortfolioInvestment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PortfolioInvestmentRoutingModule
  ],
  declarations: PORTFOLIOINVESTMENT_MODULE_DECLARATIONS,
  exports: PORTFOLIOINVESTMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioInvestmentModule { }