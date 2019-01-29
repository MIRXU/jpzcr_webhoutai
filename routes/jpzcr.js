var express = require('express');
var router = express.Router();
let jpzcr_info=require("../jpzcr_info/jpzcr_info.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
