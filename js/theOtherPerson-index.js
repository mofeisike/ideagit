$(function(){
	
	/*框架默认显示页面*/
	var $frame = $(".theOtherPersonMainFrame");
	$frame.attr("src", 'theOtherPerson-myshare.html');

	var otherTabIndex = getUrlParam("otherTab");
	
	/*左菜单加载-主页*/
	var theOtherPersonNav = [
		{classname:"leftnav-myshare",leftnavname:"ta的分享",pageurl:'theOtherPerson-myshare.html'},
		{classname:"leftnav-mind",leftnavname:"ta的订阅",leftnavkindnum:10, pageurl:'theOtherPerson-dingyue.html'},
		{classname:"leftnav-fans",leftnavname:"ta的粉丝",leftnavkindnum:7, pageurl:'theOtherPerson-myfans.html'},
	];
	
	var classList = {
		 "theOtherPersonNav" : theOtherPersonNav
	};
	
	 
	/*左菜单加载*/
	function apepndList(leftnav) {
		var list = [];
		for (var i = 0; i < leftnav.length; i++) {
			var $li = '<li class="' + leftnav[i].classname + '" pageurl="'+ leftnav[i].pageurl +'">';
			$li  += '<a';
			if ( i == 0) {
				$li += ' class = "leftnav-selected"';
			} 
			$li += '>' + leftnav[i].leftnavname + '';
			if (leftnav[i].hasOwnProperty("leftnavkindnum")) {
				$li += '<i class="leftnav-kindnum">' + leftnav[i].leftnavkindnum + '</i>';
		     }
			 $li += '</a></li>';
			list.push($li);
		}
		$(".layout-leftnav-ul").append(list.join(""));
		if (!!otherTabIndex) {
			$(".layout-leftnav-ul li a").removeClass("leftnav-selected");
			$(".layout-leftnav-ul li a:eq("+otherTabIndex+")").addClass("leftnav-selected");
			$frame.attr("src", leftnav[otherTabIndex].pageurl);
		} else {
			$frame.attr("src", leftnav[0].pageurl);
		}
		
	 }
	
	apepndList(classList.theOtherPersonNav);

	
	/*左菜单路径跳转*/
	$(".layout-leftnav-ul li").live('click', function(){
		 var pageUrl = $(this).attr('pageurl');
		 $frame.attr("src", pageUrl);
		 $(this).parents(".xw_layout-leftnav").find("a").removeClass("leftnav-selected");
		 $(this).find("a").addClass("leftnav-selected");
	});
	
	
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
	$("div.layout-leftnav").height($(window).height());
	$(".theOtherPersonMainFrame").height($(window).height());
	$(".theOtherPersonMainFrame").width($(window).width()-$("div.layout-leftnav").width());
}

/*传参跳转tab页指定页面*/
function getUrlParam (name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(decodeURI(r[2]));
	}
	return null;
}



