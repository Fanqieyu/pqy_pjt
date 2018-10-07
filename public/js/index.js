$(function(){
  //楼层滚动点亮
  //先让滚动到一定位置出现
  var $divLift=$("#index>div:nth-child(3)");
  $(window).scroll(function(){
    var $fs=$("#index>h3:nth-child(2)>div");
    var $f1=$fs.first();
    //滚动的高度
    var scrollTop=$("html,body").scrollTop();
    //该页面元素距body顶部的距离
    var offsetTop=$f1.offset().top;
    //文档显示区总距离的一半+滚动的高度>页面元素距body顶部的距离
    if(innerHeight/2.5+scrollTop>offsetTop){
      $divLift.removeClass("d-none");
    }else{
      $divLift.addClass("d-none");
    }
    //遍历每个楼层（下标i和元素elme(f)）
    $fs.each((i,f)=>{
        offsetTop=$(f).offset().top;
        //判断当前楼层是否过线
        if(innerHeight/2.5+scrollTop>offsetTop){
          $divLift
              .children(`:eq(${i})`)
              .addClass("btn-secondary")
              .siblings()
              .removeClass("btn-secondary");
        }
    });
  });
  //点击电梯按钮跳转
  $divLift.on("click","button",function(){
    //点击获得的第几个按钮
    var i=$(this).index();
    var offsetTop=$(`#index>h3:nth-child(2)>div:eq(${i})`).offset().top;
    //让页面滚动到和楼层距body顶部总距离相同的位置
    $("html").animate({
      scrollTop:offsetTop
    },300);
  })

});