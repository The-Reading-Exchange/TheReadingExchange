var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.saveBook = function(req, res) {

    User.findOneAndUpdate({'email': req.body.email}, {$push: {'books': req.body.book}})
    .exec(function(err, response) {
        res.status(200).json(response);
      });
}

module.exports.getLenders = function(req, res) {
    let isbn = String(req.params.isbn);
    User
    .find({
      "books.industryIdentifiers.identifier": isbn
    })
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }


module.exports.getProfileBooks = function(req, res) {
    let id = String(req.params.id);
    User
    .findOne({_id: req.params.id})
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }
