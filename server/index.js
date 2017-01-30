var express = require('express');
var bodyParser = require('body-parser');
var characterRouter = require('./routers/character.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/ATreeOfIceAndFire');

app.use(bodyParser.json());

/* Uncomment one of the following, depending on which front-end framework you are using */
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/api/characters', characterRouter);

app.listen(8080, function() {
  console.log('listening on port 8080');
});
