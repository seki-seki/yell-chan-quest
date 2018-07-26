import {createStore} from "redux";
import {rootReducers} from "../reducer";

export function configureStore(initialState = {}) {
    const store = createStore(rootReducers, initialState)
    return store;
}

export const store = configureStore()