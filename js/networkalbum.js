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
	$(".networkpicture-downpart").height($(window).height()-$(".wangpan-top-btn").height());
}


