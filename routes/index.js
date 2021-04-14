var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

const UserModel = require("../model/user");
const BookModel = require("../model/book");


// GET home page. 
router.get('/', function (req, res, next) {
 userController.index(req, res);
});

// GET login page. 
router.get('/login', function (req, res, _next) {
  res.render('login');
});

// GET list books

router.get('/books', async function(req,res,_next){
  
  const book = await BookModel.find({});
  res.render('books',{books:book})
});

 







module.exports = router
