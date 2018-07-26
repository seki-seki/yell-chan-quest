import React from 'react';
import createReducer from "./lib/createReducer";
import key from './../action/actions'


export const userData = createReducer({}, {
    [key.SET_USER_DATA](state, action) {
        return action.payload
    }
})
