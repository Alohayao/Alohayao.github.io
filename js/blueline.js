var ul = document.getElementsByClassName("index-menu");
var lis = ul[0].getElementsByTagName("li");
var line = document.getElementsByClassName("line");

for (var i = 0; i<lis.length; i++) {
	lis[i].onmouseover = function () {
		line[0].style.width = this.offsetWidth + "px";
		line[0].style.left = this.offsetLeft + "px";
	}
	
	lis[i].onmouseout = function () {
		line[0].style.width = 0 + "px";
	}
}
