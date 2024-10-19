import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVESTMENT_MODULE_DECLARATIONS, InvestmentRoutingModule} from  './Investment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InvestmentRoutingModule
  ],
  declarations: INVESTMENT_MODULE_DECLARATIONS,
  exports: INVESTMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestmentModule { }