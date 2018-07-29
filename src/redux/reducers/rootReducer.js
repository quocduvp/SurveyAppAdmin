import {
    combineReducers
} from 'redux'
import {
    accessToken
} from './accessToken';
import {
    Accounts
} from "./accountsReducer";
import {
    profileAdmin
} from "./profileReducer";
import {
    surveysReducer
} from './surveysReducer'
import {facultyReducer} from "./facultyReducer";
import {classroomReducer} from "./classroomReducer";
import {feedbackReducer} from  './feedbackReducer'
import {faqsReducer} from "./faqsReducer";
import { statistics } from './statisticsReducer';
import { reportReducer } from './listReportReducer';
export const rootReducer = combineReducers({
    accessToken: accessToken,
    profile: profileAdmin,
    accounts: Accounts,
    surveys: surveysReducer,
    faculty: facultyReducer,
    classroom : classroomReducer,
    feedback : feedbackReducer,
    faqs : faqsReducer,
    statistics : statistics,
    reports : reportReducer
})