## NERDS(NERP) Starter Pack
[![Build Status](https://travis-ci.org/dye784/NERDS-starterpack.svg?branch=master)](https://travis-ci.org/dye784/NERDS-starterpack)

### Introduction and Features
Hello, my name is Damon Ye and this is a boiler plate for the NERDS stack!

The NERDS stack consists of :

Node.js
Express
React, Redux
Databases with SQL (PostgreSQL, Sequelize)

Files are structured by specific domains, including the style sheets.

Redux files are named as such -- `ComponentNameActionCreator.js` or `ComponentNameReducer.js`

JSX files are explicitly labeled as `.jsx` files.

Testing is done with Mocha, Chai, SuperTest, and Enyzme!

Testing files are located in the directory of the specific component/container.

CSS is precompiled using SASS and directly imported into the js files.

Users can sign up, login and logout. Password encryption is done with bcryptjs.

Single page application style done with React Router.

Component-Container design pattern using react-redux.

Selectors are used to make state management easier and are placed in reducer files.

Sync action creators, async action creators, and constants are placed in the action creator files.

A seed file `seed.js` is included to easily create seed data.

### Installation and Setup
If you want to modify the NERDS Starter Pack to your liking **Fork** and then modify it to your liking!

If you want to use this to jumpstart your apps **clone** this repository and off you go!

To install the dependencies

```
npm install

// OR

yarn install
```

To create the database first go into the `package.json` in the `db-init` script change `name_of_db` to whatever you want the name of the database to be. Then go into `server/model/_db.js and put that name for `name_of_db` in that file. Then to create your database (Make sure you have Postgres running!)

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


