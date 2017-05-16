/* global describe it beforeEach */

const { expect } = require('chai');
const { createStore } = require('redux');
const { authenticate } = require('../LoginActionCreator');
const LoginReducer = require('../LoginReducer').default;

describe('Login Reducer', () => {
  const userData = {
    email: 'example@example.com',
    password: '12345',
  };

  let testStore;
  beforeEach('Create testing store from reducer', () => {
    testStore = createStore(LoginReducer);
  });

  it('has an initial state of null', () => {
    expect(testStore.getState()).to.be.null;
  });

  describe('AUTHENTICATED', () => {
    it('should update the state with a user', () => {
      testStore.dispatch(authenticate(userData));
      expect(testStore.getState()).to.deep.equal(userData);
    });
  });
});
