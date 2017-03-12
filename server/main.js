const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 1337;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.user(bodyParser.urlecoded({extended: false}))
app.use(bodyParser.json())

app.use('/', (req, res, send) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
})

app.listen(port, function () {
 console.log('Server running on port ' + port);
});
