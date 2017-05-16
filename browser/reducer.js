import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
});

export default rootReducer;
