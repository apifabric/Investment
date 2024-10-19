import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVESTMENTANALYSE_MODULE_DECLARATIONS, InvestmentAnalyseRoutingModule} from  './InvestmentAnalyse-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InvestmentAnalyseRoutingModule
  ],
  declarations: INVESTMENTANALYSE_MODULE_DECLARATIONS,
  exports: INVESTMENTANALYSE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestmentAnalyseModule { }