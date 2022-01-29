import { combineReducers } from "redux";
import authReducer from "./auth";
import detailsReducer from './details'
const rootReducers = combineReducers({ authReducer, detailsReducer})
export default rootReducers