import { AUTHENTICATE, UNATHENTICATE } from "../actions/AccountActions";

const reducer = (state = null, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return action.user;
        case UNATHENTICATE:
            return null;
        default:
            return state;
    }
};

export default reducer;

export const getUser = (state) => state.user;

export const getUserId = (state) => state.user && state.user.id;

export const getUsername = (state) => state.user && state.user.username;
