$(function(){
	
	/*勾选*/
	$(".xw_gouselect").click(function(){
		$(this).toggleClass("gouselected");	
		$(this).parents('tr').toggleClass("trselected");	
	})
	
	/*蓝色勾选*/
	$(".notebook-data li").mouseenter(function(){
		$(".notebook-data li").removeClass("noteItemHover");	
		$(this).addClass("noteItemHover");	
	})
	$(".notebook-data li").mouseleave(function(){
		$(this).removeClass("noteItemHover");	
	})
	$(".xw_BlueBgGouSelect").click(function(){
		var BlueBgGouSelect= $(this).attr("rel");
		if(BlueBgGouSelect==0){
			$(this).parents("li").addClass("noteItemSelected");
			$(this).addClass("notebook-data-item-gou");
			$(this).attr("rel","1");
		}
		else{
			$(this).parents("li").removeClass("noteItemSelected");	
			$(this).removeClass("notebook-data-item-gou");
			$(this).attr("rel","0");
		}
	})
	
	/*右侧蓝色勾选*/
	$(".xw_rightgouselect li").click(function(){
		$(this).parents(".xw_rightgouselect").find("li").removeClass("rightgouselect");
		$(this).addClass("rightgouselect");
	})
	
})
