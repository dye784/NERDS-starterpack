import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AccountActions";

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(logout());
    };

    return <button onClick={handleClick}>Logout</button>;
};
