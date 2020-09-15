import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/AccountActions';

export const Login = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        usename: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        dispatch(login(username.value, password.value));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="username" onChange={handleChange} />
                <input name="password" type="password" placeholder="password" onChange={handleChange} />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
