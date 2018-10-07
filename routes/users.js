var express = require("express");
var router = express.Router();
var pool = require("../pool");

//用户注册
//localhost:3000/users/register?uname=fqy&birth=1997-02-07&phone=15179568899&email=333@163.com&city=3&upwd=123456&rpwd=123456 测试
router.post("/register",(req,res)=>{
  var {uname,birth,phone,email,city,upwd,rpwd} =req.body;
  console.log(req.body);
  var sql = "INSERT INTO `ck_user` VALUES(NULL,?,?,?,?,?,?,?)";
  pool.query(sql,[uname,birth,phone,email,city,upwd,rpwd],(err,result)=>{
    if(err){
      throw err;
    }
    //console.log(result);
    res.send({code:200,msg:"register success"});
  })
})
//用户名是否已存在
router.get("/isExist",(req,res)=>{
  var uname = req.query.uname;
  var sql = "SELECT * FROM `ck_user` WHERE uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({ok:0,msg:"用户名已存在"})
    }else{
      res.send({ok:1})
    }
  })
})

//用户登录
router.post("/signin",(req,res)=>{
  var {uname,upwd}=req.body;
  var sql = "SELECT * FROM `ck_user` WHERE uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(result.length>0){
      req.session.uid=result[0].uid;
      res.send({ok:1})
    }else{
      res.send({ok:0,msg:"用户名或密码错误！"})
    }
  })
})
//是否已经登录
router.get("/islogin",(req,res)=>{
  if(req.session.uid==null)
    res.send({ok:0});
  else{
    var sql = "SELECT * FROM `ck_user` WHERE uid=?";
    pool.query(sql,[req.session.uid],(err,result)=>{
      res.send({ok:1,uname:result[0].uname});
    })
  }
})
//用户注销
router.get("/signout",(req,res)=>{
  delete req.session.uid;
  res.send();
})
module.exports = router;