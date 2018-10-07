const express = require("express");
var router = express.Router();
var query = require("./query");
router.get("/",(req,res)=>{
  var output={
    count:0,
    pageSize:9,
    pageCount:0,
    pno:req.query.pno,   //需要地址栏有这个参数
    data:[]
  };
  var kw = req.query.kw;   //需要从地址栏获得这个参数
  //"鞋 平"
  var kws = kw.split(" ");   //如果地址栏没写参数kw,就会报错
  //转成数组去掉空格[鞋,平]
  kws.forEach((elem,i,arr)=>{
    arr[i]=`title like '%${elem}%'`;
  })
  /*
    [
      title like '%鞋%',
      title like '%平%'
    ]
  */
  //用and转成字符串连接起来join(" and ")
  var where = kws.join(" and ");
  //"title like '%鞋%' and title like '%平%'"
  var sql = `select *,(select lg from ck_shoes_pic where shoes_id=lid limit 1) as lg from ck_shoes where ${where}`;
  query(sql,[])
  .then(result=>{
    output.count = result.length;
    output.pageCount = Math.ceil(output.count/output.pageSize);
    sql += `limit ?,?`;
    return query(sql,[output.pageSize*output.pno,output.pageSize]);
  })
  .then(result=>{
    output.data = result;  //output.data就是从数据库查询到的数据
    res.send(output);   //输出output 前台js接收这个output
  })
})
module.exports = router;
