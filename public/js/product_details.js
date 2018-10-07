$(function(){
  /* window.onload比 $(function(){}) 加载的更晚一些，这样那些宽度的计算在Chrome中就可以准确计算了*/
  window.onload = function(){

    /*计算一个segment的宽度*/

    var segmentWidth = 0;
    $("#container #content li").each(function(){
      segmentWidth+= $(this).outerWidth(true);
    });

    $("#container #content li").clone().appendTo($("#container #content"));

    run(9000);

    function run(interval){
      $("#container #content").animate({"left":-segmentWidth}, interval,"linear",function(){
        $("#container #content").css("left",0);
        run(9000);
      });
    }

    $("#container").mouseenter(function(){
      $("#container #content").stop();
    }).mouseleave(function(){
      var passedCourse = -parseInt($("#container #content").css("left"));
      var time = 9000 * (1 - passedCourse/segmentWidth);
      run(time);
    });
  };
  /*1. 先通过each遍历所有的li元素，计算出它们宽度之和。
    2. 拷贝一份图片到现有图片的后面，原理分析图的"图一"所示。

    3. 设置6秒钟滚动完界面上面现有的图片，滚动完毕后，通过设置content的left值，将其整体拉回到初始状态，原理分析图的"图二"所示。然后递归调用run方法，完成无限滚动。

  4. 当鼠标经过滚动区域的时候，动画立刻停止; 当鼠标离开的时候，动画继续执行。*/

  var lid=location.search.split("=")[1];
  $.ajax({
    url:"http://localhost:3000/details",
    type:"get",
    data:{lid},
    dataType:"json"
  })
  .then(res=>{
    var {product,pics}=res;
    var {title,num,price,spec,space,height,weight,xiedi,color,xiegen,neili,close,sheji}=product;
    var html=`<div class="info">
    <h5 class="font-weight-bold">
      ${title}
    </h5>
    <h6 class="py-2">${num}</h6>
    <div>
      <strong id="price">￥${price.toFixed(2)}</strong>
    </div>
  </div>`;
    var divDetails=document.getElementById("details");
    divDetails.innerHTML=html+divDetails.innerHTML;

    var html=`
    <div class="title">
    详细信息
  </div>
  <div class="content pl-4">
    <div class="row">
      <div class="col-xs-6 col-md-5">皮质特征</div>
      <div class="col-xs-6 col-md-7">${spec}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">适合场所</div>
      <div class="col-xs-6 col-md-7">${space}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">跟高</div>
      <div class="col-xs-6 col-md-7">${height}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">毛重（g）</div>
      <div class="col-xs-6 col-md-7">${weight}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">鞋底材质</div>
      <div class="col-xs-6 col-md-7">${xiedi}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">COLOUR</div>
      <div class="col-xs-6 col-md-7">${color}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">鞋跟形状</div>
      <div class="col-xs-6 col-md-7">${xiegen}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">内里特质</div>
      <div class="col-xs-6 col-md-7">${neili}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">闭合方式</div>
      <div class="col-xs-6 col-md-7">${close}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-5">款型设计</div>
      <div class="col-xs-6 col-md-7">${sheji}</div>
    </div>
  </div>
    `;
    $("#parameter").html(html);

    var html="";
    for(var {sm,md,lg} of pics){  //循环小图数量，换图片
      html+=`<li class="p-1">
      <img src="${sm}" data-md="${md}" data-lg="${lg}">
    </li>`;
    }
    var ulImgs=document.querySelector("#bigLg>div>ul")
    ulImgs.innerHTML=html;
    //中间的图片更换
    var mImg=document.querySelector("#preview>img");
    mImg.src=pics[0].md;
    //先默认一张放大镜图片
    var divLg=document.getElementById("div-lg");
    divLg.style.backgroundImage=`url(${pics[0].lg})`; 

    //当鼠标移入小图
    ulImgs.onmouseover=function(e){ 
      if(e.target.nodeName=="IMG"){
        var img=e.target;
        mImg.src=img.dataset.md;  //中间图片切换
        divLg.style.backgroundImage=`url(${img.dataset.lg})`; //放大镜图片切换
      }
    }

    //当鼠标进入sMask的范围内时
    var mask=document.getElementById("mask");  //焦点框
    var sMask=document.getElementById("super-mask");
    //鼠标移动到图片上出现两个事件：1.焦点框出现 2.大图框要显示出来
    sMask.onmouseover=function(){  //放大镜和小框出现
      mask.className=mask.className.replace("d-none","");
      divLg.className=divLg.className.replace("d-none","");
    }
    //鼠标移动的事件
    sMask.onmousemove=function(e){  
      var {offsetX,offsetY}=e;
      var top=offsetY-90;
      var left=offsetX-90;
      top=top<0?0:top>220?220:top;
      left=left<0?0:left>220?220:left;
      mask.style.top=`${top}px`;
      mask.style.left=`${left}px`;
      divLg.style.backgroundPosition=`${-19/15*left}px ${-19/15*top}px`;
    }
    //鼠标移除后图片上取消这两个事件：1.焦点框 2.大图框
    sMask.onmouseout=function(){
      mask.className+=" d-none";
      divLg.className+=" d-none";
    }

    //加入购物车
    $("#cart").click(function(e){
      e.preventDefault();
      alert("添加购物车成功");
    })

  })

});