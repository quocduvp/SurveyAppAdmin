import {
    CHANGE_PAGE_SIZE,
    FETCHED_ALL_USER_START,
    FETCHED_ALL_USER_STOP,
    FETCHED_DETAILS_USER, FETCHED_USER_ERR, NEXT_PAGES_USER, PREVEUS_PAGES_USER,FETCHED_ALL_USER
} from "../actions/accountsActions";

const initialState = {
    accounts : {
        list:[],
    },
    pageSize : 10,
    page : 1,
    totalPage : 1,
    details : {
        userinfo : {
            birthday : "",
            classroom : ""
        }
    },
    err : null,
    fetched : true
}

export const Accounts = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCHED_ALL_USER_START:
            return {
                ...state,
                fetched: true
            }
        case FETCHED_ALL_USER_STOP:
            return {
                ...state,
                fetched : false
            }
        case FETCHED_ALL_USER:
            return {
                ...state,
                accounts: actions.payload,
                pageSize: actions.payload.page_size,
                page :  actions.payload.page,
                totalPage: actions.payload.total_page
            }
        case FETCHED_DETAILS_USER:
            return {
                ...state,
                details: actions.payload
            }
        case FETCHED_USER_ERR:
            return {
                ...state,
                err : actions.payload
            }
        case CHANGE_PAGE_SIZE:
            return{
                ...state,
                pageSize : actions.payload
            }
        case NEXT_PAGES_USER:
            return{
                ...state,
                page : state.page >= state.totalPage ? 1 : state.page+1
            }
        case PREVEUS_PAGES_USER:
            return{
                ...state,
                page : state.page <= 1 ? state.totalPage : state.page-1
            }
        default:
            return state
    }
}