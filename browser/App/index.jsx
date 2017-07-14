import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login';
import Logout from '../Logout';
import { getUser } from '../Login/LoginReducer';
import SignUpForm from '../SignUp';
import './style.scss';

export const App = (props) => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      {!props.user ? <Login /> : <Logout />}
      {!props.user && <SignUpForm />}
    </div>
  );
};

const mapStateToProps = (state) => ({ user: getUser(state) });

export default connect(mapStateToProps)(App);
