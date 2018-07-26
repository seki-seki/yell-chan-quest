import key from './actions'
import {modifyUserData} from "../../common/grobalFunction";

export function setUserData(userData) {
    modifyUserData(userData)
    return {
        type: key.SET_USER_DATA,
        payload: userData
    }
}