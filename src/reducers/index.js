import {combineReducers} from "redux";
import {reducer as fromReducer} from 'redux-form';
import authReducer from "./authReducer";
import streamReducer from "./streamsReducer"

export default combineReducers({
  auth: authReducer,
  form: fromReducer,
  streams: streamReducer,
})