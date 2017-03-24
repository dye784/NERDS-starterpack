const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 1337;
const routes = require('./routes');
const db = require('../model')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

app.use('/api', routes)

app.listen(port, function (err) {
  if (err) { throw err; }
  console.log('HTTP server is listening on port', port);
  db.sync()
  .then(function () {
    console.log('Database is Synced!');
  });
});
