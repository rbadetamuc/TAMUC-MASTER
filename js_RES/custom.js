/* Add here all your JS customizations */
jQuery(document).ready(function($) {
	checkSize();
	$("a.slide_Lbox").click(function() {
	$.fancybox({
			'padding'		: 0,
			'aspectRatio'	:  true,
			'width'			: "1280",
			'height'		: "720",
			'autoWidth'		: true,
			'autoHeight'	: true,
			'autoCenter'	: true,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'embed/'),
			'wrapCSS'		: 'Lbox_video',
			'type'			: 'iframe',
			'swf'			: {
			'preload'   : false

			},
			'afterLoad'		: function() {
	    		$(".tp-playToggle .fa").trigger( "click" );
			},
			'afterClose'		: function() {
	    		$(".tp-playToggle .fa").trigger( "click" );
			},
		});
	return false;
	});
	$('.b-search-box .fa').click(function(){
		var target = '.b-search-box #searchField';
		$(target).toggle();
		if($(target).is(':visible')){
			$(target).focus();
		}
	});
	/* $( "#requestForm" ).load( "RequestForm.html",function( response, status ) {
		if ( status) {
			$('#requestForm').removeClass('hidden');
	}else{
		var msg = "Sorry! error loading Request Form. Try reload page";
			alert(msg);
	}
	});  */
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
			$( "#requestForm" ).load( "RequestForm.html");
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
	$(".myLeoLink").hover(function(){
		$(this).find('img').attr('src','img/myLEO-over.svg');
	},function(){
		$(this).find('img').attr('src','img/myLEO.svg');		
	});
		$(".widget_nav_title").on('click',function(){
		if($(window).width() < BREAK.MD)
			$(".widget_nav_menu .menu_container").slideToggle();
		});		
	
});
function checkSize(){
	if ($(window).width() < BREAK.SM) {

	}if ($(window).width() > BREAK.SM) {

	}
	
}
function reloadScript(event)
{
    if( event.persisted )
    {
          window.location.reload();
    }
 
}

