import {
    FETCH_FEEDBACK_CHECK,
    FETCH_FEEDBACK_START,
    FETCH_FEEDBACK_STOP,
    FETCH_FEEDBACK_UNCHECK
} from "../actions/feedbackActions";

const initialState = {
    feedback_checked : [],
    feedback_unchecked : [],
    fetched : true
}
export const feedbackReducer = (state = initialState, actions)=>{
    switch (actions.type){
        case FETCH_FEEDBACK_STOP:
            return {
                ...state, fetched: false
            }
        case FETCH_FEEDBACK_START:
            return {
                ...state, fetched: true
            }
        case FETCH_FEEDBACK_CHECK:
            return {
                ...state, feedback_checked: actions.payload
            }
        case FETCH_FEEDBACK_UNCHECK:
            return {
                ...state, feedback_unchecked: actions.payload
            }
        default:
            return state
    }
}