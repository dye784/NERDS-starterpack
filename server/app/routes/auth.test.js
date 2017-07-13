/* global describe it before afterEach beforeEach */

import request from 'supertest';
import app from '../../../server/app/main';
import User from '../../../server/model/user';
import db from '../../../server/model';

describe('Auth Routes', () => {
  before('Clear database', () => db.sync({ force: true }));
  afterEach('Clear database', () => db.sync({ force: true }));

  const userData = {
    username: 'example',
    password: '12345',
  };

  beforeEach('Create a user', () => User.create(userData));

  describe('POST /login', () => {
    it('succeeds with a valid username and password', () => {
      return request(app)
        .post('/api/auth/login')
        .send(userData)
        .expect(200);
    });

    it('fails with an invalid username and password', () => {
      const incorrectUserData = {
        username: 'example',
        password: 'wrong password',
      };

      return request(app)
        .post('/api/auth/login')
        .send(incorrectUserData)
        .expect(401);
    });
  });

  describe('DELETE /logout', () => {
    describe('when logged in', () => {
      const agent = request.agent(app);

      beforeEach('log in', () => {
        return agent
          .post('/api/auth/login')
          .send(userData);
      });

      it('logs you out', () => {
        return agent.delete('/api/auth/logout')
          .expect(204)
          .then(() => {
            return agent.get('/api/auth/me')
              .expect(200);
          });
      });
    });
  });
});
