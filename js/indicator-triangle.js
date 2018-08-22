$(".ali-product>ul>li").click(function() {
	//切换icon的背景图片
	var index = $(this).index();
	var lis = $(this).closest(".ali-product").find("li");
	$(lis).each(function() {
		var i = $(this).index();

		if(i == index) {
			$(this).addClass("active");
			$(this).find(".ali-product-icon").addClass("active");
		} else {
			$(this).removeClass("active");
			$(this).find(".ali-product-icon").removeClass("active");
		}
	})



	//指示三角的位置
	var $liLeft = $(this).position().left;
	var $indicatorElmt = $(this).parent().children(".indicator-triangle");
	var indicatorLocation = $liLeft + $(this).outerWidth() / 2 - $indicatorElmt.outerWidth() / 2;
	$indicatorElmt.css("left", indicatorLocation);
	
	
	//切换ali-product
//	var j = $(this).parents(".ali-product").index();
//	$(".ali-product").each(function() {
//		var index = $(this).index();
//		if(index == j) {
//			$(this).addClass("active");
//			$(this).find(".indicator-triangle").addClass("active");
//		} else{
//			$(this).removeClass("active");
//			$(this).find(".ali-product-content").removeClass("active");
//			$(this).find(".ali-product-icon").removeClass("active");
//		}
//	})


//切换ali-product 
// 显示父元素效果
		$(this).closest(".ali-product").addClass("active");
		$(this).closest(".ali-product").find(".ali-product-content-container").addClass("active");
		$(this).closest(".ali-product").find(".ali-product-content-container").show();
		$(this).closest(".ali-product").find(".indicator-triangle").addClass("active");
  
  // 隐藏所有兄弟元素
		var $hideTable = $(this).closest(".ali-product").siblings(".ali-product");
		$hideTable.find(".ali-product-content-container").hide();
		$hideTable.find(".ali-product-content").hide();
		$hideTable.find(".ali-product-content").removeClass("active");
		
		$hideTable.find("li").removeClass("active");
		$hideTable.find(".ali-product-icon").removeClass("active");
		$hideTable.find(".indicator-triangle").removeClass("active");
		$hideTable.find(".ali-product-content-container").removeClass("active");
		$hideTable.removeClass("active");
		
		
		
  
	

	//切换ali-product-content
	var divs = $(this).parents(".ali-product").find(".ali-product-content");
	$(divs).each(function() {
		var i = $(this).index();
		if(i == index) {
			$(this).addClass("active");
			$(this).fadeIn();
		} else {
			$(this).hide();
			$(this).removeClass("active");
		}
	})
	
	
})
//默认选中第一个
$(".project").find(".ali-product").first().find("li").first().click();


