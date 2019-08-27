layer.config({extend: 'extend/layer.ext.js'});

$(function(){
	
	/*弹窗-查看图片*/
	layer.ready(function(){ //为了layer.ext.js加载完毕再执行
		layer.photos({
			photos: '#networkpicture'
		});
	}); 

})
