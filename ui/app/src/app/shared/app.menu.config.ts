import { MenuRootItem } from 'ontimize-web-ngx';

import { AdminCardComponent } from './Admin-card/Admin-card.component';

import { InvestmentCardComponent } from './Investment-card/Investment-card.component';

import { InvestmentAnalyseCardComponent } from './InvestmentAnalyse-card/InvestmentAnalyse-card.component';

import { InvestmentRiskAssessmentCardComponent } from './InvestmentRiskAssessment-card/InvestmentRiskAssessment-card.component';

import { MarketNewCardComponent } from './MarketNew-card/MarketNew-card.component';

import { PortfolioCardComponent } from './Portfolio-card/Portfolio-card.component';

import { PortfolioInvestmentCardComponent } from './PortfolioInvestment-card/PortfolioInvestment-card.component';

import { SubscriptionPlanCardComponent } from './SubscriptionPlan-card/SubscriptionPlan-card.component';

import { TransactionCardComponent } from './Transaction-card/Transaction-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserFeedbackCardComponent } from './UserFeedback-card/UserFeedback-card.component';

import { UserSubscriptionCardComponent } from './UserSubscription-card/UserSubscription-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Admin', name: 'ADMIN', icon: 'view_list', route: '/main/Admin' }
    
        ,{ id: 'Investment', name: 'INVESTMENT', icon: 'view_list', route: '/main/Investment' }
    
        ,{ id: 'InvestmentAnalyse', name: 'INVESTMENTANALYSE', icon: 'view_list', route: '/main/InvestmentAnalyse' }
    
        ,{ id: 'InvestmentRiskAssessment', name: 'INVESTMENTRISKASSESSMENT', icon: 'view_list', route: '/main/InvestmentRiskAssessment' }
    
        ,{ id: 'MarketNew', name: 'MARKETNEW', icon: 'view_list', route: '/main/MarketNew' }
    
        ,{ id: 'Portfolio', name: 'PORTFOLIO', icon: 'view_list', route: '/main/Portfolio' }
    
        ,{ id: 'PortfolioInvestment', name: 'PORTFOLIOINVESTMENT', icon: 'view_list', route: '/main/PortfolioInvestment' }
    
        ,{ id: 'SubscriptionPlan', name: 'SUBSCRIPTIONPLAN', icon: 'view_list', route: '/main/SubscriptionPlan' }
    
        ,{ id: 'Transaction', name: 'TRANSACTION', icon: 'view_list', route: '/main/Transaction' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserFeedback', name: 'USERFEEDBACK', icon: 'view_list', route: '/main/UserFeedback' }
    
        ,{ id: 'UserSubscription', name: 'USERSUBSCRIPTION', icon: 'view_list', route: '/main/UserSubscription' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AdminCardComponent

    ,InvestmentCardComponent

    ,InvestmentAnalyseCardComponent

    ,InvestmentRiskAssessmentCardComponent

    ,MarketNewCardComponent

    ,PortfolioCardComponent

    ,PortfolioInvestmentCardComponent

    ,SubscriptionPlanCardComponent

    ,TransactionCardComponent

    ,UserCardComponent

    ,UserFeedbackCardComponent

    ,UserSubscriptionCardComponent

];