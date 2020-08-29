const faker = require('faker');
const { User, db } = require('./server/model');

const numUsers = 20;

const doTimes = (n, fn) => {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
};

const randomFakeUser = () => {
  return User.build({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    last_logout: Date.now(),
  });
};

const createFakeUser = () => {
  const testUser = User.build({
    username: 'example',
    password: '12345',
  });
  const arrOfUsersToBeSaved = [
    testUser,
    ...doTimes(numUsers, () => randomFakeUser()),
  ].map(user => user.save());

  return Promise.all(arrOfUsersToBeSaved);
};

const seed = () => createFakeUser();

db.sync({ force: true })
  .then(() => {
    return seed();
  })
  .then(() => {
    console.log('----- Seeding successful! -----');
  }, (err) => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .then(() => {
    process.exit();
  });
