import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioInvestmentHomeComponent } from './home/PortfolioInvestment-home.component';
import { PortfolioInvestmentNewComponent } from './new/PortfolioInvestment-new.component';
import { PortfolioInvestmentDetailComponent } from './detail/PortfolioInvestment-detail.component';

const routes: Routes = [
  {path: '', component: PortfolioInvestmentHomeComponent},
  { path: 'new', component: PortfolioInvestmentNewComponent },
  { path: ':id', component: PortfolioInvestmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PortfolioInvestment-detail-permissions'
      }
    }
  }
];

export const PORTFOLIOINVESTMENT_MODULE_DECLARATIONS = [
    PortfolioInvestmentHomeComponent,
    PortfolioInvestmentNewComponent,
    PortfolioInvestmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioInvestmentRoutingModule { }