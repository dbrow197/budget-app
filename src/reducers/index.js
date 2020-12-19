
import { combineReducers } from "redux";
import authReducer from './authReducers';
import errorReducer from './errorReducers';
//import authReducer from "./authReducer";
//import errorReducer from "./errorReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
