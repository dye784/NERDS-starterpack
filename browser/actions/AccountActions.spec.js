import { AUTHENTICATE, authenticate } from './AccountActions';

describe('Login Action Creators', () => {
    describe('Synchronous Action Creators', () => {
        describe('authenticate', () => {
            it('returns an object with type AUTHENTICATED and a user', () => {
                const exampleUser = {
                    email: 'example@exmaple.com',
                    password: 'examplePassword',
                };

                const result = {
                    type: AUTHENTICATE,
                    user: exampleUser,
                };

                expect(authenticate(exampleUser)).toEqual(result);
            });
        });
    });
});
