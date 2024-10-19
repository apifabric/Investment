import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Admin', loadChildren: () => import('./Admin/Admin.module').then(m => m.AdminModule) },
    
        { path: 'Investment', loadChildren: () => import('./Investment/Investment.module').then(m => m.InvestmentModule) },
    
        { path: 'InvestmentAnalyse', loadChildren: () => import('./InvestmentAnalyse/InvestmentAnalyse.module').then(m => m.InvestmentAnalyseModule) },
    
        { path: 'InvestmentRiskAssessment', loadChildren: () => import('./InvestmentRiskAssessment/InvestmentRiskAssessment.module').then(m => m.InvestmentRiskAssessmentModule) },
    
        { path: 'MarketNew', loadChildren: () => import('./MarketNew/MarketNew.module').then(m => m.MarketNewModule) },
    
        { path: 'Portfolio', loadChildren: () => import('./Portfolio/Portfolio.module').then(m => m.PortfolioModule) },
    
        { path: 'PortfolioInvestment', loadChildren: () => import('./PortfolioInvestment/PortfolioInvestment.module').then(m => m.PortfolioInvestmentModule) },
    
        { path: 'SubscriptionPlan', loadChildren: () => import('./SubscriptionPlan/SubscriptionPlan.module').then(m => m.SubscriptionPlanModule) },
    
        { path: 'Transaction', loadChildren: () => import('./Transaction/Transaction.module').then(m => m.TransactionModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserFeedback', loadChildren: () => import('./UserFeedback/UserFeedback.module').then(m => m.UserFeedbackModule) },
    
        { path: 'UserSubscription', loadChildren: () => import('./UserSubscription/UserSubscription.module').then(m => m.UserSubscriptionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }