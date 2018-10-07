$(function(){
  $.ajax({
    url:"http://localhost:3000/header.html",
    type:"get"
  }).then(res=>{
    document.getElementById("header").innerHTML=res;

    $("[data-trigger=dropdown]").next().hide().parent()
    .mouseenter(function(){
      $(this).children(":last").show();
    })
    .mouseleave(function(){
      $(this).children(":last").hide();
    })

    //模糊查询
    var input=document.querySelector("#collapseExample>input");
    input.onkeyup=function(e){
      if(e.keyCode==13){
        /*if(input.nodeValue.trim()!=="") 加这条会报错*/
        location.href=`http://localhost:3000/products.html?kw=${input.value}`;
      } 
    }
    if(location.search.indexOf("kw=")!=-1){  //跳转后依然保存在input上
      input.value=decodeURI(location.search.split("=")[1]);
    }

    /***登录***/
    function isLogin(){
      $.ajax({
        url:"http://localhost:3000/users/islogin",
        type:"get",
        dataType:"json",
        success:function(data){
          //console.log(data);
          if(data.ok==0){  //如果返回数据为0隐藏注销
            $("#signout").show().next().hide();
          }else{
            $("#signout").hide().next().show();
            $("#uname").html(data.uname);
          }
        }
      })
    }
    //页面加载时调用一次
    isLogin();
    //点击注销
    $("#btnSignout").click(function(e){
      e.preventDefault();
      $.ajax({
        url:"http://localhost:3000/users/signout",
        type:"get",
        success:isLogin
      })
    })
    //携带当前路径跳转
    $("#btnLogin").click(function(e){
      e.preventDefault();
      location.href="http://localhost:3000/login.html?back="+location.href;
    })
  })
})