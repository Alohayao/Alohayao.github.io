(function () {
	var promoteA = $(".promote-box").children("a");
	var lis = $(".carousel-banner").find("li");
	var i = 0;
	//显示第一个
	lis.eq(0).trigger('click');
	change();

	function change() {
		promoteA.each(function() {
			promoteA.eq(i).fadeIn();
			lis.eq(i).addClass('active');
			promoteA.eq(i).siblings().fadeOut();
			lis.eq(i).siblings().removeClass('active');
		})
		i++;
		if(i == lis.length) {
			i = 0;
		}
	}
	var t = setInterval(change, 3000);

	lis.click(function() {
		i = $(this).index();
		clearInterval(t);
		change();
	})

})();