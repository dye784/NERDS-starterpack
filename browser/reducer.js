import { combineReducers } from 'redux';
import LoginReducer from './reducers/AccountReducer';

const rootReducer = combineReducers({
    auth: LoginReducer,
});

export default rootReducer;
