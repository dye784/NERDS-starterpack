import axios from 'axios';

export const AUTHENTICATE = 'AUTHENTICATE';
export const UNATHENTICATE = 'UNATHENTICATE';

export const SIGNUP = 'SIGNUP';

export const authenticate = (user) => ({
    type: AUTHENTICATE,
    user,
});

export const unauthenticate = () => ({
    type: UNATHENTICATE
})

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
        .then(() => dispatch(unauthenticate()))
);

export const fetchLoggedInUser = () => (dispatch) => (
    axios.get('/api/auth/me')
        .then(res => res.data)
        .then(user => {
            if (user) {
                dispatch(authenticate(user));
            } else {
                dispatch(unauthenticate());
            }
        })
);

export const createNewUser = (username, password) => (dispatch) => (
    axios.post('/api/auth/signup', {
        username,
        password,
    })
        .then(res => res.data)
        .then(user => dispatch(authenticate(user)))
);
