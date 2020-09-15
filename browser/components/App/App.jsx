import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { fetchLoggedInUser } from "../../actions/AccountActions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "../Homepage/Homepage";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { getUser } from "../../reducers/AccountReducer";
import { LoginPage } from "../LoginPage/LoginPage";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import "./style.scss";

export const App = () => {
    const [isLoading, setLoading] = useState(true);
    const { user } = useSelector(
        (state) => ({
            user: getUser(state),
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUser() {
            await dispatch(fetchLoggedInUser());
            setLoading(false);
        }
        fetchUser();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                {!user && <Link to="/login">Login</Link>}
                {user && <Link to="/private">Private</Link>}
                {user && <LogoutButton />}
            </nav>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/private" component={<div>Stuff</div>} />
            </Switch>
        </Router>
    );
};

export default App;
