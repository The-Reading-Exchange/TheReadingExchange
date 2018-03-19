var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlBooks = require('../controllers/bookstuff');


// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/getprofilebooks/:id', ctrlProfile.getProfileBooks);
router.get('/getlenders/:isbn', ctrlBooks.getLenders);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//other stuff
router.post('/add-book', ctrlBooks.saveBook);
router.post('/startdeal', ctrlBooks.startDeal);
router.post('/acceptdeal', ctrlBooks.acceptDeal);
router.post('/sendpayment', ctrlBooks.sendPayment)
router.post('/shipbook', ctrlBooks.shipBook);
router.post('/shipbookback', ctrlBooks.shipBookBack);


module.exports = router;
