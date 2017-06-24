## NERDS(NERP) Starter Pack
[![Build Status](https://travis-ci.org/dye784/NERDS-starterpack.svg?branch=master)](https://travis-ci.org/dye784/NERDS-starterpack)

### Introduction
Hello, my name is Damon Ye and this is a boiler plate for the NERDS stack!

The NERDS stack consists of :

Node.js
Express
React, Redux
Databases with SQL (PostgreSQL, Sequelize)

Files are structured by specific domains, including the style sheets.

Testing is done with Mocha, Chai, SuperTest, and Enyzme!

CSS is precompiled using SASS and directly imported into the js files.

### Installation and Setup
If you want to modify the NERDS Starter Pack to your liking **Fork** and then modify it to your liking!

If you want to use this to jumpstart your apps **clone** this repository and off you go!

To just clone it:

Create your own Github repo and clone it or make an empty directory on your machine and `git init`.

Then add the remote branch

```
git remote add nerds https://github.com/dye784/NERDS-starterpack.git
```

Then pull from the remote repo into the master branch

```
git pull nerds master
```

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


