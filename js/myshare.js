$(function(){
	
	$("ul.fileName-sharepicture").each(function(index) {
		var picturenum = $(this).find("li").length;
        if(picturenum > 1){
			$(this).find("li").css({"width":"48%","margin-right":"2%"});
			$(this).find("li.andSoOn").css({"width":"100%"});
		}
    });
	
	/*评论*/
	$(".xw-comment").click(function(){
		$(this).parents(".sharingData-item").find(".sharingData-item-comment").slideToggle();	
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
	
}


