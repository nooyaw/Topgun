var express = require('express');
var router = express.Router();

/* GET developer listing. */
router.get('/', function(req, res, next) {
  res.render('developer');
});

module.exports = router;
