var mongoose = require('mongoose');
var User = mongoose.model('User');
var Deal = mongoose.model('Deal');


module.exports.saveBook = function(req, res) {

  User.findOneAndUpdate({'email': req.body.email}, {$push: {'books': req.body.book}}, {upsert: true, new: true})
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

  module.exports.startDeal = function(req, res) {
    console.log(req.body, 'this is the deal info in the database call ')
    return Deal.create({borrower: req.body.borrowerEmail, lender: req.body.lenderEmail, status: req.body.status},
        {upsert: true, new: true})
    .exec(function(err, response) {
      db.User.Update({ email: req.body.lenderEmail, }, {$push: {deals :response._id }}, { upsert: true, new: true });
      db.User.Update({ email: req.body.borrowerEmail, }, {$push: {deals :response._id }}, {upsert: true, new: true });
    });
}