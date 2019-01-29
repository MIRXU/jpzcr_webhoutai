var express = require('express');
var router = express.Router();
let user=require("../users/user.js")



/* GET home page. */
router.get('/add', function(req,res, next) {
  // res.render('index', jsonWrite(res,{"title":"金牌作词人"}));
  	user.add_user(req, res, next)
});
router.get('/update', function(req, res, next) {
 	user.update_user(req, res, next)
});
router.get('/delete', function(req, res, next) {
 	user.delete_user(req, res, next)
});
router.get('/find', function(req, res, next) {
 	user.find_allUser(req, res, next)
});
router.get('/findbyid', function(req, res, next) {
 	user.find_userById(req, res, next)
});

module.exports = router;
