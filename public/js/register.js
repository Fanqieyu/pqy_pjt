$(function(){

  /*1.对用户名进行验证*/
  $(".uname").blur(function(){
    var uname=$(".uname").val();
    if(uname.trim()==""){
      $("#username").html("用户名不能为空");
      $("#btn").attr("disabled",true);
    }else{
      //验证用户名是否存在
      $.ajax({
        url:"http://localhost:3000/users/isExist",
        type:"get",
        data:{uname},
        dataType:"json",
        success:function(data){
          if(data.ok==0){
            $("#username").html("用户名已存在");
            $(".uname").val("");
            $("#btn").attr("disabled",true);
          }else{
            $("#username").html("");
            $("#btn").attr("disabled",false);
          }
        }
      })
    }
  })
  /*2.对手机号进行验证*/
  $(".phone").blur(function(){
    var phone=$(".phone").val();
    if(phone.trim()==""){
      $("#phone").html("手机号不能为空");
      $("#btn").attr("disabled",true);
    }else{
      $("#phone").html("");
      $("#btn").attr("disabled",false);
    }
  })
  /*3.对邮箱进行验证*/
  $(".email").blur(function(){
    var email=$(".email").val();
    var regEmail=/^\w+@\w+((\.\w+)+)$/;
    if(!regEmail.test(email)){
      $("#email").html("邮箱格式不正确");
      $("#btn").attr("disabled",true);
    }else{
      $("#email").html("");
      $("#btn").attr("disabled",false);
    }
  })
  /*4.对密码进行验证*/
  $(".upwd").blur(function(){
    var upwd=$(".upwd").val();
    if(upwd.trim()==""){
      $("#upwd").html("密码不能为空");
      $("#btn").attr("disabled",true);
    }else if(upwd.length<6){
      $("#upwd").html("密码不能小于6位");
      $("#btn").attr("disabled",true);
    }else{
      $("#upwd").html("");
      $("#btn").attr("disabled",false);
    }
  })
  /*确认密码*/
  $(".rpwd").blur(function(){
    var rpwd=$(".rpwd").val();
    var upwd=$(".upwd").val();
    if(rpwd.trim()==""){
      $("#rpwd").html("确认密码不能为空");
      $("#btn").attr("disabled",true);
    }else if(rpwd!=upwd){
      $("#rpwd").html("两次输入的密码不一致");
      $("#btn").attr("disabled",true);
    }else{
      $("#rpwd").html("");
      $("#btn").attr("disabled",false);
    }
  })

  
  /**注册按钮**/
  $(".register").click(function(){
    var uname=$(".uname").val();
    var birth=$(".birth").val();
    var phone=$(".phone").val();
    var email=$(".email").val();
    var city=$(".city").val();
    var upwd=$(".upwd").val();
    var rpwd=$(".rpwd").val();
    if(uname==""||phone==""||upwd==""||rpwd==""){
      $("#btn").attr("disabled",true);
    }else{
      $.ajax({
        url:"http://localhost:3000/users/register",
        type:"post",
        data:{uname,birth,phone,email,city,upwd,rpwd},
        dataType:"json",
        success:function(data){
          if(data.code==200){
            alert("注册成功!即将跳转到登录页!");
            location.href="http://localhost:3000/login.html";
          }
        }
      })
    }
      
    
  })
})