import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeedbackHomeComponent } from './home/UserFeedback-home.component';
import { UserFeedbackNewComponent } from './new/UserFeedback-new.component';
import { UserFeedbackDetailComponent } from './detail/UserFeedback-detail.component';

const routes: Routes = [
  {path: '', component: UserFeedbackHomeComponent},
  { path: 'new', component: UserFeedbackNewComponent },
  { path: ':id', component: UserFeedbackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserFeedback-detail-permissions'
      }
    }
  }
];

export const USERFEEDBACK_MODULE_DECLARATIONS = [
    UserFeedbackHomeComponent,
    UserFeedbackNewComponent,
    UserFeedbackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFeedbackRoutingModule { }