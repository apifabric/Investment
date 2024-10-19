import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Portfolio', loadChildren: () => import('../Portfolio/Portfolio.module').then(m => m.PortfolioModule),
    data: {
        oPermission: {
            permissionId: 'Portfolio-detail-permissions'
        }
    }
},{
    path: ':user_id/Transaction', loadChildren: () => import('../Transaction/Transaction.module').then(m => m.TransactionModule),
    data: {
        oPermission: {
            permissionId: 'Transaction-detail-permissions'
        }
    }
},{
    path: ':user_id/UserFeedback', loadChildren: () => import('../UserFeedback/UserFeedback.module').then(m => m.UserFeedbackModule),
    data: {
        oPermission: {
            permissionId: 'UserFeedback-detail-permissions'
        }
    }
},{
    path: ':user_id/UserSubscription', loadChildren: () => import('../UserSubscription/UserSubscription.module').then(m => m.UserSubscriptionModule),
    data: {
        oPermission: {
            permissionId: 'UserSubscription-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }