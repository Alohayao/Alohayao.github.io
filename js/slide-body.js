//向右滚动
$(function() {
	var slideContent = $(".slide-content");
	var itemWidth = slideContent.find("li").eq(0).width();
	
	$(".slide-btn-panel.right-btn").click(function() {
		var slideContentLeft = slideContent.position().left;
		var currentItem = Math.abs(slideContentLeft) / itemWidth + 1;
//		if(currentItem == 12) 
		if(slideContentLeft <= -2959){
			$(this).siblings(".slide-content").css("left", "0px");
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '-=269px'
			}, 350);
		} else {
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '-=269px'
			}, 350);
		}

	})

	//向左滚动
	$(".slide-btn-panel.left-btn").click(function() {
		var slideContentLeft = slideContent.position().left;
		var currentItem = Math.abs(slideContentLeft) / itemWidth + 1;
//		if(currentItem == 1) 
		if(slideContentLeft >= 0) {
			$(this).siblings(".slide-content").css("left", "-2959px");
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '+=269px'
			}, 1000);
		} else {
			$(this).siblings(".slide-content").stop(true,true).animate({
				left: '+=269px'
			}, 1000);
		}

	})
})