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
  // console.log(req.body, 'this is the deal info in the database call ');
  
    Deal.create({borrower: req.body.borrowerEmail, lender: req.body.lenderEmail, status: req.body.status, isbn: req.body.isbn})
        .then(function(dbDeal) {
      console.log(dbDeal, 'dbdeal');
      User.findOneAndUpdate({ email: dbDeal.lender }, {$push: {deals :dbDeal._id }}, { new: true }).exec();
      User.findOneAndUpdate({ email: dbDeal.borrower }, {$push: {deals :dbDeal._id }}, { new: true }).exec();
    });
    // User.findOneAndUpdate({ email: request.body.borrower }, {$push: {deals :request.body._id }}, { new: true });
  }

module.exports.acceptDeal = function(req, res) {
  console.log(req.body);
  Deal.findOneAndUpdate({_id: req.body.dealNumber}, { $set: { status: 'sendPayment' }}, { new: true }, function (err, deal) {
    if (err) return (err);
    res.send(deal);
  });
}
module.exports.sendPayment = function(){

}
module.exports.shipBook = function(req, res) {

}
module.exports.shipBookBack = function(req, res) {

}
