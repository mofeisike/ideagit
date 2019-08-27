$(function(){
	
	$(".xw_headnav").click(function(){
		var index = $(".xw_headnav").index(this);
		var list = [];
		switch(index) {
			case 3 :
				break;
			default : 
			    window.location = 'index.html?tab=' + index;
				break;	    
		}
	});
	
	/*分享返回按钮事件*/
	$(".xw_GoBack").click(function(){
		$(this).parents(".sharebox-right").hide();
		$(".sharebox-chatbox").show();	
	})
	
	/*聊天窗口跳转朋友列表事件*/
	$(".xw_friendbox").click(function(){
		$(this).parents(".sharebox-right").hide();
		$(".sharebox-friendbox").show();	
	})
	
	/*聊天窗口跳转文件库事件*/
	$(".xw_filebox").click(function(){
		$(this).parents(".sharebox-right").hide();
		$(".sharebox-filebox").show();	
	})
	
	$(".xw_otherSmallNas_notice").click(function(){
		 window.location = 'index.html?tab=0&showNotify=1';
	})
	
	/*客户端二维码下拉*/
	$(".xw_scancode").click(function(){
		$(".scancode").slideDown().mouseleave(function(){$(".scancode").fadeOut()});
	})
	$(".xw_scancode").mouseleave(function(){
		$(".scancode").fadeOut()
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
	$(".sharebox").height($(window).height()-$(".layout-head").height()-20);
	$(".xw-sharebox-left-middle").height($(".sharebox-left").height()-$(".xw-sharebox-left-top").height()-$(".xw-sharebox-left-bottom").height());
	$(".xw-sharebox-right-middle").each(function(index) {
		var height = $(".sharebox-right").height()-$(".xw-sharebox-right-top").height() - 20;
        if (index == 0) {
			 height = height - $(".xw-sharebox-right-bottom").height();
		}
		$(this).height(height);
    });
	$(".wangpan-fileList-table-tbody-div").height($(".xw-sharebox-right-middle").height()-$(".wangpan-fileList-table-thead-div").height());
}


