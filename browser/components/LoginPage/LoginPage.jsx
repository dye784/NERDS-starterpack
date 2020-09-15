import React from "react";
import { getUser } from "../../reducers/AccountReducer";
import { Login } from "../Login/Login";
import { SignUpForm } from "../SignUp/SignUp";
import { useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router";

export const LoginPage = () => {
    const { user } = useSelector(
        (state) => ({
            user: getUser(state),
        }),
        shallowEqual
    );

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Login />
            or
            <SignUpForm />
        </>
    );
};
