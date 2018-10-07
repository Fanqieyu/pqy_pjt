//1.使用express构建web服务器
const express=require('express');
//session模块
const session=require('express-session');
const bodyParser=require('body-parser');
//1.1 引入路由模块
var products = require("./routes/products");
var details = require("./routes/details");
var users = require("./routes/users");


//2.创建express对象
var app=express();
//3.绑定监听端口
app.listen(3000);

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//4.指定静态目录 public
app.use(express.static(__dirname+'/public'));
//配置session
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));

/*使用路由器来管理路由*/
app.use("/products",products);
app.use("/details",details);
app.use("/users",users);