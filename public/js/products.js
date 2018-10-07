$(function(){
  if(location.search.indexOf("kw=")!=-1){
    var kw=decodeURI(
      location.search.split("=")[1]
    );
    //2.定义函数loadPage封装$.ajax,定义参数pno，默认=0
    function loadPage(pno=0){   //pno=0是默认值
      $.ajax({
        url:"http://localhost:3000/products",
        type:"get",
        data:{ kw,pno },
        dataType:"json",
        success:function(output){
          var {data,pageCount,pno}=output;
          var html="";
          for(var p of data){
            var {lid,lg,price,title}=p;
            html+=`<div class="col-md-4 p-1">
            <div class="card mb-4 box-shadow pr-2 pl-2 border-0">
              <a href="product_details.html?lid=${lid}">
                <img class="card-img-top" src="${lg}">
              </a>
              <div class="card-body text-center">
                <p class="card-text">
                  <a href="product_details.html?lid=${lid}" class="" title="${title}">${title}</a>
                </p>
                <p class="mb-0">SL1-71720009</p>
                <strong class="">￥${price.toFixed(2)}</strong>
                <div class="p-2 pt-0">
                  <button class="btn btn-outline-secondary p-1 border-0" type="button">-</button>
                  <input type="text" class="" value="1">
                  <button class="btn btn-outline-secondary p-1 border-0" type="button">+</button>
                  <a class="btn btn-secondary ml-1 px-1" href="cart.html">加入购物车</a>
                </div>
              </div>
            </div>
          </div>`
          }
          $("#plist").html(html);

          //分页
          var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
          for(var i=0;i<pageCount;i++){
            html+=`<li class="page-item ${i==pno?'active':''}">
            <a class="page-link bg-transparent text-dark" href="#">${i+1}</a>
          </li>`
          }
          html+=`<li class="page-item"><a class="page-link bg-transparent text-dark" href="#">下一页</a></li>`;
          var $ul=$("#plist+div>nav>ul");
          $ul.html(html);

          if(pno==0)   //如果是第1页,上一页按钮禁用
            $ul.children(":first-child").addClass("disabled");
          if(pno==pageCount-1) //如果是最后一页,下一页按钮禁用
            $ul.children(":last-child").addClass("disabled")

        }
      })
    }
    //3.页面首次加载时，得自己调用一次loadPage()
    loadPage();

    //将on(click)从$.ajax中剪切到外部和$.ajax平级
    //分页的点击事件 里面的换页码点击事件会重新加载一次ajax请求
    $("#plist+div>nav>ul").on("click","li>a",function(e){
      e.preventDefault();
      var $a=$(this);
      if($a.parent().is(":not(.active,.disabled)")){
        var $lis=$("#plist+div>nav>ul>li:gt(0):not(:last)");  //可以不用?
        console.log($lis);
        //获得现在选中的页码
        var i=$("#plist+div>nav>ul>li.active>a").html()-1;
        console.log(i);  //i是当前选中页码-1 如选中页码为2 i=>2-1=1
        if($a.parent().is(":first-child")){
          loadPage(i-1);  //如果li是上一页，loadPage(pno=1-1=0)
        }else if($a.parent().is(":last-child")){
          loadPage(i+1);  //如果li是下一页,loadPage(pno=1+1=2)
        }else
          loadPage($a.html()-1); //如果li是页码,loadPage(pno=当前页码-1)
      }
    });
    //商品数量加减和购物车按钮
    $("#plist").on("click",".card-body>div>button,.card-body>div>a",function(e){
     e.preventDefault();
     var $btn=$(this);
     if($btn.is("button")){
      var n=parseInt($btn.siblings("input").val());
      if($btn.html()=="+")
        n++;
      else if(n>1)
        n--;
        $btn.siblings("input").val(n); //表单值n要放进去
     }else{
       //验证是否登录
       $.ajax({
         url:"http://localhost:3000/users/islogin",
         type:"get",
         dataType:"json",
         success:function(data){
           if(data.ok==0){
             alert("请先登录！");
             location.href="http://localhost:3000/login.html?back="+location.href;
           }else{
             $btn.siblings("input").val(1);
             alert("添加购物车成功！");
           }
         }
       })
     }
    })

  }
})