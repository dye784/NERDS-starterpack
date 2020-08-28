import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login';
import Logout from '../Logout';
import { getUser } from '../Login/LoginReducer';
import SignUpForm from '../SignUp';
import './style.scss';
import { fetchLoggedInUser } from '../Login/LoginActionCreator';

export class App extends Component {
    componentDidMount() {
        this.props.fetchLoggedInUser();
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>HELLO WORLD</h1>
                {!user ? <Login /> : <Logout />}
                {!user && <SignUpForm />}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({ user: getUser(state) });
const mapDispatchToProps = (dispatch) => ({ fetchLoggedInUser: () => dispatch(fetchLoggedInUser()) })

export default connect(mapStateToProps, mapDispatchToProps)(App);
