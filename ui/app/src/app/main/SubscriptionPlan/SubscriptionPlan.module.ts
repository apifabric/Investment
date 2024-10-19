import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SUBSCRIPTIONPLAN_MODULE_DECLARATIONS, SubscriptionPlanRoutingModule} from  './SubscriptionPlan-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SubscriptionPlanRoutingModule
  ],
  declarations: SUBSCRIPTIONPLAN_MODULE_DECLARATIONS,
  exports: SUBSCRIPTIONPLAN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubscriptionPlanModule { }