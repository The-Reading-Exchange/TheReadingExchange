var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlBook = require('../controllers/savebook');


// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/getprofilebooks/:id', ctrlProfile.getProfileBooks);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//other stuff
router.post('/add-book', ctrlBook.saveBook);


module.exports = router;
