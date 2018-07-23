import {FETCHED_FAQS_START, FETCHED_FAQS_STOP, FETCHED_LIST_FAQS} from "../actions/actionsFAQs";

const initialState = {
    faqs : [],
    fetched : true
}

export const faqsReducer = (state = initialState, actions)=>{
    switch (actions.type){
        case FETCHED_LIST_FAQS:
            return{
                ...state,
                faqs: actions.payload
            }
        case FETCHED_FAQS_START:
            return{
                ...state, fetched: true
            }
        case FETCHED_FAQS_STOP:
            return{
                ...state, fetched: false
            }
        default:
            return state
    }
}