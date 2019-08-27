$(function(){
	
	/*弹窗-列表*/
	$('.xw_sharefile').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'分享文档',
			scrollbar: false,
			closeBtn: 2,
			area: ['700px', '500px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openWindow-sharefile.html'
		});
	});
	
	/*弹窗-图片*/
	$('.xw_sharepic').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'分享图片',
			scrollbar: false,
			closeBtn: 2,
			area: ['700px', '500px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openwindow-sharepicture.html'
		});
	});
	
	/*弹窗-新增相册*/
	$('.xw_addalbum').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'新建相册',
			scrollbar: false,
			closeBtn: 2,
			area: ['500px', '200px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openwindow-addalbum.html'
		});
	});
	
	/*弹窗-新增相册*/
	$('.xw_addfolder').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'新建文件夹',
			scrollbar: false,
			closeBtn: 2,
			area: ['500px', '200px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openwindow-addfolder.html'
		});
	});
	
	/*弹窗-新增通信录分组*/
	$('.xw_tongxunlu_addgroup').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'新建分组',
			scrollbar: false,
			closeBtn: 2,
			area: ['500px', '200px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openwindow-tongxunlu-addgroup.html'
		});
	});
	
	/*弹窗-新增笔记本*/
	$('.xw_addnotebook').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'新建笔记本',
			scrollbar: false,
			closeBtn: 2,
			area: ['500px', '200px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openwindow-addnotebook.html'
		});
	});
	
	/*弹窗-新增笔记*/
	$('.xw_addnote').on('click', function(){
		parent.openlayerWindow({
			type: 2,
			title :'新建笔记',
			scrollbar: false,
			closeBtn: 2,
			area: ['800px', '500px'],
			shadeClose: false, //点击遮罩关闭
			content: 'openWindow-addnote.html'
		});
	});

})


