import axios from "axios";

export const AUTHENTICATE = "AUTHENTICATE";
export const UNATHENTICATE = "UNATHENTICATE";

export const authenticate = (user) => ({
    type: AUTHENTICATE,
    user,
});

export const unauthenticate = () => ({
    type: UNATHENTICATE,
});

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("/api/auth/login", {
                username,
                password,
            });
            dispatch(authenticate(data));
        } catch (err) {
            console.error(err);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            await axios.delete("/api/auth/logout");
            dispatch(unauthenticate());
        } catch (err) {
            console.error(err);
        }
    };
};

export const fetchLoggedInUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("/api/auth/me");
            if (data) {
                dispatch(authenticate(data));
            } else {
                dispatch(unauthenticate());
            }
        } catch (err) {
            console.error(err);
            dispatch(unauthenticate());
        }
    };
};

export const createNewUser = (username, password) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("/api/auth/signup", {
                username,
                password,
            });

            dispatch(authenticate(data));
        } catch (err) {
            console.error(err);
        }
    };
};
