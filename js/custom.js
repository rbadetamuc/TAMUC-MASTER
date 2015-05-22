/* Add here all your JS customizations */
jQuery(document).ready(function($) {
	checkSize();
	$(window).resize(function(){
   		checkSize();
	});
	$('.b-search-box .fa').click(function(){
		var target = '.b-search-box #searchField';
		$(target).toggle();
		if($(target).is(':visible')){
			$(target).focus();
		}
	});
	var gfeedfetcher_loading_image="js/bxslider/images/bx_loader.gif" 
	$( window ).load(function() {	
		var slider = $('.j-carousel-rss').bxSlider({
				maxSlides:2,
				controls: false,
				slideMargin: 30,
				slideWidth: 568,
				pager: true
		});
		if(slider){
			$('.loadingrss').hide();
			$('.b-carousel-primary__item').show();
			$('.jotform-form').removeClass('hidden');
		}
		
	});
		$(window).scroll(function(){

		if ($(this).scrollTop()+$("#scrollObj").height() < $("#scrollObj").offset().top-100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$(".scrollToTop").click(function(e) {
		e.preventDefault();
    	$('html, body').animate({
        scrollTop: $("#scrollObj").offset().top
    }, 2000);
});
});
function checkSize(){
	if ($(window).width() < BREAK.SM) {
		$('.Parentscroll').show();
		$('.foot-widget-area').hide();
		$('.foot-widget-title .fa').show();
	 // Mobile stuff.
	$('.foot-widget-title').on( "click", function(e) {
		e.preventDefault();
		$(this).next().slideToggle();
		$(this).find('.fa').ToggleClass('');
	});
	}if ($(window).width() > BREAK.SM) {
		$('.Parentscroll').hide();
		$('.foot-widget-area').show();
		$('.foot-widget-title .fa').hide();
		$('.foot-widget-title').off( "click");
	}
	
}