jQuery(document).ready(function($) {
	// console.log($('.js-photogallery'));
	$('.js-photogallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		variableWidth: false,
		autoplay: true,
		autoplaySpeed: 3000,
		mobileFirst : true,
		responsive : [
			{
				breakpoint : 1024,
				settings : {
					variableWidth: false,
				}
			}
		]
	});
});