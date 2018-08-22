//向右滚动
$(".slide-btn-panel.right-btn").click(function(){
	var slideContent = $(".slide-content");
	var slideContentLeft = slideContent.position().left;
	var itemWidth = $(slideContent.find("li")[0]).width();
	var currentItem = Math.abs(slideContentLeft)/itemWidth + 1;
	if(currentItem == 12) {
		$(this).siblings(".slide-content").css("left","0px");
		$(this).siblings(".slide-content").animate({left:'-=269px'},350);
	} else {
		$(this).siblings(".slide-content").animate({left:'-=269px'},350);
	}

})

//向左滚动
$(".slide-btn-panel.left-btn").click(function(){
	var slideContent = $(".slide-content");
	var slideContentLeft = slideContent.position().left;
	var itemWidth = $(slideContent.find("li")[0]).width();
	var currentItem = Math.abs(slideContentLeft)/itemWidth + 1;
	if(currentItem == 1) {
		$(this).siblings(".slide-content").css("left","-2959px"); 
		$(this).siblings(".slide-content").animate({left:'+=269px'},1000);
	} else{
		$(this).siblings(".slide-content").animate({left:'+=269px'},1000);
	}

})