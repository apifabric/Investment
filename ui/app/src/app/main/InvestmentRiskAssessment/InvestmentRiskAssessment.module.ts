import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVESTMENTRISKASSESSMENT_MODULE_DECLARATIONS, InvestmentRiskAssessmentRoutingModule} from  './InvestmentRiskAssessment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InvestmentRiskAssessmentRoutingModule
  ],
  declarations: INVESTMENTRISKASSESSMENT_MODULE_DECLARATIONS,
  exports: INVESTMENTRISKASSESSMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestmentRiskAssessmentModule { }