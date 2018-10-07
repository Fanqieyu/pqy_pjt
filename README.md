# jquery+Bootstrap仿小ck官网 

##### 开发工具：WebStorm+VScode+Mysql+Chrome
##### 技术栈：HTML+CSS+Ajax+jQuery+Bootstrap+express+Nodejs
##### 项目描述：
Charles&Keith官网是一个PC端和移动端的响应式购物网站，用户可以使用电脑/平板或者手机访问该网站实现浏览商品。该网站我主要实现了注册页面，登录页面，官网页面，商品列表页面，页面切换以及商品详情页面的渲染等功能。静态页面欣赏可浏览：； 
##### 项目技术：
1.所有页面均运用HTML/CSS进行简单布局及页面特效，并使用Bootstrap和媒体查询进行响应式布局。

2.使用Ajax封装了公共的头部和底部，便于共用，修改和维护。

3.注册和登录页面主要使用到的是正则表达式判断数据格式、使用js进行非空验证及Ajax的异步请求数据。

4.官网首页使用Bootstrap实现轮播图的功能，在首页使用jQuery实现电商网站楼层滚动的效果。

5.商品列表页面实现了按关键字检索商品(模糊查询)，使用Nodejs在后台通过SQL查询的limit进行数据的分页查询。使用session记录用户的登录状态，将商品添加至购物车之前要求用户先登录。

6.运用Ajax+json+Nodejs把需要加载的jQuery元素进行组织，动态加载网页元素。

7.商品详情页面实现仿照京东淘宝制作产品焦点放大图。

8.购物车页面使用jQuery实现checkBox的全选全不选反选点击事件。
### ck网站首页
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/index_pc.png "pc端首页")
***
***
### ck网站首页(移动端)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/index_mo.png "mobile端首页")
***
***
### ck网站首页(下拉列表框)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/nav.png "首页下拉列表框")
***
***
### ck网站首页(卡片效果)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/reverse.png "卡片")
***
***
### ck网站商品列表页
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/product.png "商品列表页")
***
***
### ck网站商品详情页
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/detail_pc.png "pc端商品详情页")
***
***
### ck网站商品详情页(移动端)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/detail_mo.png "mobile端商品详情页")
***
***
### ck网站购物车
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/cart_pc.png "pc端购物车页")
***
***
### ck网站购物车(移动端)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/cart_mo.png "mobile端购物车页")
***
***
### ck网站注册页
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/register.png "注册")
***
***
### ck网站登录页
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/login_pc.png "PC端登录")
***
***
### ck网站登录页(移动端)
![图片](https://github.com/Fanqieyu/ck_photoes/blob/master/login_mo.png "mobile端登录")
***
