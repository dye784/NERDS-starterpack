// /* global describe it beforeEach */

// import React from 'react';
// import { createStore } from 'redux';
// import { shallow } from 'enzyme';
// import chai, { expect } from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// import { spy } from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
// import LogoutContainer, { Logout } from '../';
// chai.use(chaiEnzyme());

// describe('<Logout />', () => {
//   const user = {
//     username: 'example',
//   };
//   const logout = spy();
//   let root;
//   beforeEach('Shallow render the component', () => {
//     root = shallow(<Logout user={user} logout={logout} />);
//   });

//   it('shows the username', () => {
//     expect(root.text()).to.contain(user.username);
//   });

//   it('has a logout button', () => {
//     expect(root.find('button')).to.have.length(1);
//     expect(root.find('button').text()).to.equal('Logout');
//   });

//   it('calls props.logout when logout is clicked', () => {
//     root.find('button').simulate('click');
//     expect(logout).to.have.been.called;
//   });
// });

// describe('<LogoutContainer />', () => {
//   const state = {
//     auth: { username: 'example' },
//   };

//   let root;
//   let store;
//   beforeEach('create store, shallow render container', () => {
//     store = createStore(reducerState => reducerState, state);
//     root = shallow(<LogoutContainer store={store} />);
//   });

//   it('gets props.user from state.auth', () => {
//     expect(root.find(Logout)).to.have.prop('user').to.deep.equal(state.auth);
//   });

//   it('has logout action creator on props', () => {
//     expect(root.find(Logout)).to.have.prop('logout');
//   });
// });
