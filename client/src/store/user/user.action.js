import { userActionTypes } from "./user.actionTypes"

export const update_user_action = (user) => {
    return {
        payload: user,
        type: userActionTypes.UPDATE_USER
    }
}

export const delete_user_action = () => {
    return {
        payload: {},
        type: userActionTypes.LOGOUT_USER
    }
}