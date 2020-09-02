// /* global describe it beforeEach */

// import React from 'react';
// import { createStore } from 'redux';
// import { shallow } from 'enzyme';
// import chai, { expect } from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// import { spy } from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
// import LoginContainer, { Login } from '..';
// chai.use(chaiEnzyme());

// describe('<Login />', () => {
//   let root;
//   let login;
//   beforeEach('shallow render Login component', () => {
//     login = spy();
//     root = shallow(<Login />);
//   });

//   it('contains a login form', () => {
//     expect(root.find('input[name="username"]')).to.have.length(1);
//     expect(root.find('input[name="password"]')).to.have.length(1);
//   });

//   it('has a login button', () => {
//     expect(root.find('input[type="submit"]')).to.have.length(1);
//   });

//   describe('onSubmit', () => {
//     const submitEvent = {
//       preventDefault: spy(),
//       target: {
//         username: { value: 'example' },
//         password: { value: '12345' },
//       },
//     };

//     beforeEach('shallow render Login component', () => {
//       login.reset();
//       submitEvent.preventDefault.reset();
//       root = shallow(<Login login={login} />);
//       root.find('form').simulate('submit', submitEvent);
//     });

//     it('calls props.login when submitted', () => {
//       expect(login).to.have.been.calledWith(
//         submitEvent.target.username.value, submitEvent.target.password.value);
//     });

//     it('calls evt.preventDefault', () => {
//       expect(submitEvent.preventDefault).to.have.been.called;
//     });
//   });
// });

// describe('<LoginContainer />', () => {
//   let root;
//   let store;
//   beforeEach('create store, shallow render Login Container', () => {
//     store = createStore(reducerState => reducerState, {});
//     root = shallow(<LoginContainer store={store} />);
//   });

//   it('gets props.user from state.auth', () => {
//     expect(root.find(Login)).to.have.prop('login');
//   });
// });
