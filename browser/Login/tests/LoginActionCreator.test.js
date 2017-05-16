/* global describe it beforeEach afterEach */

import { expect } from 'chai';
import { AUTHENTICATED, authenticate } from '../LoginActionCreator';

describe('Login Action Creators', () => {
  describe('Synchronous Action Creators', () => {
    describe('authenticate', () => {
      it('returns an object with type AUTHENTICATED and a user', () => {
        const exampleUser = {
          email: 'example@exmaple.com',
          password: 'examplePassword',
        };

        const result = {
          type: AUTHENTICATED,
          user: exampleUser,
        };

        expect(authenticate(exampleUser)).to.deep.equal(result);
      });
    });
  });
});
