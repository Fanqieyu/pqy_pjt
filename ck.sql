SET NAMES UTF8;
DROP DATABASE IF EXISTS ck;
CREATE DATABASE ck CHARSET=UTF8;
USE ck;

/*ck鞋子*/
CREATE TABLE ck_shoes(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),   #标题
  num  VARCHAR(64),	#代号
  price	DECIMAL(10,2),	#价格
  
  spec VARCHAR(32),  	#皮质特征
  space VARCHAR(32),	#适合场所
  height VARCHAR(32),	#跟高
  weight DECIMAL(4,1),	#毛重
  xiedi VARCHAR(32),	#鞋底材质
  color	VARCHAR(32),	#颜色
  xiegen VARCHAR(32),	#鞋跟形状
  neili VARCHAR(32),	#内里特质
  close	VARCHAR(32),	#闭合方式
  sheji VARCHAR(32)	#款型设计
);

INSERT INTO ck_shoes VALUES 

(NULL,'印花螺纹蝴蝶结穆勒平底鞋','SL1-70960009',469,'织物','休闲/度假','1CM','350.0','复合底','浅蓝色/综合色','平跟','织物','套脚','穆勒鞋'),
(NULL,'毛绒饰乐福皮革平底鞋','SL1-71660009',569,'羊皮革','休闲/派对','2CM','490.0','复合底','黑色/红色/深蓝色','平底','人造革PU','套脚','乐福鞋'),
(NULL,'螺纹绑带饰平底鞋','CK1-70390232',339,'聚氨酯合成革','休闲/街头','1CM','410.0','复合底','黑色/紫色','平跟','人造革PU','绑带','绑带鞋/尖头鞋'),
(NULL,'金属扣袢带饰平底鞋','SL1-71720009',519,'羊头层皮革/牛皮革','休闲/通勤','1CM','430.0','复合底','黑色/干邑色','平跟','人造革PU','扣带','芭蕾舞鞋'),
(NULL,'尖头异形跟皮革及踝鞋靴','SL1-90280037',669,'牛皮革','休闲/派对/通勤','6CM','570.0','复合底','黑色/棕色','异形跟','人造革PU','拉链','尖头鞋'),
(NULL,'撞色猫跟玛丽珍高跟鞋','CK1-60580113',339,'聚氨酯合成革','通勤/休闲','4CM','430.0','复合底','黑色/粉色','猫跟','人造革PU','扣带','玛丽珍鞋'),
(NULL,'尖头方跟女巫高跟鞋','CK1-60390314',339,'聚氨酯合成革','通勤/休闲','5CM','430.0','复合底','黑色/绿色/裸色','方跟','人造革PU','套脚','女巫鞋'),
(NULL,'尖头细跟高跟鞋','CK1-60280150',369,'织物/聚氨酯合成革','派对','10CM','410.0','复合底','黑色/蓝色/青灰色','细高跟','人造革PU','套脚','尖头鞋'),
(NULL,'经典德比平底鞋','CK1-70380699',369,'聚氨酯合成革','休闲/通勤','4CM','660.0','复合底','深蓝色/灰褐色','平跟','人造革PU','系带','德比鞋'),
(NULL,'圆环镂空细跟高跟鞋','CK1-60280148',399,'聚氨酯合成革/织物','街头/派对','10CM','450.0','复合底','黑色/红色/深蓝色','细高跟','人造革PU','套脚','尖头鞋'),
(NULL,'民族风流苏一字带高跟鞋','CK1-60960025',599,'聚氨酯合成革','派对','10CM','450.0','复合底','黑色/红色/深蓝色','细高跟','人造革PU','套脚','尖头鞋'),
(NULL,'方口后袢带细跟高跟鞋','CK1-60361130',399,'聚氨酯合成革/麂皮绒','休闲/通勤','11CM','410.0','复合底','裸色/深紫红色','细高跟','人造革PU','套脚','尖头鞋'),
(NULL,'布洛克雕花边高跟鞋','CK1-61680014',369,'聚氨酯合成革','休闲/通勤/派对','6CM','460.0','复合底','黑色/芥末黄/深灰色','粗跟','人造革PU','扣带','玛丽珍鞋'),
(NULL,'一字魔术贴休闲平底鞋','CK1-71700005',369,'织物/压花皮','休闲/运动','2CM','680.0','复合底','白色/粉红色','平跟','人造革PU','魔术贴','运动鞋子/包头鞋'),
(NULL,'金属扣绒袢带饰及踝鞋靴','CK1-90900064',519,'聚氨酯合成革/织物','休闲','7CM','840.0','复合底','黑色/深棕色','粗跟','人造革PU','拉链','包头鞋')
(NULL,'亚克力链饰踝带粗跟高跟鞋','CK1-61720007',399,'聚氨酯合成革','休闲','8CM','580.0','复合底','黑色/灰色/灰褐色','粗跟','人造革PU','扣带','尖头鞋'),
(NULL,'印花拼接细高跟及踝鞋靴','SL1-90920007',719,'织物','休闲/派对','8CM','540.0','复合底','黑色/浅蓝色','细高跟','人造革PU','拉链','尖头鞋'),
(NULL,'小猫跟尖头及踝鞋靴','CK1-90960015',499,'聚氨酯合成革/织物','休闲/派对','6CM','480.0','复合底','黑色/酒红色','小猫跟','人造革PU','套脚','袜靴'),
(NULL,'交叉踝带尖头高跟鞋','CK1-60390312',339,'压花皮/织物','休闲','5CM','450.0','复合底','黑色/粉红色','粗跟','人造革PU','拉链','尖头鞋/绑带鞋/包头鞋'),
(NULL,'金属饰线条绑带高跟鞋','CK1-60360995',139,'绒面','派对','11CM','440.0','复合底','Black/Burgundy/Nude','细高跟','人造革PU','绑带','绑带鞋/凉鞋');

/*ck鞋子图片*/
CREATE TABLE ck_shoes_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,   		#鞋子编号
  sm VARCHAR(128),    	#小图片路径
  md VARCHAR(128),	#中图片路径
  lg VARCHAR(128)	#大图片路径
);
INSERT INTO ck_shoes_pic VALUES
(NULL, 1, 'img/product/sm/a01.jpg','img/product/md/a01.jpg','img/product/lg/a01.jpg'),
(NULL, 1, 'img/product/sm/a02.jpg','img/product/md/a02.jpg','img/product/lg/a02.jpg'),
(NULL, 1, 'img/product/sm/a03.jpg','img/product/md/a03.jpg','img/product/lg/a03.jpg'),
(NULL, 1, 'img/product/sm/a04.jpg','img/product/md/a04.jpg','img/product/lg/a04.jpg'),
(NULL, 1, 'img/product/sm/a05.jpg','img/product/md/a05.jpg','img/product/lg/a05.jpg'),
(NULL, 2, 'img/product/sm/b01.jpg','img/product/md/b01.jpg','img/product/lg/b01.jpg'),
(NULL, 2, 'img/product/sm/b02.jpg','img/product/md/b02.jpg','img/product/lg/b02.jpg'),
(NULL, 2, 'img/product/sm/b03.jpg','img/product/md/b03.jpg','img/product/lg/b03.jpg'),
(NULL, 2, 'img/product/sm/b04.jpg','img/product/md/b04.jpg','img/product/lg/b04.jpg'),
(NULL, 2, 'img/product/sm/b05.jpg','img/product/md/b05.jpg','img/product/lg/b05.jpg'),
(NULL, 3, 'img/product/sm/c01.jpg','img/product/md/c01.jpg','img/product/lg/c01.jpg'),
(NULL, 3, 'img/product/sm/c02.jpg','img/product/md/c02.jpg','img/product/lg/c02.jpg'),
(NULL, 3, 'img/product/sm/c03.jpg','img/product/md/c03.jpg','img/product/lg/c03.jpg'),
(NULL, 3, 'img/product/sm/c04.jpg','img/product/md/c04.jpg','img/product/lg/c04.jpg'),
(NULL, 3, 'img/product/sm/c05.jpg','img/product/md/c05.jpg','img/product/lg/c05.jpg'),
(NULL, 4, 'img/product/sm/d01.jpg','img/product/md/d01.jpg','img/product/lg/d01.jpg'),
(NULL, 4, 'img/product/sm/d02.jpg','img/product/md/d02.jpg','img/product/lg/d02.jpg'),
(NULL, 4, 'img/product/sm/d03.jpg','img/product/md/d03.jpg','img/product/lg/d03.jpg'),
(NULL, 4, 'img/product/sm/d04.jpg','img/product/md/d04.jpg','img/product/lg/d04.jpg'),
(NULL, 4, 'img/product/sm/d05.jpg','img/product/md/d05.jpg','img/product/lg/d05.jpg'),
(NULL, 5, 'img/product/sm/e01.jpg','img/product/md/e01.jpg','img/product/lg/e01.jpg'),
(NULL, 5, 'img/product/sm/e02.jpg','img/product/md/e02.jpg','img/product/lg/e02.jpg'),
(NULL, 5, 'img/product/sm/e03.jpg','img/product/md/e03.jpg','img/product/lg/e03.jpg'),
(NULL, 5, 'img/product/sm/e04.jpg','img/product/md/e04.jpg','img/product/lg/e04.jpg'),
(NULL, 5, 'img/product/sm/e05.jpg','img/product/md/e05.jpg','img/product/lg/e05.jpg'),
(NULL, 6, 'img/product/sm/f01.jpg','img/product/md/f01.jpg','img/product/lg/f01.jpg'),
(NULL, 6, 'img/product/sm/f02.jpg','img/product/md/f02.jpg','img/product/lg/f02.jpg'),
(NULL, 6, 'img/product/sm/f03.jpg','img/product/md/f03.jpg','img/product/lg/f03.jpg'),
(NULL, 6, 'img/product/sm/f04.jpg','img/product/md/f04.jpg','img/product/lg/f04.jpg'),
(NULL, 7, 'img/product/sm/g01.jpg','img/product/md/g01.jpg','img/product/lg/g01.jpg'),
(NULL, 7, 'img/product/sm/g02.jpg','img/product/md/g02.jpg','img/product/lg/g02.jpg'),
(NULL, 7, 'img/product/sm/g03.jpg','img/product/md/g03.jpg','img/product/lg/g03.jpg'),
(NULL, 7, 'img/product/sm/g04.jpg','img/product/md/g04.jpg','img/product/lg/g04.jpg'),
(NULL, 7, 'img/product/sm/g05.jpg','img/product/md/g05.jpg','img/product/lg/g05.jpg'),
(NULL, 8, 'img/product/sm/h01.jpg','img/product/md/h01.jpg','img/product/lg/h01.jpg'),
(NULL, 8, 'img/product/sm/h02.jpg','img/product/md/h02.jpg','img/product/lg/h02.jpg'),
(NULL, 8, 'img/product/sm/h03.jpg','img/product/md/h03.jpg','img/product/lg/h03.jpg'),
(NULL, 8, 'img/product/sm/h04.jpg','img/product/md/h04.jpg','img/product/lg/h04.jpg'),
(NULL, 8, 'img/product/sm/h05.jpg','img/product/md/h05.jpg','img/product/lg/h05.jpg'),
(NULL, 9, 'img/product/sm/i01.jpg','img/product/md/i01.jpg','img/product/lg/i01.jpg'),
(NULL, 9, 'img/product/sm/i02.jpg','img/product/md/i02.jpg','img/product/lg/i02.jpg'),
(NULL, 9, 'img/product/sm/i03.jpg','img/product/md/i03.jpg','img/product/lg/i03.jpg'),
(NULL, 9, 'img/product/sm/i04.jpg','img/product/md/i04.jpg','img/product/lg/i04.jpg'),
(NULL, 9, 'img/product/sm/i05.jpg','img/product/md/i05.jpg','img/product/lg/i05.jpg'),
(NULL, 10, 'img/product/sm/j01.jpg','img/product/md/j01.jpg','img/product/lg/j01.jpg'),
(NULL, 10, 'img/product/sm/j02.jpg','img/product/md/j02.jpg','img/product/lg/j02.jpg'),
(NULL, 10, 'img/product/sm/j03.jpg','img/product/md/j03.jpg','img/product/lg/j03.jpg'),
(NULL, 10, 'img/product/sm/j04.jpg','img/product/md/j04.jpg','img/product/lg/j04.jpg'),
(NULL, 11, 'img/product/sm/k01.jpg','img/product/md/k01.jpg','img/product/lg/k01.jpg'),
(NULL, 11, 'img/product/sm/k02.jpg','img/product/md/k02.jpg','img/product/lg/k02.jpg'),
(NULL, 11, 'img/product/sm/k03.jpg','img/product/md/k03.jpg','img/product/lg/k03.jpg'),
(NULL, 11, 'img/product/sm/k04.jpg','img/product/md/k04.jpg','img/product/lg/k04.jpg'),
(NULL, 11, 'img/product/sm/k05.jpg','img/product/md/k05.jpg','img/product/lg/k05.jpg'),
(NULL, 12, 'img/product/sm/l01.jpg','img/product/md/l01.jpg','img/product/lg/l01.jpg'),
(NULL, 12, 'img/product/sm/l02.jpg','img/product/md/l02.jpg','img/product/lg/l02.jpg'),
(NULL, 12, 'img/product/sm/l03.jpg','img/product/md/l03.jpg','img/product/lg/l03.jpg'),
(NULL, 12, 'img/product/sm/l04.jpg','img/product/md/l04.jpg','img/product/lg/l04.jpg'),
(NULL, 12, 'img/product/sm/l05.jpg','img/product/md/l05.jpg','img/product/lg/l05.jpg'),
(NULL, 13, 'img/product/sm/m01.jpg','img/product/md/m01.jpg','img/product/lg/m01.jpg'),
(NULL, 13, 'img/product/sm/m02.jpg','img/product/md/m02.jpg','img/product/lg/m02.jpg'),
(NULL, 13, 'img/product/sm/m03.jpg','img/product/md/m03.jpg','img/product/lg/m03.jpg'),
(NULL, 13, 'img/product/sm/m04.jpg','img/product/md/m04.jpg','img/product/lg/m04.jpg'),
(NULL, 13, 'img/product/sm/m05.jpg','img/product/md/m05.jpg','img/product/lg/m05.jpg'),
(NULL, 14, 'img/product/sm/n01.jpg','img/product/md/n01.jpg','img/product/lg/n01.jpg'),
(NULL, 14, 'img/product/sm/n02.jpg','img/product/md/n02.jpg','img/product/lg/n02.jpg'),
(NULL, 14, 'img/product/sm/n03.jpg','img/product/md/n03.jpg','img/product/lg/n03.jpg'),
(NULL, 14, 'img/product/sm/n04.jpg','img/product/md/n04.jpg','img/product/lg/n04.jpg'),
(NULL, 14, 'img/product/sm/n05.jpg','img/product/md/n05.jpg','img/product/lg/n05.jpg'),
(NULL, 15, 'img/product/sm/o01.jpg','img/product/md/o01.jpg','img/product/lg/o01.jpg'),
(NULL, 15, 'img/product/sm/o02.jpg','img/product/md/o02.jpg','img/product/lg/o02.jpg'),
(NULL, 15, 'img/product/sm/o03.jpg','img/product/md/o03.jpg','img/product/lg/o03.jpg'),
(NULL, 15, 'img/product/sm/o04.jpg','img/product/md/o04.jpg','img/product/lg/o04.jpg'),
(NULL, 15, 'img/product/sm/o05.jpg','img/product/md/o05.jpg','img/product/lg/o05.jpg'),
(NULL, 16, 'img/product/sm/p01.jpg','img/product/md/p01.jpg','img/product/lg/p01.jpg'),
(NULL, 16, 'img/product/sm/p02.jpg','img/product/md/p02.jpg','img/product/lg/p02.jpg'),
(NULL, 16, 'img/product/sm/p03.jpg','img/product/md/p03.jpg','img/product/lg/p03.jpg'),
(NULL, 16, 'img/product/sm/p04.jpg','img/product/md/p04.jpg','img/product/lg/p04.jpg'),
(NULL, 17, 'img/product/sm/q01.jpg','img/product/md/q01.jpg','img/product/lg/q01.jpg'),
(NULL, 17, 'img/product/sm/q02.jpg','img/product/md/q02.jpg','img/product/lg/q02.jpg'),
(NULL, 17, 'img/product/sm/q03.jpg','img/product/md/q03.jpg','img/product/lg/q03.jpg'),
(NULL, 17, 'img/product/sm/q04.jpg','img/product/md/q04.jpg','img/product/lg/q04.jpg'),
(NULL, 17, 'img/product/sm/q05.jpg','img/product/md/q05.jpg','img/product/lg/q05.jpg'),
(NULL, 18, 'img/product/sm/r01.jpg','img/product/md/r01.jpg','img/product/lg/r01.jpg'),
(NULL, 18, 'img/product/sm/r02.jpg','img/product/md/r02.jpg','img/product/lg/r02.jpg'),
(NULL, 18, 'img/product/sm/r03.jpg','img/product/md/r03.jpg','img/product/lg/r03.jpg'),
(NULL, 18, 'img/product/sm/r04.jpg','img/product/md/r04.jpg','img/product/lg/r04.jpg'),
(NULL, 18, 'img/product/sm/r05.jpg','img/product/md/r05.jpg','img/product/lg/r05.jpg'),
(NULL, 19, 'img/product/sm/s01.jpg','img/product/md/s01.jpg','img/product/lg/s01.jpg'),
(NULL, 19, 'img/product/sm/s02.jpg','img/product/md/s02.jpg','img/product/lg/s02.jpg'),
(NULL, 19, 'img/product/sm/s03.jpg','img/product/md/s03.jpg','img/product/lg/s03.jpg'),
(NULL, 19, 'img/product/sm/s04.jpg','img/product/md/s04.jpg','img/product/lg/s04.jpg'),
(NULL, 19, 'img/product/sm/s05.jpg','img/product/md/s05.jpg','img/product/lg/s05.jpg'),
(NULL, 20, 'img/product/sm/t01.jpg','img/product/md/t01.jpg','img/product/lg/t01.jpg'),
(NULL, 20, 'img/product/sm/t02.jpg','img/product/md/t02.jpg','img/product/lg/t02.jpg'),
(NULL, 20, 'img/product/sm/t03.jpg','img/product/md/t03.jpg','img/product/lg/t03.jpg'),
(NULL, 20, 'img/product/sm/t04.jpg','img/product/md/t04.jpg','img/product/lg/t04.jpg');



/*用户信息*/
CREATE TABLE ck_user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(32),
 birth VARCHAR(32),
 phone VARCHAR(16),
 email VARCHAR(64),
 city VARCHAR(8),
 upwd VARCHAR(32),
 rpwd VARCHAR(32)
);

INSERT INTO ck_user VALUES
(NULL, 'dingding', '1997-08-08', '15566668888', 'ding@qq.com', '4', '123456', '123456');











