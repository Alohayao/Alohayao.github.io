$(document).ready(function() {
	$(".fa-search").click(function() {
		var search = $(".topbar_search input");
		search.toggleClass("active");
		$(".topbar_search input").focus();
		$(".topbar_search").toggleClass("active");
	})
})

$(document).ready(function(){
	$(".topbar_search input").blur(function(){
		$(".topbar_search input").removeClass("active");
		$(".topbar_search").removeClass("active");
	})
})