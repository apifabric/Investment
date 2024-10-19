import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERSUBSCRIPTION_MODULE_DECLARATIONS, UserSubscriptionRoutingModule} from  './UserSubscription-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserSubscriptionRoutingModule
  ],
  declarations: USERSUBSCRIPTION_MODULE_DECLARATIONS,
  exports: USERSUBSCRIPTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserSubscriptionModule { }