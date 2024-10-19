import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentAnalyseHomeComponent } from './home/InvestmentAnalyse-home.component';
import { InvestmentAnalyseNewComponent } from './new/InvestmentAnalyse-new.component';
import { InvestmentAnalyseDetailComponent } from './detail/InvestmentAnalyse-detail.component';

const routes: Routes = [
  {path: '', component: InvestmentAnalyseHomeComponent},
  { path: 'new', component: InvestmentAnalyseNewComponent },
  { path: ':id', component: InvestmentAnalyseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InvestmentAnalyse-detail-permissions'
      }
    }
  }
];

export const INVESTMENTANALYSE_MODULE_DECLARATIONS = [
    InvestmentAnalyseHomeComponent,
    InvestmentAnalyseNewComponent,
    InvestmentAnalyseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentAnalyseRoutingModule { }