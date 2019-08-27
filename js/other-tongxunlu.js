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
	$(".tongxunlu-data").height($(window).height()-$(".tongxunlu-operationBtn").outerHeight());
	$(".tongxunlu-data-right").width($(window).width()-$(".tongxunlu-data-left").outerWidth());
	$(".tongxunlu-data-right-body").height($(window).height()-$(".tongxunlu-operationBtn").outerHeight()-$(".tongxunlu-data-right-head").outerHeight());
}


