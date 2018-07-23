import {
    FETCHED_ALL_SURVEYS_START,
    FETCHED_ALL_SURVEYS_STOP,
    FETCHED_ALL_SURVEYS,
    FETCHED_DETAILS_SURVEYS,
    FETCHED_SURVEYS_ERR,
    CHANGE_PAGE_SIZE,
    NEXT_PAGES_SURVEYS,
    PREVEUS_PAGES_SURVEYS,
    CHANGE_TITLE_SURVEY, CHANGE_DESCRIPTION_SURVEY, CHANGE_DATE_START_SURVEY
} from "../actions/surveysActions";

const initialState = {
    surveys : {
        list:[{
            surveys_type : ""
        }],
    },
    pageSize : 10,
    page : 1,
    totalPage : 1,
    details : {
        id : "",
        thumb : "",
        title : "",
        description : "",
        date_start : "",
        questions : [{
            asks : []
        }],
        surveys_type: {
            name : ""
        },
        create_at : ""
    },
    err : null,
    fetched : true
}

export const surveysReducer = (state =initialState,actions)=>{
    switch(actions.type){
        case FETCHED_ALL_SURVEYS_START:
            return {
                ...state,
                fetched: true
            }
        case FETCHED_ALL_SURVEYS_STOP:
            return {
                ...state,
                fetched : false
            }
        case FETCHED_ALL_SURVEYS:
            return {
                ...state,
                surveys: actions.payload,
                pageSize: actions.payload.page_size,
                page :  actions.payload.page,
                totalPage: actions.payload.total_page
            }
        case FETCHED_DETAILS_SURVEYS:
            return {
                ...state,
                details: actions.payload
            }
        case FETCHED_SURVEYS_ERR:
            return {
                ...state,
                err : actions.payload
            }
        case CHANGE_PAGE_SIZE:
            return{
                ...state,
                pageSize : actions.payload
            }
        case NEXT_PAGES_SURVEYS:
            return{
                ...state,
                page : state.page >= state.totalPage ? 1 : state.page+1
            }
        case PREVEUS_PAGES_SURVEYS:
            return{
                ...state,
                page : state.page <= 1 ? state.totalPage : state.page-1
            }
        case CHANGE_TITLE_SURVEY:
            return{
                ...state, details  : {...state.details, title: actions.payload}
            }
        case CHANGE_DATE_START_SURVEY:
            return{
                ...state,
                details  : {...state.details, date_start: actions.payload}
            }
        case CHANGE_DESCRIPTION_SURVEY:
            return{
                ...state,
                details  : {...state.details, description: actions.payload}
            }
        default:
            return state
    }
}