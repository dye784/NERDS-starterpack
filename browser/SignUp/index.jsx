import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../Login/LoginActionCreator';

export const SignUpForm = ({ createNewUser }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.password.value === evt.target.confirm.value) {
      createNewUser(evt.target.username.value, evt.target.password.value);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input name="confirm" type="password" placeholder="confirm password" />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

const mapDispatchToProps = { createNewUser };

export default connect(null, mapDispatchToProps)(SignUpForm);
