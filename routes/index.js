var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con=mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '123456',
  port:3307
});

/* GET home page. */
router.post('/',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  var value=req.body.value;
  con.query("SELECT * FROM a.ss WHERE name LIKE '%"+value+"%' OR details LIKE '%"+value+"%'",function(err,rows){
    res.send(rows)
  })
});

module.exports = router;