const initialState = {
    fetched: false,
    accessToken: null,
    err: null
}

export const accessToken = (state = initialState, actions) => {
    switch (actions.type) {
        case "LOGIN_ADMIN_ERR":
            return { ...state, err: actions.payload }
        case "RECEIVE_TOKEN":
            return {
                ...state,
                fetched: true,
                accessToken: actions.payload
            }
        case "DESTROY_TOKEN":
            return {
                ...state,
                fetched: false,
                accessToken: null,
                err: null
            }
        default:
            return state
    }
}

