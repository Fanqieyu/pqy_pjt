
  function clickALL(){
    $(":checkbox[name='chooseId']").prop("checked",$("#check").prop("checked"));
  }
  function clickone(){
    var allcheck=true;  //定义一个变量为true 3个复选框全选中
    $(":checkbox[name='chooseId']").each(function(){ //遍历3个复选框
      if($(this).prop("checked")==false){ //如果有单个复选框没选中
        allcheck=false; //转为false 也不选中
      };
    });
    if(allcheck){  //如果3个复选框全选中
      $("#check").prop("checked",true); //全选按钮也选中
    }else{
      $("#check").prop("checked",false); //如果为变量为false，全选按钮不选中
    }
  }
