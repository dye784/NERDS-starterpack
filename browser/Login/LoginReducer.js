import { AUTHENTICATED } from './LoginActionCreator';

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    default:
      return state;
  }
};

export default reducer;

export const getUser = (state) => state.auth;

export const getUserId = (state) => state.auth.id;

export const getUsername = (state) => state.auth.username;
