var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello!' });
});


//this route path will match with acd and abcd
router.get('/ab?cd', function(req, res, next) {
  res.send('ab?cd');
});

//this route path will match with abcd, abbcd, abbbcd
router.get('/ab+cd', function(req, res, next) {
  res.send('ab+cd');
});

//this route path will match with abcd, abxcd, abRANDOMcd, ab123cd
router.get('/ab*cd', function(req, res, next) {
  res.send('ab*cd');
});

//this route path will match with  /abe and /abcde
router.get('/ab(cd)?e', function(req, res, next) {
  res.send('ab(cd)?e');
});

//This route path will match anything with an “a” in it.
router.get('/a/', function(req, res, next) {
  res.send('/a/');
});

//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
router.get('/.*fly$/', function(req, res, next) { 
  //this is a middleware functions (function with req, res and next).
  res.send('/.*fly$/');
  next() //Next will execute the next middleware, if the current middleware does not end the request-response cycle.
  // next will be called with either the rejected value or the thrown Error.
});

//route parameters
router.get('/users/:userId/books/:bookId', function(req, res, next) {
  res.send(req.params); //showing which params i need to access this end point. And then I can replace the userId and bookId with a number because "-" and "." are interpreted literally
});

//route parameters
router.get('/sentFile', function(req, res, next) {
  res.sendFile('staticIndex.html')
});

module.exports = router;
