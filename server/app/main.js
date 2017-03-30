const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('../model');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 1337;
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.use('/api', routes);

db.sync()
.then(() => {
  console.log('Database is Synced!');
  app.listen(port, (err) => {
    if (err) { throw err; }
    console.log('HTTP server is listening on port', port);
  });
});

