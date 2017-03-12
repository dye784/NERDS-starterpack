const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 1337;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res, send) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, function () {
 console.log('Server running on port ' + port);
});
