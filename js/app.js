oi_oi = function(){
	return {
		sliderResize:function(){
			var q = 3.6750700280112043 // 550 px height img
			var sHeadW = $('.slide-head').width();
			var sSeeW = $('.see-detail').width();
			var w = window.innerWidth;
			var wCenter = $('header .container').width()/2;
			
			$('.slide-head').css('left',w/2-wCenter+'px');
			$('.see-detail').css('left',w/2-wCenter+'px');
			$('.swiper-container').height(window.innerWidth/q);	
		},
		miniSliderResize:function(){
			var count = 4;
			if(window.innerWidth<=960)
				count = 3;
			if(window.innerWidth<=720)
				count = 2;
			if(window.innerWidth<=480)
				count = 1;
		
			$('.slider-mini').slick({
			  slidesToShow: count,
			});
		}
	}
}
window.onresize = function(){
	oi_oi().sliderResize();
};

$(document).ready(function(){
	oi_oi().sliderResize();
	oi_oi().miniSliderResize();
});
