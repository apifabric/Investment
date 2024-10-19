import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentRiskAssessmentHomeComponent } from './home/InvestmentRiskAssessment-home.component';
import { InvestmentRiskAssessmentNewComponent } from './new/InvestmentRiskAssessment-new.component';
import { InvestmentRiskAssessmentDetailComponent } from './detail/InvestmentRiskAssessment-detail.component';

const routes: Routes = [
  {path: '', component: InvestmentRiskAssessmentHomeComponent},
  { path: 'new', component: InvestmentRiskAssessmentNewComponent },
  { path: ':id', component: InvestmentRiskAssessmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InvestmentRiskAssessment-detail-permissions'
      }
    }
  }
];

export const INVESTMENTRISKASSESSMENT_MODULE_DECLARATIONS = [
    InvestmentRiskAssessmentHomeComponent,
    InvestmentRiskAssessmentNewComponent,
    InvestmentRiskAssessmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRiskAssessmentRoutingModule { }