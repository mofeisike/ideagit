$(function(){
	
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
	$(".noticelist-body").height($(window).height()-($(".notice-filter").outerHeight()+40)/*筛选部分内边距*/-$(".noticelist-head").outerHeight());
}


