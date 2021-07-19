import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {ContextStore} from '../store'

import LoginComponent from '../components/LoginComponent';

import ResetPasswordComponent from '../components/ResetPasswordComponent';
import SendPasswordComponent from '../components/SendPasswordComponent';
import ResetPasswordSuccessComponent from '../components/ResetPasswordSuccessComponent';
import IndexComponent from '../components/IndexComponet'
import LogoutComponent from '../components/users/LogoutComponent';
import SinginComponent from '../components/users/SinginComponent';
import ContactComponent from '../components/ContactComponet'
import JobsComponent from '../components/JobsComponent'
import HowItWorksComponent from '../components/HowItWorksComponent'
import SuggestFunctionsComponent from '../components/SuggestFunctionsComponent'
import FunctionsComponent from '../components/FunctionsComponent'
import AboutComponent from '../components/AboutComponent'
import TermsOfServiceComponent from '../components/TermsOfServiceComponent'
import PrivacyComponent from '../components/PrivacyComponent'
import CreateAccountComponent from '../components/CreateAccountComponent'
import ConfirmEmailComponent from '../components/ConfirmEmailComponent'

import FeedsComponent from '../components/users/FeedsComponent';
import MyJobsComponent from '../components/users/MyJobsComponent'
import MyProposalsComponent from '../components/users/MyProposalsComponent'
import MyShortListComponent from '../components/users/MyShortListComponent'
import MyPaymentsComponent from '../components/users/MyPaymentsComponent'
import NotificationsComponent from '../components/users/NotificationsComponent'
import DashboardComponent from '../components/users/DashboardComponent'
import AccountSettingsComponent from '../components/users/AccountSettingsComponent'
import DesactiveAccountComponent from '../components/users/DesactiveAccountComponent'
import ProfileComponent from '../components/users/ProfileComponent'
import EditProfileComponent from '../components/users/EditProfileComponent'

import UsersAuthRoute from './UserAuth'
import UsersIsAuthRoute from './IsAuth'

    export default () =>  
            <BrowserRouter>
                <Switch>                    
                    <Route exact path="/singLinkedIn" component={SinginComponent} />
                    <Route exact path="/recover-password" component={SendPasswordComponent}  />
                    <Route exact path="/recover-password/:token" component={ResetPasswordComponent}  />
                    <Route exact path="/recover-password-success" component={ResetPasswordSuccessComponent}  />
                    <Route exact path="/" render={props=><ContextStore comp={<IndexComponent />} />}/>
                    <Route exact path="/contact" render={props=><ContextStore comp={<ContactComponent />} />}/>
                    <Route exact path="/jobs" render={props=><ContextStore comp={<JobsComponent />} />}/>
                    <Route exact path="/how-it-works" render={props=><ContextStore comp={<HowItWorksComponent />} />}/>
                    <Route exact path="/suggest-function" render={props=><ContextStore comp={<SuggestFunctionsComponent />} />}/>
                    <Route exact path="/functions" render={props=><ContextStore comp={<FunctionsComponent />} />}/>
                    <Route exact path="/about" render={props=><ContextStore comp={<AboutComponent />} />}/>
                    <Route exact path="/terms-of-service" render={props=><ContextStore comp={<TermsOfServiceComponent />} />}/>
                    <Route exact path="/privacy" render={props=><ContextStore comp={<PrivacyComponent />} />}/>
                    <Route exact path="/confirm-email" render={props=><ContextStore comp={<ConfirmEmailComponent />} />}/>
                    <Route exact path="/confirm-email/:token" render={props=><ContextStore comp={<ConfirmEmailComponent />} />}/>

                    <UsersIsAuthRoute restricted={true} exact path="/login" component={LoginComponent} />
                    <UsersIsAuthRoute restricted={true} exact path="/create-account" component={CreateAccountComponent} />

                    <UsersAuthRoute exact path="/logout" render={props=><ContextStore comp={<LogoutComponent />} />} />
                    <UsersAuthRoute exact path="/my-feeds-coming-soon" render={props=><ContextStore comp={<FeedsComponent />} />} />
                    <UsersAuthRoute exact path="/my-jobs-coming-soon" render={props=><ContextStore comp={<MyJobsComponent />} />} />
                    <UsersAuthRoute exact path="/my-proposals-coming-soon" render={props=><ContextStore comp={<MyProposalsComponent />} />} />
                    <UsersAuthRoute exact path="/my-shortlist-coming-soon" render={props=><ContextStore comp={<MyShortListComponent />} />} />
                    <UsersAuthRoute exact path="/payments-history-coming-soon" render={props=><ContextStore comp={<MyPaymentsComponent />} />} />
                    <UsersAuthRoute exact path="/notifications-coming-soon" render={props=><ContextStore comp={<NotificationsComponent />} />} />
                    <UsersAuthRoute exact path="/dashboard" render={props=><ContextStore comp={<DashboardComponent />} />} />
                    <UsersAuthRoute exact path="/account-settings" render={props=><ContextStore comp={<AccountSettingsComponent />} />} />
                    <UsersAuthRoute exact path="/account-deactivate-account" render={props=><ContextStore comp={<DesactiveAccountComponent />} />} />
                    <UsersAuthRoute exact path="/profile-view" render={props=><ContextStore comp={<ProfileComponent />} />} />
                    <UsersAuthRoute exact path="/profile-edit" render={props=><ContextStore comp={<EditProfileComponent />} />} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>