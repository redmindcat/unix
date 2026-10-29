

function moRbtnbox(){
}

$(document).ready(function() {
	var wWidth = $(window).width();

	$(".header .addbtn").click(function(){
		//console.log("click");
		if ($(this).hasClass("open")){
			$(this).removeClass("open");

			$(".header .rightbtn .instar").removeClass("ani").addClass("ani2");	
			setTimeout(function(){			
				$(".header .rightbtn .utb").removeClass("ani").addClass("ani2");
				setTimeout(function(){			
					$(".header .rightbtn").removeClass("on");		
					$(".header .rightbtn .utb").removeClass("ani2");
					$(".header .rightbtn .instar").removeClass("ani2");
				}, 300);
			}, 300);
		} else {
			$(this).addClass("open");

			$(".header .rightbtn").addClass("on");
			$(".header .rightbtn .utb").addClass("ani");					
			setTimeout(function(){	
				$(".header .rightbtn .instar").addClass("ani");
			}, 300);
		}
	});

	$(".openmenu").click(function(){
		$(".menu").addClass("on");
		$(".header").addClass("on");

		$('.container').on('scroll touchmove mousewheel', function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  return false;
		});
	});
	$(".menu .closebtn").click(function(){
		$(".menu").removeClass("on");
		$(".header").removeClass("on");
		$('.container').off('scroll touchmove mousewheel');
	});
	$(".header .blackbg").click(function(){
		$(".menu").removeClass("on");
		$(".header").removeClass("on");
		$('.container').off('scroll touchmove mousewheel');
	});


	$(window).scroll(function(){
		if ($(window).scrollTop() > 0){			
			if ($(".container").hasClass("product_sub")){
				$(".header").addClass("bg");
			} else if ($(".container").hasClass("product")){
				return false;
			} else {
				$(".header").addClass("black");
			}	
		} else if ($(window).scrollTop() < 1){
			if ($(".container").hasClass("product_sub")){
				$(".header").removeClass("bg");
			} else if ($(".container").hasClass("product")){
				return false;
			} else {
				$(".header").removeClass("black");
			}	
		}
	});	

	$(window).on('resize',function(){
		if (wWidth > 799){
			$(".header .rightbtn").removeClass("on");
			$(".header .addbtn").removeClass("open");
			$(".header .rightbtn .instar,.header .rightbtn .utb").removeClass("ani");

			$(".menu").removeClass("on");
			$(".header").removeClass("on");
			$('.container').off('scroll touchmove mousewheel');
		}			
	});
});