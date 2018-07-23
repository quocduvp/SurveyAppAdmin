import {FETCH_FACULTY_START, FETCH_FACULTY_STOP, FETCH_LIST_FACULTY} from "../actions/facultyActions";

const initialState = {
    faculty : [],
    fetched : true
}

export const facultyReducer = (state=initialState, actions)=>{
    switch (actions.type){
        case FETCH_LIST_FACULTY:
            return{
                ...state,
                faculty: actions.payload
            }
        case FETCH_FACULTY_STOP:
            return{
                ...state,
                fetched: false
            }
        case FETCH_FACULTY_START:
            return{
                ...state,
                fetched: true
            }
        default:
            return state
    }
}