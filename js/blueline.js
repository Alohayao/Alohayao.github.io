//var ul = document.getElementsByClassName("index-menu");
//var lis = ul[0].getElementsByTagName("li");
//var line = document.getElementsByClassName("line");
//
//for (var i = 0; i<lis.length; i++) {
//	lis[i].onmouseover = function () {
//		line[0].style.width = this.offsetWidth + "px";
//		line[0].style.left = this.offsetLeft + "px";
//	}
//	
//	lis[i].onmouseout = function () {
//		line[0].style.width = 0 + "px";
//	}
//}

$(function() {
	var $menu = $('.index-menu');
	var $line = $('.line')
	var $lis = $menu.find('li');
	$lis.each(function () {
		$(this).hover(function () {
			var liWidth = $(this).outerWidth();
			var liLeft = $(this).position().left;
			$line.width(liWidth);
			$line.css('left', liLeft + 'px') ;
		}, function () {
			$line.width(0);
			$line.css('left', 0 + 'px') ;
		})
	})
})
