import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/AccountActions';

export const Logout = ({ user, logout }) => (
  <div>
    <h3>{user && user.username}</h3>
    <button onClick={logout}>Logout</button>
    <hr />
  </div>
);

const mapStateToProps = (state) => ({ user: state.auth });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
