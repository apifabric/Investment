import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentHomeComponent } from './home/Investment-home.component';
import { InvestmentNewComponent } from './new/Investment-new.component';
import { InvestmentDetailComponent } from './detail/Investment-detail.component';

const routes: Routes = [
  {path: '', component: InvestmentHomeComponent},
  { path: 'new', component: InvestmentNewComponent },
  { path: ':id', component: InvestmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Investment-detail-permissions'
      }
    }
  },{
    path: ':investment_id/InvestmentAnalyse', loadChildren: () => import('../InvestmentAnalyse/InvestmentAnalyse.module').then(m => m.InvestmentAnalyseModule),
    data: {
        oPermission: {
            permissionId: 'InvestmentAnalyse-detail-permissions'
        }
    }
},{
    path: ':investment_id/InvestmentRiskAssessment', loadChildren: () => import('../InvestmentRiskAssessment/InvestmentRiskAssessment.module').then(m => m.InvestmentRiskAssessmentModule),
    data: {
        oPermission: {
            permissionId: 'InvestmentRiskAssessment-detail-permissions'
        }
    }
},{
    path: ':investment_id/PortfolioInvestment', loadChildren: () => import('../PortfolioInvestment/PortfolioInvestment.module').then(m => m.PortfolioInvestmentModule),
    data: {
        oPermission: {
            permissionId: 'PortfolioInvestment-detail-permissions'
        }
    }
}
];

export const INVESTMENT_MODULE_DECLARATIONS = [
    InvestmentHomeComponent,
    InvestmentNewComponent,
    InvestmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }