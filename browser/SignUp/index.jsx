import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../Login/LoginActionCreator';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false,
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.password.value === evt.target.confirm.value) {
      this.props.createNewUser(evt.target.username.value, evt.target.password.value);
      this.setState({ warning: false });
    } else {
      this.setState({ warning: true });
    }
  };

  render () {
    return (
      <div>
        <h1>Sign Up</h1>
        {this.state.warning && <h5>The passwords do not match</h5>}
        <form onSubmit={this.handleSubmit}>
          <input name="username" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input name="confirm" type="password" placeholder="confirm password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = { createNewUser };

export default connect(null, mapDispatchToProps)(SignUpForm);
