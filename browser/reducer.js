import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";

const rootReducer = combineReducers({
    user: AccountReducer,
});

export default rootReducer;
