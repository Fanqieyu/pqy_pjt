//1.加载模块 mysql
const mysql = require('mysql');
//2.创建连接池对象
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'ck',
  connectionLimit:10   //活动连接数量
});
//把创建好的连接池导出
module.exports = pool;