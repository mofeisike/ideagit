$(function(){
	
	/*框架默认显示页面*/
	var $frame = $(".mainFrame");
	$frame.attr("src", 'home.html');
	
	var tabIndex = getUrlParam("tab");
	var showNotify = getUrlParam("showNotify");
	
	
	/*左菜单加载-主页*/
	var homenav = [
		{classname:"leftnav-sharing",leftnavname:"分享动态", pageurl:'home.html'},
		{classname:"leftnav-myshare",leftnavname:"我的分享",pageurl:'myshare.html'},
		{classname:"leftnav-mind",leftnavname:"订阅",leftnavkindnum:10, pageurl:'home-dingyue.html'},
		{classname:"leftnav-fans",leftnavname:"粉丝",leftnavkindnum:7, pageurl:'home-myfans.html'},
		{classname:"leftnav-notice",leftnavname:"通知",leftnavkindnum:4, pageurl:'home-notice.html'}
	];
	
	/*左菜单加载-网盘*/
	var wangpannav = [
		{classname:"leftnav-allfiles",leftnavname:"全部文件", pageurl:'wangpan.html'},
		{classname:"leftnav-file",leftnavname:"文档", pageurl:'wangpan.html'},
		{classname:"leftnav-picture",leftnavname:"图片", pageurl:'wangpan.html'},
		{classname:"leftnav-video",leftnavname:"视频", pageurl:'wangpan.html'},
		{classname:"leftnav-music",leftnavname:"音乐", pageurl:'wangpan.html'},
		{classname:"leftnav-otherfiles",leftnavname:"其他", pageurl:'wangpan.html'}
	];
	
	/*左菜单加载-网络相册*/
	var wanetworkpicturenav = [
		{classname:"leftnav-personalpic",leftnavname:"个人图片", pageurl:'networkalbum.html'},
		{classname:"leftnav-cloudpic",leftnavname:"网盘图片", pageurl:'networkalbum.html'}
	];
	
	/*左菜单加载-其他*/
	var othernav = [
		{classname:"leftnav-tongxunlu",leftnavname:"通讯录",pageurl:'other-tongxunlu.html'},
		{classname:"leftnav-tonghua",leftnavname:"通话记录",pageurl:'other-tonghua.html'},
		{classname:"leftnav-message",leftnavname:"短信",pageurl:'other-message.html'},
		{classname:"leftnav-topic",leftnavname:"文章",pageurl:'other-topic.html'},
		{classname:"leftnav-notebook",leftnavname:"记事本",pageurl:'other-notebook.html'},
		{classname:"leftnav-mobilefind",leftnavname:"手机找回",pageurl:'other-mobilefind.html'}
	];
	
	var classList = {
		 "homenav" : homenav, 
		 "wangpannav": wangpannav,
		 "wanetworkpicturenav":wanetworkpicturenav,
		 "othernav": othernav
	};
	
	function showData(index){
	  var list = [];
		switch(index) {
			case 0 :
                list = 	classList.homenav;		    
			    break;
			case 1 :
			    list = 	classList.wangpannav;
				break;
			case 2 :
				list = 	classList.wanetworkpicturenav;
				break;
			case 3 :
			    window.location = 'share.html';
				break;
			case 4 :
			    list = 	classList.othernav;
				break;
			default : 
				break;	    
		}
		$(".layout-leftnav-ul").empty();
		if(list.length > 0) {
			apepndList(list);
		}
     }
	
	/*左菜单加载*/
	function apepndList(leftnav) {
		var list = [];
		for (var i = 0; i < leftnav.length; i++) {
			var $li = '<li class="' + leftnav[i].classname + '" pageurl="'+ leftnav[i].pageurl +'">';
			$li  += '<a';
			if ( i == 0 && showNotify != 1) {
				$li += ' class = "leftnav-selected"';
			} 
			if (i == leftnav.length - 1 && showNotify == 1){
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
		if (showNotify == 1) {
			$frame.attr("src", leftnav[leftnav.length - 1].pageurl);
		} else {
			$frame.attr("src", leftnav[0].pageurl);
		}
		showNotify = 0;
	 }
	
	$(".layout-leftnav-ul").empty();
	if (tabIndex) {
		$(".head-headnav-ul li a").removeClass("headnav-selected");
		$(".head-headnav-ul li a").eq(Number(tabIndex)).addClass("headnav-selected");
	   	showData(Number(tabIndex));
	} else {
	   	apepndList(classList.homenav);
	}

	$(".xw_headnav").click(function(){
		var index = $(".xw_headnav").index(this);
		showData(index);
	});
	
	/*左菜单路径跳转*/
	$(".layout-leftnav-ul li").live('click', function(){
		 var pageUrl = $(this).attr('pageurl');
		 $frame.attr("src", pageUrl);
		 $(this).parents(".xw_layout-leftnav").find("a").removeClass("leftnav-selected");
		 $(this).find("a").addClass("leftnav-selected");
	});
	
	/*头部菜单选中样式*/
	$(".xw_headnav").click(function(){
		$(this).parents(".head-headnav-ul").find("a").removeClass("headnav-selected");
		$(this).addClass("headnav-selected");	
	})
	
	/*通知跳转*/
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
	$("div.layout-leftnav").height($(window).height()-$("div.layout-head").height()-1/*菜单上边框*/-20/*菜单上下内边距*/);
	$(".mainFrame").height($(window).height()-$("div.layout-head").height());
	$(".mainFrame").width($(window).width()-$("div.layout-leftnav").width());
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


/*弹窗*/
function openlayerWindow(param) {
	layer.open(param); 
}


