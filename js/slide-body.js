
$(function() {
	var slideContent = $(".slide-content");
	var lis = slideContent.children('li');
	var itemWidth = slideContent.find("li").eq(0).width();
	//当前第一幅图序号
	var i = 6;
	
	//向右滚动
	$(".slide-btn-panel.right-btn").click(function() {
		i++;
		//共十六幅图， 到12图时切换到第一张
		if(i == 12){
//			$(this).siblings(".slide-content").css("left", "0px");
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '0px'
			}, 350);
			i = 1;
		}
		$(this).siblings(".slide-content").stop(true,true).animate({
			left: '-=269px'
		}, 350);
	})

	//向左滚动
	$(".slide-btn-panel.left-btn").click(function() {
		i--;
		if(i == 0){
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '-2959px'
			}, 350);
			i = 11;
		} 
		$(this).siblings(".slide-content").stop(true,true).animate({
			left: '+=269px'
		}, 350);
	})
})