import * as reducers from "./reducer";
import {combineReducers} from "redux";

export const rootReducers = combineReducers({
    ...reducers
});