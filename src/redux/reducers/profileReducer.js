import {FETCH_ADMIN_PROFILE,CHECK_ADMIN,FETCH_ADMIN_PROFILE_ERR} from "../actions/profileActions";

const initialState = {
    profile : {
        userinfo : ""
    },
    isAdmin : false,
    err : null
}

export const profileAdmin = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_ADMIN_PROFILE:
            return{
                ...state, profile: actions.payload
            }
        case CHECK_ADMIN:
            return {
                ...state, isAdmin: true
            }
        case FETCH_ADMIN_PROFILE_ERR:
            return{
                ...state, err : actions.payload
            }
        default:
            return state
    }
}