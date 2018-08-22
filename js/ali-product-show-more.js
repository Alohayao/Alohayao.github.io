$(document).ready(function() {
	$(".ali-product-show-more").click(function() {

		//		var $more = $(".ali-product-more");
		//		var display = $more.css("display");
		//		if(display == "none") {
		//			$(".ali-product-show-more").text("收起");
		//		}else {
		//			$(".ali-product-show-more").text("查看全部");
		//		}
		//		$(".ali-product-more").slideToggle();

		//		$(selector).animate({params},speed,callback);
				var $more = $(".ali-product-more");
				var display = $more.css("display");
				if(display == "none") {
					$more.animate({height:"toggle"}, 1000, function(){
						$(".ali-product-show-more").text("收起");
					});
				} else {
					$more.animate({height:"toggle"}, 1000, function(){
						$(".ali-product-show-more").text("查看全部");
					});
				}

//		$("div.ali-product-more:visible").animate({
//			height: "toggle"
//		}, 1000, function() {
//			$(".ali-product-show-more").text("收起");
//		});

		//		{

		//			$(".ali-product-show-more").text("收起");
		//		} else {
		//			$more.slideUp();
		//			$(".ali-product-show-more").text("查看全部");
		//		}

		//		var $more = $(".ali-product-more");
		//		var display = $more.css("display");
		//		if(display == "none") {
		//			$more.slideDown();
		//			$(".ali-product-show-more").text("收起");
		//		} else {
		//			$more.slideUp();
		//			$(".ali-product-show-more").text("查看全部");
		//		}
	})
})