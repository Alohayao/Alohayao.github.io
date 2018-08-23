$(function() {
	$(".header-link").mouseenter(function() {
		if(this.backward || this.forward) {
			clearInterval(this.backward);
			clearInterval(this.forward);
		}
	
		var backImg = $(this).find(".ali-product-img");
		var posY = backImg.css("background-position-y");
		var steps = (4425 - Math.abs(parseInt(posY))) / 75;
		var step = 0;
		var speed = 1000 / 60;
	
		var self = this;
	
		function playForward() {
			backImg.css("background-position-y", "-=75px");
			step++;
			var nowPosY = backImg.css("background-position-y");
			console.log("mouseenter", nowPosY, `step:${step}`, `steps:${steps}`, step >= steps, self.forward);
			if(step >= steps) {
				clearInterval(self.forward);
				console.log('stopA', step >= steps, self.forward);
			}
		}
		var forward = setInterval(playForward, speed);
		this.forward = forward;
	});
	
	$(".header-link").mouseleave(function() {
		if(this.backward || this.forward) {
			clearInterval(this.backward);
			clearInterval(this.forward);
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
			console.log("mouseleave", nowPosY, `step:${step}`, `steps:${steps}`, step >= steps, self.backward);
			if(step >= steps) {
				clearInterval(self.backward);
				console.log('stopB', step >= steps, self.backward);
			}
		}
	
		var backward = setInterval(playBackward, speed);
		this.backward = backward;
	});
})


//$(".header-link").mouseenter(function() {
//	if(this.t) {
//		clearInterval(this.t);
//	}
//
//	var backImg = $(this).find(".ali-product-img");
//	var posY = backImg.css("background-position-y");
//	var steps = (4425 - Math.abs(parseInt(posY))) / 75;
//	var step = 0;
//	var speed = 1000 / 60;
//
//	var self = this;
//	function playForward() {
//		backImg.css("background-position-y", "-=75px");
//		step++;
//		var nowPosY = backImg.css("background-position-y");
//		console.log("mouseenter", nowPosY, step, step >= steps, self.forward);
//		if(step >= steps) {
//			clearInterval(self.forward);
//			console.log('stopA', step >= steps, self.forward);
//		}
//	}
//	var forward = setInterval(playForward, speed);
//	this.forward = forward;
//})
//
//$(".header-link").mouseleave(function() {
//	if (this.forward) {
//		clearInterval(this.forward);
//	}
//
//	var backImg = $(this).find(".ali-product-img");
//	var posY = backImg.css("background-position-y");
//	var steps = Math.abs(parseInt(posY)) / 75;
//	var step = 0;
//	var speed = 1000 / 60;
//	
//	var self = this;
//	function playBackward() {
//		backImg.css("background-position-y", "+=75px");
//		step++;
//		var nowPosY = backImg.css("background-position-y");
//		console.log("mouseleave", nowPosY, step, step >= steps, self.backward);
//		if(step >= steps) {
//			clearInterval(self.backward);
//			console.log('stopB', step >= steps, self.backward);
//		}
//	}
//
//	var backward = setInterval(playBackward, speed);
//	this.backward = backward;
//})