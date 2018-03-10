var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.saveBook = function(req, res) {

    User.findOneAndUpdate({'email': req.body.email}, {$push: {'books': req.body.book}})
    .exec(function(err, response) {
        res.status(200).json(response);
      });
}


