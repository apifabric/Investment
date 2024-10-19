import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionPlanHomeComponent } from './home/SubscriptionPlan-home.component';
import { SubscriptionPlanNewComponent } from './new/SubscriptionPlan-new.component';
import { SubscriptionPlanDetailComponent } from './detail/SubscriptionPlan-detail.component';

const routes: Routes = [
  {path: '', component: SubscriptionPlanHomeComponent},
  { path: 'new', component: SubscriptionPlanNewComponent },
  { path: ':id', component: SubscriptionPlanDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SubscriptionPlan-detail-permissions'
      }
    }
  },{
    path: ':subscription_plan_id/UserSubscription', loadChildren: () => import('../UserSubscription/UserSubscription.module').then(m => m.UserSubscriptionModule),
    data: {
        oPermission: {
            permissionId: 'UserSubscription-detail-permissions'
        }
    }
}
];

export const SUBSCRIPTIONPLAN_MODULE_DECLARATIONS = [
    SubscriptionPlanHomeComponent,
    SubscriptionPlanNewComponent,
    SubscriptionPlanDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionPlanRoutingModule { }