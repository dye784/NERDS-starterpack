import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../actions/AccountActions";

export const SignUpForm = () => {
    const [isWarning, setWarning] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.password.value === event.target.confirm.value) {
            dispatch(
                createNewUser(
                    event.target.username.value,
                    event.target.password.value
                )
            );
            setWarning(false);
        } else {
            setWarning(true);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            {isWarning && <h5>The passwords do not match</h5>}
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="username" />
                <input name="password" type="password" placeholder="password" />
                <input
                    name="confirm"
                    type="password"
                    placeholder="confirm password"
                />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};
