var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  /*request.get({url:'178.128.120.242:777/mt/get1'},(err,res,body)=>{
    //var pm10 = JSON.parse(body);

    console.log(res);
  });*/

  request('178.128.120.242:777/mt/get1', function(err, response, body) {

    var pm = JSON.parse(body);
    console.log(pm);
    
  });

  res.render('index', { title: 'PM 2.5 TEST' });
});

module.exports = router;
