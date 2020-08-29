const request = require('supertest');
const app = require('../../../server/app/main');
const { db, User } = require('../../../server/model');

describe('Auth Routes', () => {
    beforeEach(async (done) => {
        await db.sync({ force: true });
        await User.create(userData);
        done();
    });

    afterAll(() => {
        return db.close();
    })

    const userData = {
        username: 'example',
        password: '12345',
    };

    describe('POST /login', () => {
        it('succeeds with a valid username and password', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send(userData)

            expect(res.status).toBe(200);
            expect(res.body.username).toBe(userData.username);
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

            beforeEach(() => {
                return agent
                    .post('/api/auth/login')
                    .send(userData);
            });

            it('logs you out', async () => {
                await agent.delete('/api/auth/logout')
                    .expect(204);

                const res = await agent.get('/api/auth/me');

                expect(res.status).toBe(200);
                expect(res.body).toEqual({});
            });
        });
    });
});
