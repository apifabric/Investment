import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketNewHomeComponent } from './home/MarketNew-home.component';
import { MarketNewNewComponent } from './new/MarketNew-new.component';
import { MarketNewDetailComponent } from './detail/MarketNew-detail.component';

const routes: Routes = [
  {path: '', component: MarketNewHomeComponent},
  { path: 'new', component: MarketNewNewComponent },
  { path: ':id', component: MarketNewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MarketNew-detail-permissions'
      }
    }
  }
];

export const MARKETNEW_MODULE_DECLARATIONS = [
    MarketNewHomeComponent,
    MarketNewNewComponent,
    MarketNewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketNewRoutingModule { }