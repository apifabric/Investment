# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 19, 2024 21:26:03
# Database: sqlite:////tmp/tmp.5lXmx84ns6/Investment/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Admin(SAFRSBaseX, Base):
    """
    description: Table containing information for admin users to access the backend panel.
    """
    __tablename__ = 'admins'
    _s_collection_name = 'Admin'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Investment(SAFRSBaseX, Base):
    """
    description: Table representing different types of investments available.
    """
    __tablename__ = 'investments'
    _s_collection_name = 'Investment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    risk_level = Column(String, nullable=False)
    expected_return_percentage = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    InvestmentAnalyseList : Mapped[List["InvestmentAnalyse"]] = relationship(back_populates="investment")
    InvestmentRiskAssessmentList : Mapped[List["InvestmentRiskAssessment"]] = relationship(back_populates="investment")
    PortfolioInvestmentList : Mapped[List["PortfolioInvestment"]] = relationship(back_populates="investment")



class MarketNew(SAFRSBaseX, Base):
    """
    description: Table for storing latest market news that could impact investments.
    """
    __tablename__ = 'market_news'
    _s_collection_name = 'MarketNew'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    published_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class SubscriptionPlan(SAFRSBaseX, Base):
    """
    description: Table for managing subscription plans available to users.
    """
    __tablename__ = 'subscription_plans'
    _s_collection_name = 'SubscriptionPlan'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    plan_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    duration_days = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    UserSubscriptionList : Mapped[List["UserSubscription"]] = relationship(back_populates="subscription_plan")



class User(SAFRSBaseX, Base):
    """
    description: Table storing user information.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PortfolioList : Mapped[List["Portfolio"]] = relationship(back_populates="user")
    TransactionList : Mapped[List["Transaction"]] = relationship(back_populates="user")
    UserFeedbackList : Mapped[List["UserFeedback"]] = relationship(back_populates="user")
    UserSubscriptionList : Mapped[List["UserSubscription"]] = relationship(back_populates="user")



class InvestmentAnalyse(SAFRSBaseX, Base):
    """
    description: Table for storing detailed reports and analyses on investments.
    """
    __tablename__ = 'investment_analyses'
    _s_collection_name = 'InvestmentAnalyse'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investment_id = Column(ForeignKey('investments.id'), nullable=False)
    report_url = Column(String, nullable=False)
    analysis_date = Column(DateTime)

    # parent relationships (access parent)
    investment : Mapped["Investment"] = relationship(back_populates=("InvestmentAnalyseList"))

    # child relationships (access children)



class InvestmentRiskAssessment(SAFRSBaseX, Base):
    """
    description: Table assessing the risk of each investment.
    """
    __tablename__ = 'investment_risk_assessments'
    _s_collection_name = 'InvestmentRiskAssessment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investment_id = Column(ForeignKey('investments.id'), nullable=False)
    assessment_date = Column(DateTime)
    risk_score = Column(Integer, nullable=False)

    # parent relationships (access parent)
    investment : Mapped["Investment"] = relationship(back_populates=("InvestmentRiskAssessmentList"))

    # child relationships (access children)



class Portfolio(SAFRSBaseX, Base):
    """
    description: Table that holds investor portfolios containing various investments.
    """
    __tablename__ = 'portfolios'
    _s_collection_name = 'Portfolio'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    name = Column(String, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("PortfolioList"))

    # child relationships (access children)
    PortfolioInvestmentList : Mapped[List["PortfolioInvestment"]] = relationship(back_populates="portfolio")



class Transaction(SAFRSBaseX, Base):
    """
    description: Table that records financial transactions of users.
    """
    __tablename__ = 'transactions'
    _s_collection_name = 'Transaction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    transaction_date = Column(DateTime)
    amount = Column(Float, nullable=False)
    transaction_type = Column(String, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("TransactionList"))

    # child relationships (access children)



class UserFeedback(SAFRSBaseX, Base):
    """
    description: Table that stores feedback from users regarding their experience.
    """
    __tablename__ = 'user_feedbacks'
    _s_collection_name = 'UserFeedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    feedback_text = Column(Text, nullable=False)
    submitted_on = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserFeedbackList"))

    # child relationships (access children)



class UserSubscription(SAFRSBaseX, Base):
    """
    description: Table linking users to their subscription plans.
    """
    __tablename__ = 'user_subscriptions'
    _s_collection_name = 'UserSubscription'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    subscription_plan_id = Column(ForeignKey('subscription_plans.id'), nullable=False)
    start_date = Column(DateTime)
    end_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    subscription_plan : Mapped["SubscriptionPlan"] = relationship(back_populates=("UserSubscriptionList"))
    user : Mapped["User"] = relationship(back_populates=("UserSubscriptionList"))

    # child relationships (access children)



class PortfolioInvestment(SAFRSBaseX, Base):
    """
    description: Junction table mapping portfolios to their investments.
    """
    __tablename__ = 'portfolio_investments'
    _s_collection_name = 'PortfolioInvestment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
    investment_id = Column(ForeignKey('investments.id'), nullable=False)
    investment_amount = Column(Float, nullable=False)
    purchase_date = Column(DateTime)

    # parent relationships (access parent)
    investment : Mapped["Investment"] = relationship(back_populates=("PortfolioInvestmentList"))
    portfolio : Mapped["Portfolio"] = relationship(back_populates=("PortfolioInvestmentList"))

    # child relationships (access children)
