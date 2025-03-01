# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
import datetime

Base = declarative_base()

class User(Base):
    """description: Table storing user information."""
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)

class Investment(Base):
    """description: Table representing different types of investments available."""
    __tablename__ = 'investments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    risk_level = Column(String, nullable=False)
    expected_return_percentage = Column(Float, nullable=False)

class Portfolio(Base):
    """description: Table that holds investor portfolios containing various investments."""
    __tablename__ = 'portfolios'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    name = Column(String, nullable=False)

class PortfolioInvestment(Base):
    """description: Junction table mapping portfolios to their investments."""
    __tablename__ = 'portfolio_investments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    portfolio_id = Column(Integer, ForeignKey('portfolios.id'), nullable=False)
    investment_id = Column(Integer, ForeignKey('investments.id'), nullable=False)
    investment_amount = Column(Float, nullable=False)
    purchase_date = Column(DateTime, default=datetime.datetime.now)

class Transaction(Base):
    """description: Table that records financial transactions of users."""
    __tablename__ = 'transactions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    transaction_date = Column(DateTime, default=datetime.datetime.now)
    amount = Column(Float, nullable=False)
    transaction_type = Column(String, nullable=False)  # e.g., deposit, withdrawal

class Admin(Base):
    """description: Table containing information for admin users to access the backend panel."""
    __tablename__ = 'admins'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)

class UserFeedback(Base):
    """description: Table that stores feedback from users regarding their experience."""
    __tablename__ = 'user_feedbacks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    feedback_text = Column(Text, nullable=False)
    submitted_on = Column(DateTime, default=datetime.datetime.now)

class MarketNews(Base):
    """description: Table for storing latest market news that could impact investments."""
    __tablename__ = 'market_news'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    published_date = Column(DateTime, default=datetime.datetime.now)

class InvestmentAnalysis(Base):
    """description: Table for storing detailed reports and analyses on investments."""
    __tablename__ = 'investment_analyses'
    id = Column(Integer, primary_key=True, autoincrement=True)
    investment_id = Column(Integer, ForeignKey('investments.id'), nullable=False)
    report_url = Column(String, nullable=False)
    analysis_date = Column(DateTime, default=datetime.datetime.now)

class InvestmentRiskAssessment(Base):
    """description: Table assessing the risk of each investment."""
    __tablename__ = 'investment_risk_assessments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    investment_id = Column(Integer, ForeignKey('investments.id'), nullable=False)
    assessment_date = Column(DateTime, default=datetime.datetime.now)
    risk_score = Column(Integer, nullable=False)  # 1 to 10 scale

class SubscriptionPlan(Base):
    """description: Table for managing subscription plans available to users."""
    __tablename__ = 'subscription_plans'
    id = Column(Integer, primary_key=True, autoincrement=True)
    plan_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    duration_days = Column(Integer, nullable=False)

class UserSubscription(Base):
    """description: Table linking users to their subscription plans."""
    __tablename__ = 'user_subscriptions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    subscription_plan_id = Column(Integer, ForeignKey('subscription_plans.id'), nullable=False)
    start_date = Column(DateTime, default=datetime.datetime.now)
    end_date = Column(DateTime, nullable=False)

# Database Setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Session Configuration
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Insertion
users = [
    User(username='investor1', email='investor1@example.com', password='p@ssword1'),
    User(username='investor2', email='investor2@example.com', password='p@ssword2'),
    User(username='investor3', email='investor3@example.com', password='p@ssword3'),
]

investments = [
    Investment(name='Stock A', description='Blue chip stock', risk_level='Medium', expected_return_percentage=6.5),
    Investment(name='Bond B', description='Government bond', risk_level='Low', expected_return_percentage=3.0),
    Investment(name='Real Estate C', description='Commercial property', risk_level='High', expected_return_percentage=8.0),
]

portfolios = [
    Portfolio(user_id=1, name='Balanced Portfolio'),
    Portfolio(user_id=2, name='Growth Portfolio'),
]

portfolio_investments = [
    PortfolioInvestment(portfolio_id=1, investment_id=1, investment_amount=5000.0),
    PortfolioInvestment(portfolio_id=1, investment_id=2, investment_amount=2000.0),
    PortfolioInvestment(portfolio_id=2, investment_id=3, investment_amount=7000.0),
]

transactions = [
    Transaction(user_id=1, amount=1000.0, transaction_type='deposit'),
    Transaction(user_id=2, amount=1500.0, transaction_type='deposit'),
    Transaction(user_id=1, amount=500.0, transaction_type='withdrawal'),
]

admins = [
    Admin(username='admin1', password='adminpass1'),
    Admin(username='admin2', password='adminpass2'),
]

user_feedbacks = [
    UserFeedback(user_id=1, feedback_text='Great investment platform!'),
    UserFeedback(user_id=2, feedback_text='Needs more features.'),
]

market_news = [
    MarketNews(title='Stock Market Hits All Time High', content='Today the stock market reached a new all-time high...'),
    MarketNews(title='Interest Rates to Rise', content='The central bank announced that they may begin to raise...'),
]

investment_analyses = [
    InvestmentAnalysis(investment_id=1, report_url='http://report1.com'),
    InvestmentAnalysis(investment_id=2, report_url='http://report2.com'),
]

investment_risk_assessments = [
    InvestmentRiskAssessment(investment_id=1, risk_score=5),
    InvestmentRiskAssessment(investment_id=3, risk_score=8),
]

subscription_plans = [
    SubscriptionPlan(plan_name='Basic', price=10.0, duration_days=30),
    SubscriptionPlan(plan_name='Pro', price=25.0, duration_days=30),
]

user_subscriptions = [
    UserSubscription(user_id=1, subscription_plan_id=1, end_date=datetime.datetime.now() + datetime.timedelta(days=30)),
    UserSubscription(user_id=2, subscription_plan_id=2, end_date=datetime.datetime.now() + datetime.timedelta(days=30)),
]

session.add_all(users + investments + portfolios + portfolio_investments + transactions + admins + user_feedbacks + market_news + investment_analyses + investment_risk_assessments + subscription_plans + user_subscriptions)
session.commit()
