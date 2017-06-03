## NERDS(NERP) Starter Pack

### Introduction
Hello, my name is Damon Ye and this is a boiler plate for the NERDS stack!

The NERDS stack consists of :

Node.js
Express
React, Redux
Databases with SQL (PostgreSQL, Sequelize)

Files are structured by specific domains

Testing is done with Mocha, Chai, SuperTest, and Enyzme!

### Installation
**Fork** and **clone** this repository.

Then install the dependencies

```
npm install
```

To create the database first go into the `package.json` in the `db-init` script change `NAME_OF_DB` to whatever you want the name of the database to be. Then go into `server/model/_db.js and put that name for `NAME_OF_DB` in that file. Then to create your database (Make sure you have Postgres running!)

```
npm run db-init
```

Then seed the database (Random data with Fakerjs)

```
npm run seed
```

Start webpack

```
npm run build
```

To run the tests

```
npm test
```

To start the server

```
npm start
```

Then go to [http://localhost:1337/](http://localhost:1337/) to make sure everything is working correctly.

Happy App building!

### Notes
`seed.js` generates random users with one default user for testing. You can sign in with the test user at

email: `example@example.com`
password: `12345`


