$(function(){
	
	$(".xw_management").click(function(){
		  var management = parseInt($(this).attr('rel'));
          if(management == 0){
			   $(".Batch-management").show();
               $(this).html("完成管理");
               $(this).css({"background":"#83dd0f","color":"#fff"});
			   $(".cover span.gouselect").show();
               $(this).attr("rel","1");
          }else{
               $(".Batch-management").hide();
               $(this).html("批量管理");
               $(this).css({"background":"#fff","color":"#666"});
			   $(".cover span.gouselect").hide();
               $(this).attr("rel","0");
          }  
	})
	
	/*浏览器窗口重置事件*/
	setsubpageHei();
	$(window).bind("resize",resizebind);
})

/*浏览器窗口重置事件*/
function resizebind(){
     setsubpageHei();    
}

/*浏览器窗口高度*/
function setsubpageHei(){
	$(".networkpicture-downpart").height($(window).height()-$(".wangpan-top-btn").height());
}


