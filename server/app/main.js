const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();

const routes = require('./routes');
const db = require('../model');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 1337;

// Logging Middleware
if (!isProduction) { app.use(morgan('dev')); }

// Server up static files from '../../public'
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'invalid secret key',
  resave: false,
  saveUninitialized: false,
}));

// Authentication Middleware
app.use(passport.initialize());
app.use(passport.session());

// Server up index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

// Reroute to /api
app.use('/api', routes);

// Sync database then start listening if we are running the file directly
// Needed to remove errors during http testing
if (module === require.main) {
  db.sync()
  .then(() => {
    console.log('----- Database is Synced! -----');
    app.listen(port, () => {
      console.log('----- HTTP Server Started! -----');
      console.log(`Server is listening on port ${port}`);
    });
  });
}

module.exports = app;
