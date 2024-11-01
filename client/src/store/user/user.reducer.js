import { userActionTypes } from "./user.actionTypes"

const inital_state = {
    user_info: {}
}

export const UserReducer = (state = inital_state, action) => {
    const {payload, type} = action;
        
        switch (type) {
            case userActionTypes.UPDATE_USER:
            return {
                ...state,
                user_info: payload
            }
            case userActionTypes.LOGOUT_USER:
            return {
                ...state,
                user_info: payload
            }
        default:
            return state
    }
}