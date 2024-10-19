import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSubscriptionHomeComponent } from './home/UserSubscription-home.component';
import { UserSubscriptionNewComponent } from './new/UserSubscription-new.component';
import { UserSubscriptionDetailComponent } from './detail/UserSubscription-detail.component';

const routes: Routes = [
  {path: '', component: UserSubscriptionHomeComponent},
  { path: 'new', component: UserSubscriptionNewComponent },
  { path: ':id', component: UserSubscriptionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserSubscription-detail-permissions'
      }
    }
  }
];

export const USERSUBSCRIPTION_MODULE_DECLARATIONS = [
    UserSubscriptionHomeComponent,
    UserSubscriptionNewComponent,
    UserSubscriptionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSubscriptionRoutingModule { }