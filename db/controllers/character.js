var CharacterModel = require('../models/character.js');

// findAll retrieves all characters
function findAll(callback) {
  CharacterModel.find({}, callback);
}

// findOne will retrieve the character associated with the given id
function findOne(id, callback) {
  CharacterModel.find({id: id}, callback);
}

// findByName will retrieve the character associated with the given name
function findByName(name, callback) {
  CharacterModel.find({name: name}, callback);
}

// insert inserts a character into the db
function insert(character, callback) {
  CharacterModel.create(character, callback);
}

exports.findOne = findOne;
exports.findByName = findByName;
exports.findAll = findAll;
exports.insert = insert;
