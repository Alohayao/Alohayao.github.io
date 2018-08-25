$(document).ready(function() {
	//to-top
	$(".to-top-btn").click(function() {
		$("html,body").animate({scrollTop:0},"slow");

	})

	//滚动一定距离后显示to-top-btn
	$(window).on('scroll', function() {
		var $scrolltop = $(document).scrollTop();
		if($scrolltop > 800) {
			$(".to-top-btn").show();
		} else {
			$(".to-top-btn").hide();
		}
	})

	//.connect-btn
	$('.help-entry ').hover(function () {
		$('.connect-panel').addClass('active');
	}, function () {
		$('.connect-panel').removeClass('active');
	})

	//点击叉号关闭connect-panel
	$(".panel-close").click(function() {
		$(".connect-panel").removeClass('active');
	})
})