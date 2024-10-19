import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERFEEDBACK_MODULE_DECLARATIONS, UserFeedbackRoutingModule} from  './UserFeedback-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserFeedbackRoutingModule
  ],
  declarations: USERFEEDBACK_MODULE_DECLARATIONS,
  exports: USERFEEDBACK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserFeedbackModule { }