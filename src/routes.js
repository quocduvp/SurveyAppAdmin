import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
    return <div>Loading...</div>;
}

const Dashboard = Loadable({
    loader: () => import('./views/Dashboard'),
    loading: Loading,
});

//account management
const Accounts = Loadable({
    loader: () => import('./views/Accounts/Accounts'),
    loading: Loading
});
const AccountDetails = Loadable({
    loader: () => import('./views/DetailsAccount/Details'),
    loading: Loading
});

//account deny
const AccountsDeny = Loadable({
    loader: () => import('./views/AccountsDeny/Accounts'),
    loading: Loading
});

//account staff
const AccountsStaff = Loadable({
    loader: () => import('./views/AccountsStaff/Accounts'),
    loading: Loading
});
;

//account staff
const AccountsStudent = Loadable({
    loader: () => import('./views/AccountsStudent/Accounts'),
    loading: Loading
});

//list account reported
const AccountsReport = Loadable({
    loader: () => import('./views/AccountsReport/Accounts'),
    loading: Loading
});

//survey
const SurveysPublish = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysPublish/SurveysPublish'),
    loading : Loading
})
const SurveysTypeText = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysTypeText/SurveysTypeText'),
    loading : Loading
})
const SurveysTypeChoice = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysTypeChoice/SurveysTypeChoice'),
    loading : Loading
})
const SurveysTypeUnpublish = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysTypeUnpublish/SurveysTypeUnpublish'),
    loading : Loading
})
const SurveysTypeDeleted = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysTypeDeleted/SurveysTypeDeleted'),
    loading : Loading
})
//details survey
const SurveysDetails = Loadable({
    loader: () => import('./views/SurveyManagement/SurveysDetails/SurveysDetails'),
    loading : Loading
})

//education
const Education = Loadable({
    loader: () => import('./views/Education/Education'),
    loading : Loading
})
//Feedback
const Feebacks = Loadable({
    loader: () => import('./views/Feedbacks/Feebacks'),
    loading : Loading
})
//FAQs
const FAQs = Loadable({
    loader: () => import('./views/FAQs/FAQs'),
    loading : Loading
})
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    {path: '/', exact: true, name: 'Home', component: DefaultLayout},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/accounts',exact: true, name: 'Accounts', component: Accounts},
    {path: '/accounts/:id',exact: true, name: 'Account Info', component: AccountDetails},
    {path: '/accounts_deny',exact: true, name: 'Accounts Deny', component: AccountsDeny},
    {path: '/accounts_staff',exact: true, name: 'Accounts Deny', component: AccountsStaff},
    {path: '/accounts_student',exact: true, name: 'Accounts Deny', component: AccountsStudent},
    {path: '/accounts_help',exact: true, name: 'Accounts help', component: AccountsReport},
    {path: '/surveys',exact: true, name: 'The surveys list', component: SurveysPublish},
    {path: '/surveys_text',exact: true, name: 'The surveys type text', component: SurveysTypeText},
    {path: '/surveys_choice',exact: true, name: 'The surveys type choice', component: SurveysTypeChoice},
    {path: '/surveys_unpublish',exact: true, name: 'The surveys unpublish', component: SurveysTypeUnpublish},
    {path: '/surveys_deleted',exact: true, name: 'The surveys deteted', component: SurveysTypeDeleted},
    {path: '/surveys/:id',exact: true, name: 'The surveys details', component: SurveysDetails},
    {path: '/education',exact: true, name: 'Faculties & Class', component: Education},
    {path: '/feedbacks',exact: true, name: 'Feedbacks', component: Feebacks},
    {path: '/FAQs',exact: true, name: 'FAQs', component: FAQs}
];

export default routes;
