$(".header-link").mouseenter(function() {
	if(this.t) {
		clearInterval(this.t);
	}

	var backImg = $(this).find(".ali-product-img");
	var posY = backImg.css("background-position-y");
	var steps = (4425 - Math.abs(parseInt(posY))) / 75;
	var step = 0;
	var speed = 1000 / 60;

	var self = this;
	function playFoward() {

		backImg.css("background-position-y", "-=75px");
		step++;
		var nowPosY = backImg.css("background-position-y");
		console.log("mouseenter", nowPosY, step);
		if(step == steps) {
			clearInterval(self.x);
		}
	}

	var x = setInterval(playFoward, speed);
	this.x = x;

})

$(".header-link").mouseleave(function() {
	if (this.x) {
		clearInterval(this.x);
	}

	var backImg = $(this).find(".ali-product-img");
	var posY = backImg.css("background-position-y");
	var steps = Math.abs(parseInt(posY)) / 75;
	var step = 0;
	var speed = 1000 / 60;
	
	var self = this;
	function playBackward() {

		backImg.css("background-position-y", "+=75px");
		step++;
		var nowPosY = backImg.css("background-position-y");
		console.log("mouseleave", nowPosY, step);
		if(step == steps) {
			clearInterval(self.t);
		}
	}

	var t = setInterval(playBackward, speed);
	this.t = t;
})