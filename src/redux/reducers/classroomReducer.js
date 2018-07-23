import {FETCH_CLASSROOM_STOP, FETCH_CLASSROOM_START, FETCH_LIST_CLASSROOM} from "../actions/classroomActions";

const initialState = {
    classroom : [],
    fetched : true
}

export const classroomReducer = (state=initialState, actions)=>{
    switch (actions.type){
        case FETCH_LIST_CLASSROOM:
            return{
                ...state,
                classroom: actions.payload
            }
        case FETCH_CLASSROOM_STOP:
            return{
                ...state,
                fetched: false
            }
        case FETCH_CLASSROOM_START:
            return{
                ...state,
                fetched: true
            }
        default:
            return state
    }
}