import axios from 'axios';

export const AUTHENTICATED = 'AUTHENTICATED';

export const authenticate = (user) => ({
  type: AUTHENTICATED,
  user,
});

export const login = (username, password) => (dispatch) => (
  axios.post('/api/auth/login', {
    username,
    password,
  })
  .then(res => res.data)
  .then(user => dispatch(authenticate(user)))
);

export const logout = () => (dispatch) => (
  axios.delete('/api/auth/logout')
  .then(() => dispatch(authenticate(null)))
);

export const fetchLoggedInUser = () => (dispatch) => (
  axios.get('/api/auth/me')
  .then(res => res.data)
  .then(user => dispatch(authenticate(user)))
);
