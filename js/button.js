$(document).ready(function() {
	//to-top
	$(".to-top-btn").click(function() {
		$('body').animate({
			scrollTop: 0
		}, 200);
		//		 $('body').scrollTop(0,0);
	})

	//滚动一定距离后显示to-top-btn
	window.onscroll = function() {
		var $scrolltop = $("body").scrollTop();
		if($scrolltop > 800) {
			$(".to-top-btn").show();
		} else {
			$(".to-top-btn").hide();
		}
	}
	
	//.connect-btn
	$(".help-entry").mouseover(function(){
		$(this).find(".connect-panel").css("visibility","visible");
		$(this).find(".connect-panel").css("bottom","59px");
		$(this).find(".connect-panel").css("opacity","1");
		$(this).find(".panel-content").css("opacity","1");
		
		
		
	})
	$(".help-entry").mouseout(function(){
		$(this).find(".connect-panel").css("visibility","hidden");
		$(this).find(".connect-panel").css("bottom","49px");
		$(this).find(".connect-panel").css("opacity","0");
		$(this).find(".panel-content").css("opacity","0");
	})
	
	//点击叉号关闭connect-panel
	$(".panel-close").click(function(){
		$(".connect-panel").css("visibility","hidden");
	})
})