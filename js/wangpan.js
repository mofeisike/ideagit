$(function(){
	
	/*表头排序*/
	$(".tablehead th").click(function(){
		if($(this).find("span.paixuIcon").hasClass("jiangxuIcon")){
			$(".tablehead th").find("span.paixuIcon").removeClass("jiangxuIcon").removeClass("shengxuIcon");
			$(this).find("span.paixuIcon").removeClass("jiangxuIcon").addClass("shengxuIcon");
		}else if($(this).find("span.paixuIcon").hasClass("shengxuIcon")){
			$(".tablehead th").find("span.paixuIcon").removeClass("jiangxuIcon").removeClass("shengxuIcon");
			$(this).find("span.paixuIcon").removeClass("shengxuIcon");
		}else{
			$(".tablehead th").find("span.paixuIcon").removeClass("jiangxuIcon").removeClass("shengxuIcon");
			$(this).find("span.paixuIcon").addClass("jiangxuIcon");
		}
	})
	
	/*列表与块状切换*/
	$(".wangpan-top-rightbtn a").click(function(){
		var rightbtn = $(".wangpan-top-rightbtn a").index(this);
		$(".xw-dataShowKind").hide();
		$(".wangpan-top-rightbtn a").removeClass("aon");
		$(this).addClass("aon");
		$(".xw-dataShowKind").eq(rightbtn).show();
	})
	
	/*列表勾选*/
	$(".xw_gouselect").click(function(){
		$(this).toggleClass("gouselected");	
		$(this).parents('tr').toggleClass("trselected");	
	})
	
	/*块状勾选*/
	$(".wangpan-block-ul li").mouseenter(function(){
		$(".wangpan-block-ul li").removeClass("blockItemHover");	
		$(this).addClass("blockItemHover");	
	})
	$(".wangpan-block-ul li").mouseleave(function(){
		$(this).removeClass("blockItemHover");	
	})
	$(".xw_BlueBgGouSelect").click(function(){
		var BlueBgGouSelect= $(this).attr("rel");
		if(BlueBgGouSelect==0){
			$(this).parents("li").addClass("blockItemSelected");
			$(this).addClass("notebook-data-item-gou");
			$(this).attr("rel","1");
		}
		else{
			$(this).parents("li").removeClass("blockItemSelected");	
			$(this).removeClass("notebook-data-item-gou");
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
	$(".wangpan-fileList-table-tbody-div").height($(window).height()-$(".wangpan-top-btn").height()-$(".wangpan-top-path").height()-$(".wangpan-fileList-table-thead-div").height());
}


