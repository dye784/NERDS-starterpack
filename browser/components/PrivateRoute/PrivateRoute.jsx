import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector, shallowEqual } from 'react-redux';
import { getUser } from '../../reducers/AccountReducer';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => ({
        user: getUser(state)
    }), shallowEqual);

    return (
        <Route
            {...rest}
            render={(props) =>
                !!user ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/", state: { from: props.location } }}
                        />
                    )
            }
        />
    );
};
