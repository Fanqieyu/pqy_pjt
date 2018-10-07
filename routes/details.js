const express = require("express");
var router = express.Router();
var query = require("./query");
router.get("/",(req,res)=>{
  var lid = req.query.lid;
  var output = {};
  var sql = "SELECT * FROM `ck_shoes` where lid=?";
  query(sql,[lid])
  //open(result)->then(result=>{...})
  .then(result=>{
    //console.log(result);
    output.product=result[0];
    var sql = "SELECT * FROM `ck_shoes_pic` where shoes_id=?";
    //要想继续用then,必须返回Promise对象
    return query(sql,[lid])  //return Promise
  })
  //open(result)->then(result=>{...})
  .then(result=>{
    output.pics=result;
    res.send(output);
  })
  //err(error)->catch(error=>{...})
  .catch(error=>console.log(error))
})
module.exports = router;