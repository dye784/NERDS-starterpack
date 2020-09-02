import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/AccountActions';

export const Login = ({ login }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(evt.target.username.value, evt.target.password.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
