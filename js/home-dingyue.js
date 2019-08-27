$(function(){
	
	$(".xw_dingyue-btn").mouseenter(function(){
		$(this).find("a").html("取消订阅");
		$(this).find("a").css({"background":"url(images/cancelmind.png) 6px center no-repeat"});
	})
	$(".xw_dingyue-btn").mouseleave(function(){
		$(this).find("a").html("已订阅");
		$(this).find("a").css({"background":"url(images/hadmind.png) 8px center no-repeat"});
	})
	
	/*参数跳转到个人中心*/
	$(".xw-theOtherPersonShare").click(function(){
		 window.open('theOtherPerson-index.html?otherTab=0');
	})	
	$(".xw-theOtherPersonDingyue").click(function(){
		 window.open('theOtherPerson-index.html?otherTab=1');
	})
	$(".xw-theOtherPersonFans").click(function(){
		 window.open('theOtherPerson-index.html?otherTab=2');
	})	
	
})


