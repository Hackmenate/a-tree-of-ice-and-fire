var express = require('express');
var characterController = require('../../db/controllers/character.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Send back charcters you've retrieved from the database
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
  });

module.exports = router;
